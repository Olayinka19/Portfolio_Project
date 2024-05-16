import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
// import Rating from '@mui/material/Rating';

function Computers() {
    const [value, setValue] = React.useState(4);
    const Item = styled(Paper)(({ theme }) => ({
        // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
    <div>
    <div style={{ display: "flex", justifyContent: "center" }}>
              {/* <Button variant="outlined">TOP🔝</Button> */}
              <h4>Computers</h4>

          </div>
    <br />
    <br />
    <div className="intro2">
  <div className="port-2">
  <img className="pfp1" alt="pfp" src="https://images.pexels.com/photos/6498302/pexels-photo-6498302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="350px" height="290px"></img>
          <p>The Rise of AI Programmers</p>
          {/* <p>As artificial intelligence (AI) continues to advance, there has been a growing discourse surrounding the role of human programmers.</p> */}
          {/* <br/> */}
          <Button variant="outlined" href="/" target="_blank">
 Shop Now🛒 </Button>
  </div>
  <div className="port-2">
  <img className="pfp1" alt="pfp" src="https://images.pexels.com/photos/6498302/pexels-photo-6498302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="350px" height="290px"></img>
          <p>The Rise of AI Programmers</p>
          {/* <p>As artificial intelligence (AI) continues to advance, there has been a growing discourse surrounding the role of human programmers.</p> */}
          {/* <br/> */}
          <Button variant="contained" href="/" target="_blank">
 Shop Now🛒 </Button>
  </div>
  <div className="port-2">
  <img className="pfp1" alt="pfp" src="https://images.pexels.com/photos/6498302/pexels-photo-6498302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="350px" height="290px"></img>
          <p>The Rise of AI Programmers</p>
          {/* <p>As artificial intelligence (AI) continues to advance, there has been a growing discourse surrounding the role of human programmers.</p> */}
          {/* <br/> */}
          <Button variant="contained" href="/" target="_blank">
 Shop Now🛒 </Button>
  </div>
  <div className="port-2">
  <img className="pfp1" alt="pfp" src="https://images.pexels.com/photos/6498302/pexels-photo-6498302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="350px" height="290px"></img>
          <p>The Rise of AI Programmers</p>
          {/* <p>As artificial intelligence (AI) continues to advance, there has been a growing discourse surrounding the role of human programmers.</p> */}
          {/* <br/> */}
          <Button variant="contained" href="/" target="_blank">
 Shop Now🛒 </Button>
  </div>
  <div className="port-2">
  <img className="pfp1" alt="pfp" src="https://images.pexels.com/photos/6498302/pexels-photo-6498302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="350px" height="290px"></img>
          <p>The Rise of AI Programmers</p>
          {/* <p>As artificial intelligence (AI) continues to advance, there has been a growing discourse surrounding the role of human programmers.</p> */}
          {/* <br/> */}
          <Button variant="contained" href="/" target="_blank">
 Shop Now🛒 </Button>
  </div>
  <div className="port-2">
  <img className="pfp1" alt="pfp" src="https://images.pexels.com/photos/6498302/pexels-photo-6498302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="350px" height="290px"></img>
          <p>The Rise of AI Programmers</p>
          {/* <p>As artificial intelligence (AI) continues to advance, there has been a growing discourse surrounding the role of human programmers.</p> */}
          {/* <br/> */}
          <Button variant="contained" href="/" target="_blank">
 Shop Now🛒 </Button>
  </div>
  </div>

    
    </div>
  )
}

export default Computers;