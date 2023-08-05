// client.ts

import { createWalletClient, createPublicClient, custom, http } from "viem";
import { polygonMumbai, mainnet  } from "viem/chains";
import "viem/window";

export function ConnectWalletClient() {
  let transport;
  if (window.ethereum) {
    transport = custom(window.ethereum);
  } else {
    const errorMessage =
      "MetaMask or another web3 wallet is not installed. Please install one to proceed.";
    throw new Error(errorMessage);
  }

  const walletClient = createWalletClient({
    chain: polygonMumbai,
    transport: transport,
  });
  return walletClient;
}

export function ConnectPublicClient() {
  let transport;
  if (window.ethereum) {
    transport = custom(window.ethereum);
  } else {
    const errorMessage =
      "MetaMask or another web3 wallet is not installed. Please install one to proceed.";
    throw new Error(errorMessage);
  }
  const publicClient = createPublicClient({
    chain: polygonMumbai,
    transport: transport,
  });
  return publicClient;
}
