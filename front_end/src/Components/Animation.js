import React from 'react'
import { useSpring, animated } from 'react-spring'

function Animation() {
    const styles = useSpring({
      loop: true,
      to: [
        { opacity: 7, color: 'red' },
        { opacity: 2, color: 'rgb(14,26,19)' },
      ],
      from: { opacity: 0, color: 'red' },
    })
    // ...
    return <animated.div style={styles}><h1>Olayinka.Hendrix</h1></animated.div>
  }


export default Animation;