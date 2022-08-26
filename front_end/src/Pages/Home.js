import React from 'react';
import home14 from "../images/home14.jpeg";
// import Animation from '../Components/Animation';


function Home() {
    const imgUrl1 = home14;
  return (
    <div>
        <marquee direction="Up"><h1> WELCOME TO MY NFT PAGE</h1></marquee>
        {/* <Animation /> */}
        <img className='home2' src={imgUrl1} />
      
    </div>
  )
}

export default Home
