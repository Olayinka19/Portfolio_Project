import React from 'react'
import { Form } from 'react-bootstrap'

function Profile() {
  return (
    <div className='profile'>
    <h1>Edit Your </h1>
    <h1>Web3 Profile</h1>
    <div className='profile__content'>
    {/* <img className=""
    src="" width="160" height="130" alt="image">
    </img> */}

    <h3 className='pof'>Profile</h3>

    <h5 id="displaypicchange">
      Displaypic Change
    </h5>
    <img className="displaypic" src="http://" ></img>


    <Form>
        <Form.Group className="mb-3">
          <Form.Label control-id="formBasicName">Name</Form.Label>
          <Form.Control type='text' placeholder='Enter Name' ></Form.Control>
          <Form.Text className="text-muted"> Please Enter Your Name</Form.Text>
            
          </Form.Group>
          <img className="ipfs" width="30px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdefinicionesde.org%2Fwp-content%2Fuploads%2F2020%2F07%2FIpfs-logo-1024-ice-text-700x700.png&f=1&nofb=1&ipt=86d7c72869a97fd8d28a9e74d805a9106dbefb5bbb14f22cca6e6c8ac6dbff15&ipo=images"></img>

          <Form.Group className="mb-3">
          <Form.Label control-id="formBasicName">Name</Form.Label>
          <Form.Control type='text' placeholder='Enter Name' ></Form.Control>
          <Form.Text className="text-muted"> Please Enter Your Name</Form.Text>
            
          </Form.Group>
            
    </Form>





    </div>
    
      
    </div>
  )
}

export default Profile
