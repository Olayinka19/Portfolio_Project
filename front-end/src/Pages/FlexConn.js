import React from 'react'
import FlexConnect from '../Components/FlexConnect';
import Spinner from 'react-bootstrap/Spinner';
// import './FlexConn.css';

function FlexConn() {
  return (
    <div>
      <FlexConnect />
      <Spinner animation="border" role="status" className='wallett'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>

      <Spinner animation="border" role="status" className='wallett1'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
      <Spinner animation="grow"></Spinner>
    </div>
  )
}

export default FlexConn
