
import './App.css';
import Home from './components/UI';
import Specializing from './components/specializing';
import Expertise from './components/Expertise';
import LatestProjects from './components/LatestProjects';
import Qualification from './components/Qualification';


import Header from './components/Header';
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Gallery from './components/Header/Gallery';
import ContactUs from './components/Header/Contact';
import Tile from './components/UI/Tile';
import Button from './components/Button';



const App = () => {

  useEffect(() => {

    AOS.init({
      duration: 1000,
    })
  })

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
            <Specializing />
            <Expertise />
            <LatestProjects />
            <Qualification />
          </Route>
          <Route path="/gallery">

            <Gallery />
          </Route>
          <Route path="/contact">

            <ContactUs/>
          </Route>
          <Route path="/tile">

           <Button/>
          </Route>
        </Switch>



        {/* <Slider slides={sliderData} /> */}
      </div>
    </Router>
  );
}

export default App;