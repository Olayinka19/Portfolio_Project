import React from 'react';
// import home14 from "../images/home14.jpeg";
import Animation from '../Components/Animation';
import Transition from '../Components/Transition';
import Transition2 from '../Components/Transition2';


function Home() {
    // const imgUrl1 = home14;
  return (
    <div>
      <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<div class="content">
  <h1>8.4 Pursuit Fellow </h1>
</div>
      < Animation / >
        {/* <marquee direction="Up">Olayinka</marquee>
        <marquee direction="down">Hendrix</marquee> */}
        
       {/* <marquee><img className='home2' src={imgUrl1} /></marquee>  */}
        <Transition />
        <Transition2 />
       
    </div>
  )
}

export default Home
