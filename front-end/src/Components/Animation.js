import React from 'react'
import { useSpring, animated } from 'react-spring'

function Animation() {
    const styles = useSpring({
      loop: true,
      to: [
        { opacity: 7, color: 'white' },
        { opacity: 1, color: '#76b469' },
      ],
      from: { opacity: 0, color: 'white' },
    })
    // ...
    return <animated.div style={styles}><h2>Olayinka.Hendrix</h2></animated.div>
  }


export default Animation;