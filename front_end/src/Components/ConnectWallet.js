import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import home18 from "../images/home18.png";


// const API = process.env.REACT_APP_API_URL;


function ConnectWallet() {
  const imgUrl6 = home18;

  return (
   
    <div>
   {/* <h1>Connect Your Wallet</h1> */}
   <div class="container-fluid">
    <div class="background">
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
      <section class="header-content">
         <h1>Welcome to my NFT Animation</h1>
        <p> Welcome to my studio. We are a passionated group of people, </p>
           <p>making high quality products designed to make your life easier</p>
        <button a href='https://www.linkedin.com/in/olayinka-f-2a46a6229/'>Linkedin</button>
        <button><a href="https://github.com/Olayinka19">GitHub</a></button>
        
      </section>
    </div>
    </div>
    </div>
  )
}

export default ConnectWallet