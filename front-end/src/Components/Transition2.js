import React from 'react'
import { useSpring, animated } from 'react-spring';
import { Link } from "react-router-dom";


function Transition2() {
    const styles = useSpring({
      loop: true,
      from: { rotateZ: 4000 },
      to: { rotateZ: 2 },
    })
  
    return (
      <animated.div className="animenn"
        style={{
          width: 8,
          height: 180,
          backgroundColor: 'white',
          borderRadius: 70,
          ...styles,
        }}
      />
    )
  }
export default Transition2;