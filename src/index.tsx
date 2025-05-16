import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  // BackpackWalletAdapter,
  CoinbaseWalletAdapter,
  // MagicEdenWalletAdapter,
  // ReownWalletAdapter,
  TrustWalletAdapter,
  LedgerWalletAdapter,
  TrezorWalletAdapter,
  // EthereumWalletAdapter,
  Coin98WalletAdapter,
  // TiplinkWalletAdapter,
  BitgetWalletAdapter,
  // JupiterWalletAdapter,
} from "@solana/wallet-adapter-wallets";

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    // new BackpackWalletAdapter(),
    new CoinbaseWalletAdapter(),
    // new MagicEdenWalletAdapter(),
    // new ReownWalletAdapter(),
    new TrustWalletAdapter(),
    new LedgerWalletAdapter(),
    new TrezorWalletAdapter(),
    // new EthereumWalletAdapter(),
    new Coin98WalletAdapter(),
    // new TiplinkWalletAdapter(),
    new BitgetWalletAdapter(),
    // new JupiterWalletAdapter(),
  ],
});

// 1. Get projectId from https://cloud.reown.com
const projectId = "3c791bf83429a093a0768fed4d34965a";

// 2. Create a metadata object - optional
const metadata = {
  name: "AppKit",
  description: "AppKit Solana Example",
  url: "https://stepanyukvova200.github.io", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// 3. Create modal
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata: metadata,
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();
