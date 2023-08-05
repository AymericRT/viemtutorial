import WalletButton from "./walletButton";
import MintButton from "./mintButton";
import SendButton from "./sendButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center justify-center h-screen ">
        <a
          href="https://rareskills.io"
          target="_blank"
          className="text-white font-bold text-3xl hover:text-[#0044CC]"
        >
          Viem.sh
        </a>   
        <div className="h-[300px] min-w-[150px] flex flex-col justify-between  backdrop-blur-2xl bg-[#290330]/30 rounded-lg mx-auto p-7 text-white border border-purple-950">
          <WalletButton />
          <SendButton />
          <MintButton />
        </div>
        <a
          href="https://rareskills.io"
          target="_blank"
          className="text-white font-bold text-3xl hover:text-[#0044CC]"
        >
          Rareskills.io
        </a>
      </div>
    </main>
  );
}
