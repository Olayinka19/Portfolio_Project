import React from 'react'
import { useState, useEffect } from 'react';
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
      <h1>{!currentAccount? "connect your Wallet" : <p>{currentAccount}</p>}</h1>
      <br></br>
      <button className='wallet' onClick={connectWallet}>Connect</button>
    </div>
  )
}

export default FlexConnect
