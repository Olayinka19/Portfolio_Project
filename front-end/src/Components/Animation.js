import React from 'react'
import { useSpring, animated } from 'react-spring'
import Badge from 'react-bootstrap/Badge';

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
    return <animated.div style={styles}><p className="pro" > <Badge bg="secondary"><h1>Top Categories</h1> </Badge></p></animated.div>
  }


export default Animation;