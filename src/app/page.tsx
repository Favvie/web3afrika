// import { useState } from "react";
"use client"
import Image from "next/image";

export default function Home() {
  // const [currentAccount, setCurrentAccount] = useState<string | null>(null);
  // const [tokenBalance, setTokenBalance] = useState<number>(0);

  const connectWallet = () => {
    // Wallet connection logic goes here
  };

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
          {/* {!currentAccount ? ( */}
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          {/* ) : ( */}
            <div className="text-center">
              <p className="text-lg font-semibold">Connected Account:</p>
              {/* <p className="text-sm text-gray-600">{currentAccount}</p> */}
              <p className="mt-2 text-lg font-semibold">Token Balance:</p>
              {/* <p className="text-sm text-gray-600">{tokenBalance} Tokens</p> */}
            </div>
          {/* )} */}

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