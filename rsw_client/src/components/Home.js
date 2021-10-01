import React from "react";
import NavBar from "./NavBar";

const Home = () => (
  <div>
    <NavBar />
    <div id='home-para'>
      <p id='home-banner'>
        <span id='ready'>READY</span> *** <span id ='set'>SET</span> *** <span id='write'>WRITE</span>
      </p>
    </div>
    <div id='testimonials'>
      <p className='testimonial'>"RSW helped me to write a whale of a novel!" Merman Hellville</p>
      <p className='testimonial'>"My clients demand that I use Ready Set Write, whenever I'm crafting legal documents on their behalf." Noted, but annonymous, Appellate Attorney</p>
    </div>
  </div>
);

export default Home;