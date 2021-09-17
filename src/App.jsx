import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import GameToken from './abis/GameToken.json';

import CompareResult from './components/CompareResult';
import Loading from './components/Loading';
import Operation from './components/Operation';
import Panel from './components/Panel';

import CompareContextProvider from './contexts/CompareContext';
import InputContextProvider from './contexts/InputContext';
import OperationContextProvider from './contexts/OperationContext';

import GMTimage from './images/GMT-images.png';
import './index.css';


const FuckingCompare = () => {
  return (
    <CompareContextProvider>
      <App />
    </CompareContextProvider>
  )
}

const App = () => {

  useEffect(() => {
    web3Load();
  }, []);


  const [account, setAccount] = useState('0x0')
  const [token, setToken] = useState({})
  const [totalSupply, setTotalSupply] = useState(0)
  const [tokensWon, setTokensWon] = useState([])
  const [tokenURIs, setTokenURIs] = useState([])
  const COIN = {GMTimage}
  const [loading, setLoading] = useState(true)

  const web3Load = async () => {
      if (window.ethereum) {
          window.web3 = new Web3(window.ethereum);
          await window.ethereum.enable();
      }
      else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider);
      }
      else {
          alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
      

      const web3 = window.web3
      
      const accounts = await web3.eth.getAccounts()
      setAccount(accounts[0])
      
      const NetworkId = await web3.eth.net.getId()
      
      const NetworkData = GameToken.networks[NetworkId]
      
      if(NetworkData) {
        const abi = GameToken.abi
        const address = NetworkData.address
        
        const token = new web3.eth.Contract(abi, address)
        setToken(token)
        
        const totalSupply = await token.methods.totalSupply().call()
        setTotalSupply(totalSupply)
        
        let balanceOf = await token.methods.balanceOf(accounts[0]).call()
        for (let i=0; i < balanceOf; i++) {
          let id = await token.methods.tokenOfOwnerByIndex(accounts[0], i).call()
          let tokenURI = await token.methods.tokenURI(id).call()
          setTokenURIs([...tokenURIs])
        }
      } else {
        alert('Smart Contract not deplyed to detected network')
      }
      
      setLoading(false)
    };

  
  const Compare = (compareResult) => {  

    if(compareResult === true) {
        token.methods.mint(
            account,
            window.location.origin + COIN.GMTimage.toString()
        )
        .send({from: account})
        .on('transactionHash', (hash) => {
            return(
                setTokensWon ([...tokensWon, COIN.GMTimage]),
                setTokenURIs ([...tokenURIs, COIN.GMTimage])
            )
        })
      }
  }

  if (loading) {
    return(
      <Loading />
    )
  }

  return(
    <InputContextProvider>
      <OperationContextProvider>
          <div className="min-h-screen bg-gray-100 flex flex-col">
            <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
              <a href="/" className= "flex items-center flex-shrink-0 text-white mr-6">
                  <span className="font-semibold text-xl tracking-tight">GameToken</span>
              </a>
              <div className="flex flex-col items-center"> 
                <h1 className="font-medium text-base tracking-tight text-white">
                  Tokens Collected:<span id="result"/>&nbsp;{tokenURIs.length} 
                </h1>
                <div className="w-8 h-8 flex">
                  {tokenURIs.map((tokenURI, key) => {
                    return(
                      <img 
                        key={key}
                        src={tokenURI}
                      />
                    )
                  })}
                </div>
              </div>
              <ul className="flex">
                  <li className="mr-6">
                      <span className="font-medium text-base inline-block text-sm px-4 py-2 leading-none text-white border-white mt-4 lg:mt-0">Account: {account}</span>
                  </li>
              </ul>
            </nav>
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <Operation />
              <Panel />
              <CompareResult compare={Compare}/>
            </div>
          </div>
      </OperationContextProvider>
    </InputContextProvider>
  )
}

export default FuckingCompare