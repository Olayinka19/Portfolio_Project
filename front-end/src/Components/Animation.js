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
    return <animated.div style={styles}><h2>AheadShopping<img src="https://cdn-icons-png.flaticon.com/512/9485/9485813.png" width="40px" height="30px"></img></h2></animated.div>
  }


export default Animation;