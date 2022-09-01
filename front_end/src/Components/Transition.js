import React from 'react'
import { useSpring, animated } from 'react-spring';
import { Link } from "react-router-dom";


function Transition() {
    const styles = useSpring({
      loop: true,
      from: { rotateZ: 100 },
      to: { rotateZ: 280 },
    })
  
    return (
      <animated.div className="anime"
        style={{
          width: 18,
          height: 200,
          backgroundColor: 'green',
          borderRadius: 70,
          ...styles,
        }}
      />
    )
  }
export default Transition;