import React from 'react';
import './2_comingsoon.css';
import Navbar from './0_1_Navbar';

function ComingSoon() {
  return (
    <>
    <Navbar />
    <div id="container">
      <p id="shadow">
        <span id="glow">Com</span>
        <span id="blink">ing </span>
        <span id="glow">So</span>
        <span id="blink">on</span>
      </p>
    </div>
    </>
  );
}

export default ComingSoon;

