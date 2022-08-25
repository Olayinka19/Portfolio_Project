import React from 'react';
import home2 from "../images/home2.jpeg";

function Home() {
    const imgUrl1 = home2;
  return (
    <div>
        <h1>Welcome to Ahead_Online_Shopping</h1>
        <img className='home2' src={imgUrl1} />
      
    </div>
  )
}

export default Home
