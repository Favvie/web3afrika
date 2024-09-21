// import { useState } from "react";
"use client"
import React, {useState} from 'react'
import Image from "next/image";
import Web3 from 'web3';
import { useRouter } from "next/navigation";
import {ethers} from 'ethers';

import {TOKEN_CONTRACT_ABI} from '@/config/TokenContract';
import * as dotenv from "dotenv";
dotenv.config();


export default function Home() {
  // const [currentAccount, setCurrentAccount] = useState<string | null>(null);
  const [tokenBalance, setTokenBalance] = useState<number>(0);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const router = useRouter();

  // Initialize Web3 instance
  const web3 = window.ethereum ? new Web3(window.ethereum) : null;

   const getTokenBalance = async (account: string) => {
    try {
      const { ethereum } = window;
      if (walletAddress) {
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const tokenContract = new ethers.Contract(
          process.env.contractAddress as string,
          TOKEN_CONTRACT_ABI,
          signer
        );

        const balance = await tokenContract.balanceOf(account);
        setTokenBalance(balance);
      }
    } catch (error) {
      console.log(error);
    }
  };


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
          router.push('/');
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

  // const connectWallet = () => {
  //   // Wallet connection logic goes here
  // };

  const handleContribution = () => {
    // Contribution handling logic goes here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <main className="flex flex-col items-center gap-8 bg-white p-10 rounded-lg shadow-md">
        <Image
          src="/images/causekoin.png" // Updated path to images folder
          alt="Your Project Logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col items-center gap-4">
          {!walletAddress ? (
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              // onClick={connectWallet}
              onClick={requestAccount}
            >
              Connect Wallet
            </button>
           ) : ( 
            <div className="text-center">
              <p className="text-lg font-semibold">Connected Account:</p>
              <p className="text-sm text-gray-600">{walletAddress}</p>
              <p className="mt-2 text-lg font-semibold">Token Balance:</p>
              <p className="text-sm text-gray-600">{tokenBalance} Tokens</p>
            </div>
          )} 

          <button
            className={`px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition 
              // !currentAccount ? "opacity-50 cursor-not-allowed" : ""
            `}
            onClick={handleContribution}
            // disabled={!currentAccount}
          >
            I Have Contributed
          </button>
        </div>

        <ol className="list-decimal list-inside text-left text-sm text-gray-700">
          <li>
            Connect your wallet using the Connect Wallet button.
          </li>
          <li>
            Indicate your contribution by clicking the I Have Contributed button.
          </li>
          <li>
            Receive 100 tokens for every 10 contributions.
          </li>
        </ol>
      </main>

      <footer className="mt-10 text-center text-gray-600">
        © {new Date().getFullYear()} Your Project Name. All rights reserved.
      </footer>
    </div>
  );
}