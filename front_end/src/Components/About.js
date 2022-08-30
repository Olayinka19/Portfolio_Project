import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import home18 from "../images/home18.png";


// const API = process.env.REACT_APP_API_URL;


function About() {
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
        <img  width="150px" height="150px" src="https://media-exp1.licdn.com/dms/image/C4D03AQEX7M24PHpBoA/profile-displayphoto-shrink_800_800/0/1640898970691?e=1667433600&v=beta&t=-uH_kOf34zA3k5en7pLZoKe18PuVclW1OWFk_bGy4NQ"></img>
         <h1>Olayinka Fakanbi</h1>
        <p> 8.4 Pursuit Fellow </p>
           <p>Full stack Web Developer | Web3 and NFT Developer for @Project Hestia | Aspiring Data Scientist |</p>
        <button a href='https://www.linkedin.com/in/olayinka-f-2a46a6229/'>Linkedin</button>
        <button><a href="https://github.com/Olayinka19">GitHub</a></button>
        
      </section>
    </div>
    </div>
    </div>
  )
}

export default About