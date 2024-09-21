"use client";

import React from "react";
import Image from "next/image";

const MintNFT: React.FC = () => {
  // Placeholder functions for UI buttons
  const connectWallet = () => {
    // Wallet connection logic will go here
  };

  const mintNFT = () => {
    // NFT minting logic will go here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <main className="flex flex-col items-center gap-8 bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        {/* Project Logo */}
        <Image
          src="/images/causekoin.png" // Updated path to images folder
          alt="Your Project Logo"
          width={180}
          height={38}
          priority
        />

        {/* Page Title */}
        <h1 className="text-2xl font-semibold">Mint Your NFT</h1>

        {/* Wallet Address Input */}
        <div className="w-full">
          <label htmlFor="wallet" className="block text-sm font-medium text-gray-700">
            Wallet Address:
          </label>
          <input
            type="text"
            id="wallet"
            placeholder="0xYourWalletAddress"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Connect Wallet Button */}
        <button
          onClick={connectWallet}
          className="w-full flex justify-center items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Connect Wallet
        </button>

        {/* Mint NFT Button */}
        <button
          onClick={mintNFT}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
        >
          Mint NFT
        </button>

        {/* Confirmation Message */}
        <div className="w-full text-center">
          {/* This section will display confirmation messages */}
          {/* Example: */}
          {/* <p className="text-green-500">NFT Minted Successfully!</p> */}
        </div>

        {/* Error Message */}
        <div className="w-full text-center">
          {/* This section will display error messages */}
          {/* Example: */}
          {/* <p className="text-red-500">An error occurred. Please try again.</p> */}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-600">
        ©️ {new Date().getFullYear()} Your Project Name. All rights reserved.
      </footer>
    </div>
  );
};

export default MintNFT;