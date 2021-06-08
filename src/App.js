import React from 'react';
import Service from './Service/Service';
import About from './About_us/About';
import Popular from './Popular_searches/Popular';
import Recent from './Recent_searches/Recent';
import Footer from './Footer/Footer';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';

const discount_banner="https://i0.wp.com/www.saribox.com/assets/image/banner11.jpg";

const Header = () => {
  return(
    <>
        <header className='headr'>
        <h3 id='compname'>company name or logo</h3>
          <input  id="search-input" type="text" placeholder="Search here..."></input>
          <button id='searchbtn' type="submit"><i class="fas fa-search"></i></button>
          <button id='loginbtn' type="submit">Login/Sign up</button>
        </header>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to = "/">Home</Link>
                <Link to = "service" >Services</Link>
                <Link to = "about_us">About us</Link>
                <Link to = "contact_us">Contact us</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path = "/">
              <Home/>
            </Route>
            <Route path = "service">
              <Service />
            </Route>
            <Route path = "about_us">
              <About />
            </Route>
            <Route path ="contact_us">
              <Footer />
            </Route>
          </Switch>
        </BrowserRouter>
      
        <img id="headimg"src='https://c4.wallpaperflare.com/wallpaper/825/61/261/road-numbers-route-66-motorcycle-vehicle-hd-wallpaper-preview.jpg'/>
        <Service/>
        <About/>
        <img id="discount-banner" src={discount_banner}></img>
        <Popular/>
        <Recent/>
        <Footer/>
    </>    
  );
}
export default Header;