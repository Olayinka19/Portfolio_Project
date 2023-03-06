import React from 'react'
import { Form } from 'react-bootstrap';
// import Button from 'react-bootstrap';
import './Profile.css';
import { useState } from 'react';
import Animation from "../Components/Animation";


function Profile() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        // console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <div className='profile'>
    <h1>Edit Your </h1>
    <h1>Web3 Profile</h1>
    <div className='profile__content'>

    <h3 className='pof'>Profile</h3>
    <form>

    <h5 id="displaypicchange">
      Displaypic Change
    </h5>
  <div>
  <img className="displaypic" src={file} alt="pfp" /> 
  </div>
   
    <input className="uploader" type="file" name="file" onChange={handleChange}></input>

    <h5 className='pof'>Update Profile Avatar</h5>
    </form>

    <h4 className='rank'>
        <span className="rank-item">Rank</span>
        <span className="bg-primary rounded-pill">69</span>
    </h4>
    <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between">
            
        </li>
    </ul>
    <div className="text-success">
    <h4 className="">
        NFT
    </h4>
    <h5>PASSPORT</h5>
    <h5>ID</h5>

    </div>
 <h4 className='mb-3 d-flex justify-content-end'>Profile Information</h4>

    <Form>
        <Form.Group className="mb-3">
          <Form.Label control-id="formBasicName">First Name</Form.Label>
          <Form.Control type='text' placeholder='Enter Name' required ></Form.Control>
          <Form.Text className="text-muted"> Valid First Name is required.</Form.Text>
            
          </Form.Group>
          <img className="ipfs" width="30px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdefinicionesde.org%2Fwp-content%2Fuploads%2F2020%2F07%2FIpfs-logo-1024-ice-text-700x700.png&f=1&nofb=1&ipt=86d7c72869a97fd8d28a9e74d805a9106dbefb5bbb14f22cca6e6c8ac6dbff15&ipo=images"></img>

          <Form.Group className="mb-3">
          <Form.Label control-id="last">Last Name</Form.Label>
          <Form.Control type='text' placeholder='Enter Name' required ></Form.Control>
          <Form.Text className="text-muted"> Valid Last Name is required.</Form.Text>
            
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label control-id="user">UserName</Form.Label>
          <Form.Control id="user" type='text' placeholder='Enter UserName' required ></Form.Control>
          <Form.Text className="text-muted"> Your UserName is required.</Form.Text>
            
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label control-id="email">Email</Form.Label>
          <Form.Control type='email' placeholder='Enter Email' required ></Form.Control>
          <Form.Text className="text-muted"> Valid Email is required.</Form.Text>
            
          </Form.Group>

          <button className='btn btn-secondary mt-2'>Update Profile </button>

          <hr className='my-hr'/>

          <div className="row d-flex">
            <div className="col-md-6">
                <h3 className='mb-2'>Personal Wallet</h3>
            </div>
          </div>
          <input className='form-control' placeholder='place new wallet' id="newwallet" required>

          </input>

          <button className="btn btn-secondary mt-2">
          Update Wallet

          </button>
            <p className='lead'>
                Remeber your wallet is tied to your NFT, If you update your wallet, your NFT passport will be automatically updated! Both items are required for access. Once your NFT has been updated, please re-login using your new wallet.
            </p>

            <h5 id="walletsuccess" />
            <div className="col-lg-4">
                <div className="row mb-1">
                    <div className="col-md-3">
                        <img width="60px" alt="pfp" heigth="60px" className="img-fluid" src="https://img.icons8.com/plasticine/512/png.png" />

                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <h4 className="mb-2">Balance</h4>
                {/* <h3 className="mt-1"></h3> */}
            </div>
            <label className="">Internal Wallet</label>
            <h5>Transfer NFT to Personal Wallet</h5>
            <button className="btn btn-secondary mt-2">
                Transfer N2DR
            </button>
            {/* <h6 id="displayransfer" /> */}


          {/* <hr className='my-hr'/> */}

            
    </Form>





    </div>
    
      
    </div>
  )
}

export default Profile
