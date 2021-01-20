import logo from './logo.svg';
import './App.css';

function App() {
  const banner = {
    width:"100%"
  }
  return (
    <div className="App">
      <nav className="w3-bar w3-black">
        <a href="#home" className="w3-button w3-bar-item">Home</a>
        <a href="#band" className="w3-button w3-bar-item">Band</a>
        <a href="#tour" className="w3-button w3-bar-item">Tour</a>
        <a href="#contact" className="w3-button w3-bar-item">Contact</a>
      </nav>
      <div>
        <img className="mySlides" src="https://www.w3schools.com/howto/img_band_la.jpg"
        style={banner}/>
        <img className="mySlides" src="https://www.w3schools.com/howto/img_band_ny.jpg"
        style={banner}/>
        <img className="mySlides" src="https://www.w3schools.com/howto/img_band_chicago.jpg"
        style={banner}/>
      </div>
      <section className="w3-container w3-center w3-content" style={{maxWidth:600}}>
        <h2 className="w3-wide">THE BAND</h2>
        <p className="w3-opacity"><i>We love music</i></p>
        <p className="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </section>
      <section className="w3-row-padding w3-center w3-light-grey">
        <article className="w3-third">
          <p>John</p>
          <img src="https://www.w3schools.com/howto/img_bandmember.jpg" alt="Random Name"  />
          <p>John is the smartest.</p>
        </article>
        <article className="w3-third">
          <p>Paul</p>
          <img src="https://www.w3schools.com/howto/img_bandmember.jpg" alt="Random Name" />
          <p>Paul is the prettiest.</p>
        </article>
        <article className="w3-third">
          <p>Ringo</p>
          <img src="https://www.w3schools.com/howto/img_bandmember.jpg" alt="Random Name"  />
          <p>Ringo is the funniest.</p>
        </article>
      </section>
      <footer className="w3-container w3-padding-64 w3-center w3-black w3-xlarge">
        <a href="#"><i className="fa fa-facebook-official"></i></a>
        <a href="#"><i className="fa fa-pinterest-p"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-flickr"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <p className="w3-medium">
          Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
