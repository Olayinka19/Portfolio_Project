import React from 'react'
import { useSpring, animated } from 'react-spring';
import { Link } from "react-router-dom";


function Transition() {
    const styles = useSpring({
      loop: true,
      from: { rotateZ: 1000 },
      to: { rotateZ: 2800 },
    })
  
    return (
      <animated.div className="anime"
        style={{
          width: 180,
          height: 180,
          backgroundColor: 'purple',
          borderRadius: 70,
          ...styles,
        }}
      />
    )
  }
export default Transition;