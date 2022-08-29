import React from 'react';
// import home14 from "../images/home14.jpeg";
// import Animation from '../Components/Animation';
import Transition from '../Components/Transition';


function Home() {
    // const imgUrl1 = home14;
  return (
    <div>
      <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<div class="content">
  <h1>Olayinka Fakanbi 8.4</h1>
</div>
      {/* < Animation / > */}
        <marquee direction="Up"><h1> WELCOME TO MY NFT PAGE</h1></marquee>
        
       {/* <marquee><img className='home2' src={imgUrl1} /></marquee>  */}
        <Transition />
    </div>
  )
}

export default Home
