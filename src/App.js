import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carousel from './pages/0_landingpage';
import RegisterForm from  './pages/1_Registration_form';
import ComingSoon from './pages/2_comingsoon';

function App() {
  return (
    <Fragment>
    <Router>
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path='/Register' element={<RegisterForm />} />
          <Route path='Know_the_Star' element={<ComingSoon />} />
          <Route path='Know_the_Alumni' element={<ComingSoon />} />
        </Routes>
    </Router>
  </Fragment>
);
}

export default App;
