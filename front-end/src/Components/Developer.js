import React from 'react'
import Figure from 'react-bootstrap/Figure';
import Animation from "../Components/Animation";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
function Developer() {
    return (
  <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Animation />
     
      </div>
      <div >
      <marquee direction="up" style={{ display: 'flex', justifyContent: 'center',  borderRadius: '50%' }}>
      <img
            width="171"
            height="180"
            alt="171x180"
            src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F312b1033-01d7-4b1c-a075-64ca0c79b05c%2FOlayinka_Fakanbi.jpg?id=a5b8ac40-ed54-464d-9702-7dd5c24a0e22&table=block&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=1c56301b-4ffe-419f-b2c0-5424d42c657c&cache=v2"
          />
      </marquee>
     
          </div>
        <Figure>
         
          <Figure.Caption>
          <p><img width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/476/476758.png"></img>Meet <b><u>Olayinka</u></b>, a talented <b><u>Software Engineer</u></b> with a passion for creating innovative  solutions to complex problems.
          <p> <img width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/476/476758.png"></img> <b>With over 1 years of experience in the industry</b>, I have developed a deep understanding of various programming languages, frameworks🤖, and tools.</p> </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Animation />
     
      </div>

<p><img width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/476/476758.png"></img> <b>My skills in multiple programming languages, including</b>  <u>JavaScript</u>, <u>Express.js</u>    and <u>Animations</u>. 
<p>I have become an expert in several popular frameworks such as<u>React</u> , <u>Angular</u>, and <u>Node.js</u>, <u>Tailwind-CSS</u>, and <u>React-Bootstrap</u>. 
     
<p><img width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/476/476758.png"></img><b>My expertise </b>extends to software development methodologies such as Agile and Scrum</p></p></p>
<div style={{ display: 'flex', justifyContent: 'center' }}>
      <Animation />
     
      </div>
<p> <img width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/476/476758.png"></img> In my free time, I love to work on personal projects, which allow me to explore new technologies and put my creativity to the test. I also enjoys mentoring aspiring developers and participating in hackathons and coding competitions.</p>
          </Figure.Caption>
        </Figure>
        </div>
        
      );
}

export default Developer