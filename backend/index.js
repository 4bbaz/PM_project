const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/user");
const LoginModel= require("./models/login");
const cors = require("cors");
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://root:root@cluster0.91ogx.mongodb.net/PMS?retryWrites=true&w=majority"
);

app.get("/users", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUsers", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});

app.get("/user/:id", async (req, res) => {
  UserModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
  // var regex= new RegExp(req.params.id,'i')

  // let data=await UserModel.find({
  //   "$or":[
  //     {cName:regex},
  //     {cId:regex},
  //     {pId:regex}

  //   ]

  // // })
  // res.json(data);
});

app.get("/search/:name",async (req, res) => {
  var regex= new RegExp(req.params.name,'g','i')
  let data=await UserModel.findOne({
    "$or":[
      {cName:regex},
      {cId:regex},
      {pId:regex},
      {bName:regex},
      {domain:regex},
      {tOfD:regex}
      ]
   })
  res.json(data);

});

// app.post("/login", async (req, res) => {
//   let doc = await LoginModel.findOne({ username: req.body.username });

//  console.log(doc.username)
//  console.log(req.body.username)
//  console.log(doc.password)
//  console.log(req.body.password)
//   if (doc) {
//     if (bcrypt.compareSync(req.body.password, doc.password)) {
//       const payload = {
//         username: doc.username
//       };
      
//       let token = jwt.sign(payload);
//       console.log(token);
//       res.json({ result: "success", token, message: "Login successfully" });
//     } else {
//       // Invalid password
//       res.json({ result: "error", message: "Invalid password" });
//     }
//   } else {
//     // Invalid username
//     res.json({ result: "error", message: "Invalid username" });
//   }
// });

app.post("/login", (request, response) => {
  // check if email exists
  LoginModel.findOne({ username: request.body.username })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt.compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {

          // check if password matches
          if(!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.username,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            email: user.username,
            token,
          });
        })
        // catch error if password does not match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});


app.get("/admin", (req, res) => {
  LoginModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
// app.get('/login',async(req,res )=> {
//   LoginModel.findById(req.params.id, (err, result) => {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json(result);
//     }

// })

// });

// app.get("/search/:pId", async (req, res) => {
//   UserModel.findOne(
//     { pId: new RegExp("^" + req.params.pId + "$", "i") },
//     function (err, result) {
//       if (err) {
//         res.json(err);
//       } else {
//         res.json(result);
//       }
//     }
//   );
// });

app.delete("/getUsers/:id", (req, res) => {
  UserModel.findByIdAndDelete(req.params.id, (err, result) => {});
});

app.put("/update/:id", (req, res) => {
  UserModel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});

const port = 5001;

app.listen(port, () => {
  console.log("successfully!");
});
