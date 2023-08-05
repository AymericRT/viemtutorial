"use client";
import { formatEther, getContract } from "viem";
import { wagmiAbi } from "./abi";
import { ConnectWalletClient, ConnectPublicClient } from "./client";

export default function MintButton() {
	
	// Function to Interact With Smart Contract
  async function handleClick() {
		
		// Declare Client
    const walletClient = ConnectWalletClient();
    const publicClient = ConnectPublicClient();
		
		// Create a Contract Instance
		// Pass publicClient to perform Public Client Contract Methods
		// Pass walletClient to perform Wallet Client Contract Methods
    const contract = getContract({
      address: "0x7E6Ddd9dC419ee2F10eeAa8cBB72C215B9Eb5E23",
      abi: wagmiAbi,
      publicClient,
      walletClient,
    });
		
		// Reads the view state function symbol via Contract Instance method
    const symbol = await contract.read.symbol();

		// Reads the view state function name via Contract Instance method
    const name = await contract.read.name();


		// Reads the view state function symbol via Contract Action method
		// Contract Action do not rely on Clients
    const totalSupply = await publicClient.readContract({
      address: '0x7E6Ddd9dC419ee2F10eeAa8cBB72C215B9Eb5E23',
      abi: wagmiAbi,
      functionName: 'totalSupply',
    })

		// Format ether converts BigInt(Wei) to String(Ether)
    const totalSupplyInEther = formatEther(totalSupply);

    alert(`Symbol: ${symbol}\nName: ${name}\ntotalSupply: ${totalSupplyInEther}`);
    try {
			
			// Declare Wallet Client and Retrieve wallet address
      const client = walletClient;
      const [address] = await client.getAddresses();

			// Writes the state-changin function mint via Contract Instance method.
      const result = await contract.write.mint({account: address});

      alert(`${result} ${name}`);
    } catch (error) {
      // Handle any errors that occur during the transaction
      alert(`Transaction failed: ${error}`);
    }
  }

  return (
    <>
      <button
        className="py-2.5 px-2 rounded-md bg-[#1e2124] flex flex-row items-center justify-center border border-[#1e2124] hover:border hover:border-indigo-600 shadow-md shadow-indigo-500/10"
        onClick={handleClick}
      >
        <svg
          className="w-4 h-4 mr-2 -ml-1 text-[#626890]"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="ethereum"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
          ></path>
        </svg>
        <h1 className="text-center">Mint</h1>
      </button>
    </>
  );
}