import React from 'react'
import { useSpring, animated } from 'react-spring'

function Animation() {
    const styles = useSpring({
      loop: true,
      to: [
        { opacity: 7, color: 'white' },
        { opacity: 5, color: '#76b469' },
      ],
      from: { opacity: 0, color: 'white' },
    })
    // ...
    return <animated.div style={styles}><h1>░P░e░r░s░o░n░a░l░ ░P░o░r░t░f░o░l░i░o░</h1></animated.div>
  }


export default Animation;