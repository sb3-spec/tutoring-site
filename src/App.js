import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Scheduling from './Components/pages/Scheduling';
import Contact from './Components/pages/Contact';
import Testimonials from './Components/pages/Testimonials';
import Home from './Components/pages/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/scheduling' exact component={Scheduling} />                       
        <Route path='/contact' exact component={Contact} />
        <Route path='/testimonials' exact component={Testimonials} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
