
import './Home.css';
import Carouse from '../carouse/Carouse';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer';


function Home() {
 
document.title = 'Home'
  return (
 
  <div className="App">
    <Navbar/>
  <Carouse/>
 
<div className="text">
  <div className="gr">

  <p>WinVinaya is the best platform to help <br></br> you enhance your skill, expands your knowledge and <br></br>prepare for techinical interviews</p>

  </div>
  </div>


  <div className="wrap">
  <div className="layer layer1"></div>
  <div className="layer layer2"></div>
  <div className="layer layer3"></div>

  </div>

  
  </div>



  );
}

export default Home;
