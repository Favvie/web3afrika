"use client"

import React, {useState} from 'react'
import Image from 'next/image'
import Web3 from 'web3';
import { useRouter } from "next/navigation";

// Extend the Window interface to include ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

const ConnectWallet: React.FC = () => {

  const [walletAddress, setWalletAddress] = useState<string>('');
  const router = useRouter();

  // Initialize Web3 instance
  const web3 = window.ethereum ? new Web3(window.ethereum) : null;

  const requestAccount = async (): Promise<void> => {
    console.log('Requesting account...');
    if (window.ethereum) {
      try {
        console.log('MetaMask detected');
        const accounts: string[] = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        // console.log('MetaMask accounts', accounts);
        setWalletAddress(accounts[0]);

        // Save the wallet address in local storage
        localStorage.setItem('walletAddress', accounts[0]);

        // Redirect to mint page if wallet is connected
        if (accounts.length > 0) {
          router.push('/mint');
        } else {
          console.log('No accounts found.');
        }
      } catch (err: any) {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error.
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      }
    } else {
      console.log('MetaMask not detected');
      alert('Please install MetaMask and connect to a network');
    }
  };

  return (
    <div>
      <div className='flex flex-row justify-between items-center p-8 border-b border-slate-500'>

        <Image 
           src={"/assets/logo.png"}
           width={140}
           height={30}
           alt="Project Logo"
        />
      

      <button 
          onClick={requestAccount}
             className='flex flex-row justify-between items-center h-[52px] bg-yellow1 py-2 px-4 rounded-2xl text-white font-medium text-lg'
          >
             <Image 
              src="/assets/metamask.png" 
              className="mr-2"
              width={24} 
              height={24}
              alt="MetaMask Logo"
             /> 
             Connect MetaMask
        </button> 
      </div>
    </div>
  )
    
  
}

export default ConnectWallet