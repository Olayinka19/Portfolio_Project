import React from 'react';
import { useState} from 'react';
import Button from 'react-bootstrap/Button';
// import './Flex.css';

function FlexConnect() {
    const [currentAccount, setCurrentAccount] = useState();
    const connectWallet = async() => {
        try {
        if(!window.ethereum) return alert ("You do not have metamask installed");
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
        setCurrentAccount(accounts[0])
    } catch (error) {
        console.log(error)
        throw window.newError("no object found")
    }
}
  return (
    

    <div >
      <h1>{!currentAccount? "Connect your Wallet" : <p>WalletID: {currentAccount}</p>}</h1>
      <br></br>
      <Button variant="success" onClick={connectWallet} className="connect">Connect</Button>
    </div>
  )
}

export default FlexConnect
