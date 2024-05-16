import React from 'react'
// import Button from '@mui/material/Button';
import Accordion from 'react-bootstrap/Accordion';
import Animation from "../Components/Animation";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
function About() {
  // const imgUrl6 = home18;
  // https://m.media-amazon.com/images/I/71seY2ns8oL._AC_SL1500_.jpg
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
   
    <div>
   {/* <h1>Connect Your Wallet</h1> */}
   
   <div className="container-fluid">
    <div className="background">
       <div className="cube"></div>
       <div className="cube"></div>
       <div className="cube"></div>
       <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      {/* <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div> */}
      <section className="header-content">
      <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* <Animation /> */}
      </div>
      <h3> OlaFolio gaming Competition 2024
</h3>
<div className="intro2">
    <div className="port-2">
  <img className="pfp1" alt="pfp" src="https://images.pexels.com/photos/6498302/pexels-photo-6498302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="350px" height="290px"></img>
          <p>The Rise of AI Programmers</p>
          {/* <p>As artificial intelligence (AI) continues to advance, there has been a growing discourse surrounding the role of human programmers.</p> */}
          {/* <br/> */}
    
  </div>
  <div className="port-2">
  <img className="pfp1" alt="pfp" src="https://images.pexels.com/photos/6498302/pexels-photo-6498302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="350px" height="290px"></img>
          <p>The Rise of AI Programmers</p>
          {/* <p>As artificial intelligence (AI) continues to advance, there has been a growing discourse surrounding the role of human programmers.</p> */}
          {/* <br/> */}
   
  </div>
  <div className="port-2">
  <img className="pfp1" alt="pfp" src="https://images.pexels.com/photos/6498302/pexels-photo-6498302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="350px" height="290px"></img>
          <p>The Rise of AI Programmers</p>
          {/* <p>As artificial intelligence (AI) continues to advance, there has been a growing discourse surrounding the role of human programmers.</p> */}
          {/* <br/> */}
         
  </div>
 





    </div>
  
{/* <Link to="/"><img src = "https://cdn-icons-png.flaticon.com/512/759/759400.png?w=1380&t=st=1681618963~exp=1681619563~hmac=5c60a674eb96dfa21e036f66785a41dfbbe829173db8c7450253ba220956fc83" width="35px" height="35px"></img><Button variant="error">Home</Button></Link> */}
{/* <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/smiley-people-playing-videogame-side-view_23-2149349995.jpg?t=st=1681598378~exp=1681598978~hmac=c620e5ac3a8c5b911ed3acb77c08ba0bf9734934c40dd09cb0b0b454185dbf4f" /></Item>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/premium-photo/winning-side-view-excited-african-guy-male-professional-gamer-wearing-headphones-celebrating-success-while-participating-esport-tournament-people-playing-online-video-game_386167-10371.jpg" /></Item>
        </Grid>

        

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/smiley-man-wearing-vr-glasses-medium-shot_23-2149350043.jpg?t=st=1681598378~exp=1681598978~hmac=a05eaea10743a68086395df9a283e29249c871f5d0ee2c7be27d6427a39bdcef" /></Item>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/back-view-man-winning-videogame_23-2149350002.jpg?t=st=1681598378~exp=1681598978~hmac=703a647c901d0ba376a92586bdfe556ba0aef68904fdfb2c16f62649eb9bff57" /></Item>

        </Grid>

      </Grid>
    </Box> */}

    {/* <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3}>
        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/young-adult-enjoying-playing-video-game_23-2149250008.jpg?t=st=1681598378~exp=1681598978~hmac=13120da7ce13abb166987b354167c6a29634b15b006ba6546f5931d2f9506aab" /></Item>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/professional-esport-gamer-playing-game-with-gaming-controller_53876-102992.jpg?w=2000&t=st=1681627551~exp=1681628151~hmac=d61e37e14871cebae79444dd08843e3295cd3ff938c173078c607c63e0fdde28" /></Item>
        </Grid>

        

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/portrait-man-playing-video-games-with-controller_482257-31364.jpg?w=2000&t=st=1681627464~exp=1681628064~hmac=5a439ca8f7a05076f9da5cc223da28a07141867899b7e52e2f9a363301ce2b1b" /></Item>
        </Grid>

        <Grid md={3}>
          <Item><img width="350px" height="220px" alt="First slide" src="https://img.freepik.com/free-photo/girl-playing-videogame-laptop_23-2148963899.jpg?w=2000&t=st=1681627438~exp=1681628038~hmac=ccaa5c1cdd12585008f6d8ced019a9e0239fcf91f4c0682510654107289e48bd" /></Item>

        </Grid>

      </Grid>
    </Box> */}
    

    

    {/* <Link to="/"><img src = "https://cdn-icons-png.flaticon.com/512/759/759400.png?w=1380&t=st=1681618963~exp=1681619563~hmac=5c60a674eb96dfa21e036f66785a41dfbbe829173db8c7450253ba220956fc83" width="35px" height="35px"></img><Button variant="error">Home</Button></Link> */}
   
        </div>
      </section>
    </div>
    </div>
    </div>
  )
}

export default About