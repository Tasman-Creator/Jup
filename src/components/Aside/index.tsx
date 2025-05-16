import React from 'react'
import "@reown/appkit-wallet-button/react";
import { CloseIcon, QuickAccountIcon, QuickIcon } from '../icons'
import './style.scss'


/* import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  //BackpackWalletAdapter,
  CoinbaseWalletAdapter,
  //MagicEdenWalletAdapter,
  //ReownWalletAdapter,
  TrustWalletAdapter,
  LedgerWalletAdapter,
  TrezorWalletAdapter,
  //EthereumWalletAdapter,
  Coin98WalletAdapter,
  //TiplinkWalletAdapter,
  BitgetWalletAdapter,
  //JupiterWalletAdapter,
} from "@solana/wallet-adapter-wallets";

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    //new BackpackWalletAdapter(),
    new CoinbaseWalletAdapter(),
    //new MagicEdenWalletAdapter(),
    //new ReownWalletAdapter(),
    new TrustWalletAdapter(),
    new LedgerWalletAdapter(),
    new TrezorWalletAdapter(),
    //new EthereumWalletAdapter(),
    new Coin98WalletAdapter(),
    //new TiplinkWalletAdapter(),
    new BitgetWalletAdapter(),
    //new JupiterWalletAdapter(),
  ],
}); */

type AsideProps = {
  isAsideOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/* const wallets = [
  'phantom', 'solflare', 'backpack', 'coinbase',
  'magiceden', 'reown', 'trust', 'ledger',
  'trezor', 'ethereum', 'coin98', 'tiplink',
  'bitget', 'jupiter'
] */

const Aside: React.FC<AsideProps> = ({isAsideOpen}) => {
/*  const handleConnect = (walletKey: keyof typeof solanaWeb3JsAdapter.wallets) => {
    const selectedWallet = solanaWeb3JsAdapter.wallets[walletKey]; // Отримуємо адаптер для вибраного гаманця
    connect(selectedWallet) // Підключаємо до цього гаманця
      .then(() => {
        console.log(`Connected to ${walletKey}`);
      })
      .catch((error) => {
        console.error(`Failed to connect to ${walletKey}:`, error);
      });
  }; */

  return (
    <div className="aside">
      <div className="aside__background"></div>
      <div className="aside__content">
        {/*<appkit-button />*/}
        {/* <W3mAllWalletsListItem /> */}
        {/*<appkit-wallet-button wallet="metamask" qrcode="qrcode" />
        <appkit-wallet-button wallet="trust" />*/}
        <button className='aside__close-btn' onClick={() => isAsideOpen(false)}>
          <CloseIcon />
        </button>
        <div className="aside__content-header">Connect</div>
        <button className="aside__content-quick-account">
          <span className="aside__content-quick-account-new">NEW!</span>
          <div className="aside__content-quick-account-info">
            <div>
              <div className="aside__content-quick-account-info-title">
                <QuickIcon />
                Jupiter Quick Account
              </div>
              <div className="aside__content-quick-account-info-subtitle">
                Trade instantly without signing transactions!
              </div>
            </div>

            <div className="aside__content-quick-account-info-img">
              <QuickAccountIcon />
            </div>
          </div>
        </button>
        <div className="aside__content-top-wallets">
          <div className="aside__content-top-wallets-title">Top wallets</div>
          <button className="aside__content-top-wallets-jupiter" onClick={() => {}}>
            <img
              src={`${process.env.PUBLIC_URL}/walletImg/jupiter.webp`}
              alt=""
            />
            <div>
              <div className="aside__content-top-wallets-jupiter-title">
                Jupiter Mobile
              </div>
              <div className="aside__content-top-wallets-jupiter-subtitle">
                On-the-go and Desktop
              </div>
            </div>
          </button>
          <div className="aside__content-top-wallets-buttons">
            <button className="aside__content-top-wallets-button">
              <img
                src={`${process.env.PUBLIC_URL}/walletImg/phantom.svg`}
                alt=""
              />
            </button>

            <button className="aside__content-top-wallets-button">
              <img
                src={`${process.env.PUBLIC_URL}/walletImg/solfare.svg`}
                alt=""
              />
            </button>
            <button className="aside__content-top-wallets-button">
              <img
                src={`${process.env.PUBLIC_URL}/walletImg/backpack.png`}
                alt=""
              />
            </button>
            <button className="aside__content-top-wallets-button">
              <img
                src={`${process.env.PUBLIC_URL}/walletImg/coinbase.svg`}
                alt=""
              />
            </button>
            <button className="aside__content-top-wallets-button">
              <img
                src={`${process.env.PUBLIC_URL}/walletImg/magicEden.svg`}
                alt=""
              />
            </button>
            <button className="aside__content-top-wallets-button">
              <img
                src={`${process.env.PUBLIC_URL}/walletImg/reown.svg`}
                alt=""
              />
              QR
            </button>
          </div>
        </div>
        <div className="aside__content-more-wallets">
          <div className="aside__content-top-wallets-title">More wallets</div>
          <div className="aside__content-top-wallets-buttons">
            <button className="aside__content-top-wallets-button">
              <img
                src={`${process.env.PUBLIC_URL}/walletImg/trust.svg`}
                alt=""
              />
            </button>
            <button className="aside__content-top-wallets-button">
              <img
                src={`${process.env.PUBLIC_URL}/walletImg/ledger.svg`}
                alt=""
              />
            </button>
            <button className="aside__content-top-wallets-button">
              <img
                src={`${process.env.PUBLIC_URL}/walletImg/trezor.svg`}
                alt=""
              />
            </button>
            <button className="aside__content-top-wallets-button">
              <img
                src={`${process.env.PUBLIC_URL}/walletImg/ethereum.svg`}
                alt=""
              />
            </button>
            <button className="aside__content-top-wallets-button">
              <img
                src={`${process.env.PUBLIC_URL}/walletImg/coin98.svg`}
                alt=""
              />
            </button>
            <button className="aside__content-top-wallets-button">
              <img
                src={`${process.env.PUBLIC_URL}/walletImg/tipLink.svg`}
                alt=""
              />
            </button>
            <button className="aside__content-top-wallets-button">
              <img
                src={`${process.env.PUBLIC_URL}/walletImg/bitget.png`}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aside
