import React from 'react'
import { useSpring, animated } from 'react-spring'
import Badge from 'react-bootstrap/Badge';

function Animation() {
    const styles = useSpring({
      loop: true,
      to: [
        { opacity: 4, color: 'gold' },
        { opacity: 1, color: 'white' },
      ],
      from: { opacity: 0, color: 'white' },
    })
    // ...
    return <animated.div style={styles}><h1 className="pro">FEATURED PRODUCTS</h1> </animated.div>
  }


export default Animation;