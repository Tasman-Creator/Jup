import React, { useEffect, useState } from 'react'
import './style.scss'
import Header from '../../components/header'
import Background from '../../components/background'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../../constants/routes'
import Instant from './instant'
import Reccuring from './recurring'
import Trigger from './trigger'
import axios from 'axios';
import Aside from '../../components/Aside'
import Chart from './chart'
import { useTokenStore } from "../../store/useTokenStore";

type Bar = {
  o: number;
  h: number;
  l: number;
  c: number;
  v: number;
  t: number;
};

/** API returns { time (ms), open, high, low, close, volume } */
type OracleBar = {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

const oracleBarToBar = (b: OracleBar): Bar => ({
  t: Math.floor(b.time / 1000),
  o: b.open,
  h: b.high,
  l: b.low,
  c: b.close,
  v: b.volume,
});

const Spot: React.FC = () => {
  const [sellingBars, setSellingBars] = useState<Bar[]>([]);
  const [buyingBars, setBuyingBars] = useState<Bar[]>([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()

  const {
    selectedBuyingToken,
    selectedSellingToken,
  } = useTokenStore()

  useEffect(() => {
    const nowMs = Date.now();
    const fromMs = nowMs - 86400 * 1000; // 24h ago in ms
    const tillMs = nowMs;
    const feedSelling = `${selectedSellingToken.symbol}USD`;
    const feedBuying = `${selectedBuyingToken.symbol}USD`;

    axios
      .get(
        `https://history.oraclesecurity.org/trading-view/data?feed=${encodeURIComponent(feedSelling)}&type=15&from=${fromMs}&till=${tillMs}`
      )
      .then((response) => {
        const raw: OracleBar[] = Array.isArray(response.data.result) ? response.data.result : [];
        console.log("sellingBars");
        console.log(response);
        setSellingBars(raw.map(oracleBarToBar));
      })
      .catch((err) => console.log(err));

    axios
      .get(
        `https://history.oraclesecurity.org/trading-view/data?feed=${encodeURIComponent(feedBuying)}&type=15&from=${fromMs}&till=${tillMs}`
      )
      .then((response) => {
        const raw: OracleBar[] = Array.isArray(response.data.result) ? response.data.result : [];
        setBuyingBars(raw.map(oracleBarToBar));
      })
      .catch((err) => console.log(err));
  }, [selectedBuyingToken.address, selectedBuyingToken.symbol, selectedSellingToken.address, selectedSellingToken.symbol]);

  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <>
      <Background/>
      <Header isAsideOpen={setIsAsideOpen}/>
      {isAsideOpen && (
        <Aside isAsideOpen={setIsAsideOpen}/>
      )}

      <div className="spot-container">
        <div className="spot-header">
          <div
            className={`spot-header-tab ${
              location.pathname === routes.spot_instant ||
              location.pathname === '/' ||
              location.pathname === routes.spot
                ? 'active'
                : ''
            }`}
            onClick={() => navigate(routes.spot_instant)}
          >
            <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className="text-v2-primary">
              <path
                d="M13.1925 2.76478C14.9216 1.8138 16.8652 1.32099 18.8385 1.33323C19.2967 1.33607 19.6666 1.70833 19.6666 2.16655C19.6666 4.50847 19.0097 8.58964 14.7896 11.6804C14.8607 11.9784 14.9414 12.3706 14.9973 12.804C15.0582 13.2768 15.0925 13.8211 15.0427 14.3566C14.9936 14.885 14.8572 15.4665 14.5267 15.9623L14.5259 15.9634C13.9601 16.8092 12.8931 17.2995 12.1477 17.5699C11.7471 17.7152 11.377 17.8183 11.1077 17.8851C10.9048 17.9354 10.7558 17.966 10.6883 17.9792C10.4315 18.028 10.1698 17.9767 9.96591 17.8065C9.77625 17.6481 9.66662 17.4138 9.66662 17.1667V13.3451L7.65499 11.3334H3.83329C3.58623 11.3334 3.3519 11.2238 3.19357 11.0341C3.03524 10.8445 2.96923 10.5944 3.01335 10.3513C3.04146 10.1972 3.07727 10.0443 3.11496 9.89231C3.18175 9.62303 3.28481 9.25296 3.43011 8.8524C3.70049 8.10699 4.19084 7.03991 5.0366 6.47413L5.03771 6.47339C5.53353 6.14284 6.11502 6.00643 6.64341 5.95732C7.17898 5.90754 7.72325 5.94183 8.19606 6.00277C8.63399 6.05921 9.02986 6.14109 9.32895 6.21265C10.338 4.7885 11.6581 3.60868 13.1925 2.76478Z"
                fill="currentColor"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.50258 12.9904C4.84995 12.9702 4.21285 13.1916 3.71346 13.6123C3.27448 13.9812 2.95216 14.4895 2.71342 14.9782C2.46993 15.4767 2.2849 16.0146 2.14668 16.4978C2.00771 16.9837 1.91112 17.4318 1.84923 17.7578C1.81818 17.9213 1.79559 18.0556 1.78059 18.1502C1.77245 18.2015 1.76482 18.253 1.75755 18.3045L1.75736 18.3059C1.72295 18.5632 1.81044 18.8223 1.99404 19.0059C2.17765 19.1895 2.43706 19.2769 2.69443 19.2425C2.74627 19.2352 2.79804 19.2275 2.84974 19.2193C2.94435 19.2043 3.07859 19.1817 3.24214 19.1507C3.56808 19.0888 4.0162 18.9922 4.50206 18.8532C4.98526 18.715 5.52321 18.53 6.0217 18.2865C6.51029 18.0478 7.01835 17.7256 7.38724 17.2869C8.2381 16.2792 8.2508 14.7098 7.26046 13.7319L7.25034 13.7221C6.77784 13.2711 6.15544 13.0106 5.50258 12.9904Z"
                    fill="currentColor"></path>
            </svg>
            Instant
          </div>
          <div
            className={`spot-header-tab ${
              location.pathname === routes.spot_trigger ? 'active' : ''
            }`}
            onClick={() => navigate(routes.spot_trigger)}
          >
            <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className="text-v2-lily/50 group-hover:text-v2-primary/90">
              <path
                d="M11.9921 15.5123C12.3494 16.846 11.558 18.2168 10.2243 18.5742C8.89063 18.9315 7.51979 18.1401 7.16243 16.8064M9.07584 5.28404C9.32935 4.82796 9.41285 4.27671 9.26713 3.73288C8.96934 2.62149 7.82697 1.96194 6.71558 2.25974C5.60419 2.55753 4.94465 3.6999 5.24244 4.81129C5.38816 5.35512 5.73611 5.79076 6.18369 6.05899M13.5295 8.37107C13.232 7.26096 12.4379 6.33266 11.3219 5.79038C10.2058 5.24811 8.85921 5.13627 7.57831 5.47949C6.29742 5.82271 5.18714 6.59285 4.49174 7.62051C3.79634 8.64817 3.57278 9.84915 3.87023 10.9593C4.36238 12.796 4.26681 14.2613 3.95602 15.3747C3.6018 16.6438 3.42469 17.2783 3.47254 17.4057C3.52728 17.5515 3.56688 17.5915 3.71207 17.6478C3.83898 17.6969 4.37212 17.5541 5.43841 17.2684L15.326 14.619C16.3922 14.3333 16.9254 14.1904 17.0107 14.0844C17.1083 13.9631 17.1226 13.9086 17.0971 13.755C17.0749 13.6208 16.6042 13.1598 15.6629 12.2379C14.8371 11.429 14.0216 10.2078 13.5295 8.37107Z"
                stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            Trigger
          </div>
          <div
            className={`spot-header-tab ${
              location.pathname === routes.spot_recurring ? 'active' : ''
            }`}
            onClick={() => navigate(routes.spot_recurring)}
          >
            <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className="text-v2-lily/50 group-hover:text-v2-primary/90">
              <path
                d="M12.1667 18.3334C12.1667 18.3334 12.8744 18.2323 15.8033 15.3033C18.7322 12.3744 18.7322 7.62565 15.8033 4.69672C14.7656 3.65899 13.4994 2.98893 12.1667 2.68654M12.1667 18.3334H17.1667M12.1667 18.3334L12.1667 13.3334M8.83333 1.66685C8.83333 1.66685 8.12563 1.76795 5.1967 4.69688C2.26777 7.62582 2.26777 12.3746 5.1967 15.3035C6.23443 16.3412 7.5006 17.0113 8.83333 17.3137M8.83333 1.66685L3.83333 1.66669M8.83333 1.66685L8.83333 6.66669"
                stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            Recurring
          </div>
        </div>

        {(location.pathname === routes.spot_instant ||
          location.pathname === '/' ||
          location.pathname === routes.spot) && <Instant isAsideOpen={setIsAsideOpen}/>}
        {location.pathname === routes.spot_recurring && <Reccuring isAsideOpen={setIsAsideOpen}/>}
        {location.pathname === routes.spot_trigger && <Trigger isAsideOpen={setIsAsideOpen}/>}
      </div>

      <div className="spot-chart">
        <div className="chart-btn-expand" onClick={() => setIsHistoryOpen(!isHistoryOpen)}>
          {isHistoryOpen ? ('Hide History') : ('Show History')}
          {isHistoryOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M5.37147 2.54616C5.57468 2.51612 5.7843 2.5 6.00021 2.5C8.55271 2.5 10.2276 4.75242 10.7903 5.64341C10.8585 5.75125 10.8925 5.80517 10.9116 5.88834C10.9259 5.9508 10.9259 6.04933 10.9115 6.11179C10.8925 6.19495 10.8582 6.24923 10.7896 6.35778C10.6397 6.59507 10.4111 6.92855 10.1082 7.29023M3.36216 3.35752C2.28112 4.09085 1.54723 5.10969 1.21055 5.64264C1.14214 5.75094 1.10794 5.80508 1.08887 5.88824C1.07455 5.9507 1.07454 6.04922 1.08886 6.11168C1.10791 6.19484 1.14197 6.24876 1.21007 6.35659C1.77277 7.24758 3.44771 9.5 6.00021 9.5C7.02941 9.5 7.91594 9.1338 8.64441 8.6383M1.50021 1.5L10.5002 10.5M4.93955 4.93934C4.6681 5.21079 4.50021 5.58579 4.50021 6C4.50021 6.82843 5.17178 7.5 6.00021 7.5C6.41442 7.5 6.78942 7.33211 7.06087 7.06066" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none"><path d="M5.0002 6.69446C5.0002 6.14217 5.44791 5.69446 6.0002 5.69446C6.55248 5.69446 7.0002 6.14217 7.0002 6.69446C7.0002 7.24674 6.55248 7.69446 6.0002 7.69446C5.44791 7.69446 5.0002 7.24674 5.0002 6.69446Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.0002 2.69446C4.56937 2.69446 3.40287 3.32682 2.53858 4.04817C1.67545 4.76855 1.08368 5.6016 0.787311 6.07088L0.775268 6.08987C0.716458 6.18244 0.640101 6.30263 0.6015 6.47104C0.570333 6.60702 0.570333 6.7819 0.6015 6.91787C0.640101 7.08628 0.716457 7.20647 0.775267 7.29904L0.787311 7.31803C1.08368 7.78731 1.67545 8.62037 2.53858 9.34074C3.40287 10.0621 4.56937 10.6945 6.0002 10.6945C7.43104 10.6945 8.59753 10.0621 9.46183 9.34074C10.325 8.62037 10.9167 7.78731 11.2131 7.31803L11.2251 7.29905C11.2839 7.20648 11.3603 7.08628 11.3989 6.91787C11.4301 6.7819 11.4301 6.60702 11.3989 6.47104C11.3603 6.30263 11.2839 6.18244 11.2251 6.08987L11.2131 6.07088C10.9167 5.6016 10.325 4.76855 9.46183 4.04817C8.59753 3.32682 7.43104 2.69446 6.0002 2.69446ZM6.0002 4.69446C4.89563 4.69446 4.0002 5.58989 4.0002 6.69446C4.0002 7.79903 4.89563 8.69446 6.0002 8.69446C7.10477 8.69446 8.0002 7.79903 8.0002 6.69446C8.0002 5.58989 7.10477 4.69446 6.0002 4.69446Z" fill="currentColor"></path></svg>
          )}
        </div>
        <div className="chart-diagrams">
          <div className="diagram-container">
            <div className="diagram-info">
              <div className="diagram-main-info">
                <img
                  src={selectedSellingToken.icon}
                  alt="icon"
                  className="diagram-icon"
                />
                <div className="diagram-currency-info">
                  <div className="currency-name">
                    {selectedSellingToken.symbol}
                  </div>
                  <div className="currency-address">
                    {`${selectedSellingToken.address.slice(0, 4)}...${selectedSellingToken.address.slice(-4)}`}
                  </div>
                </div>
              </div>

              <div className="additional-info">
                <div className="additional-info-price">
                  {(+sellingBars[sellingBars.length - 1]?.c).toFixed(2)}
                </div>
                <div className="additional-info-percent">
                  ? %
                </div>
              </div>
            </div>
            <Chart bars={sellingBars}/>
          </div>

          <div className="diagram-container">
            <div className="diagram-info">
              <div className="diagram-main-info">
                <img
                  src={selectedBuyingToken.icon}
                  alt="icon"
                  className="diagram-icon"
                />
                <div className="diagram-currency-info">
                  <div className="currency-name">
                    {selectedBuyingToken.symbol}
                  </div>
                  <div className="currency-address">
                    {`${selectedBuyingToken.address.slice(0, 4)}...${selectedBuyingToken.address.slice(-4)}`}
                  </div>
                </div>
              </div>

              <div className="additional-info">
                <div className="additional-info-price">
                  {(+buyingBars[buyingBars.length - 1]?.c).toFixed(2)}
                </div>
                <div className="additional-info-percent">
                  ? %
                </div>
              </div>
            </div>
            <Chart bars={buyingBars}/>
          </div>
        </div>
      </div>

      {isHistoryOpen && (
        <div className="spot-history">
          <div className="history-text">View History</div>
          <div className="history-btn-connect" onClick={() => setIsAsideOpen(true)}>Connect</div>
        </div>
      )}

      <div className="talk-to-us">
        <svg
          height="14"
          width="14"
          viewBox="0 0 14 14"
          fill="hsla(0,0%,100%,.5)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.855036 13.4987L2.91504 11.4387C3.29067 11.0643 3.7994 10.8537 4.33004 10.8537H11.0001C11.7958 10.8531 12.5583 10.5368 13.1208 9.97431C13.6833 9.41181 13.9995 8.64932 14.0001 7.85367V3.35367C14.0001 2.55804 13.6845 1.79492 13.1214 1.23239C12.5589 0.669894 11.7958 0.353638 11.0001 0.353638H3.00011C2.20448 0.353638 1.44136 0.669894 0.878828 1.23239C0.315708 1.79489 7.62939e-05 2.55802 7.62939e-05 3.35367V13.1437C7.62939e-05 13.3462 0.122575 13.5287 0.309452 13.6062C0.496332 13.6844 0.711276 13.6418 0.855036 13.4987ZM4.26496 4.06364C4.40683 3.63738 4.72558 3.29301 5.13997 3.11865C5.18497 3.09865 5.22996 3.07865 5.27496 3.06365V3.06427C5.98997 2.85365 6.74871 3.21865 7.03 3.90864L7.15 4.18864V4.18926C7.20688 4.31989 7.35876 4.38051 7.49001 4.32426L7.76501 4.20426C8.44439 3.90239 9.24252 4.15801 9.62005 4.79863C9.64005 4.84363 9.66505 4.88863 9.68505 4.93363C9.86193 5.34738 9.85318 5.81738 9.66005 6.22426C9.48569 6.5855 9.18255 6.86925 8.81005 7.01862L6.05997 8.19862C5.9581 8.243 5.84247 8.24425 5.73935 8.203C5.63622 8.16175 5.55372 8.08112 5.50997 7.97863L4.33496 5.22855C4.16997 4.86229 4.14496 4.44801 4.26496 4.06364Z"
            fill="hsla(0,0%,100%,.5)"
          ></path>
        </svg>
        <div className="talk-to-us-text">Talk to us</div>
      </div>

      <footer className="footer">
        <div className="footer-btn active">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" height="16"
               width="16">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5.17246 11.0054L7.49986 13.3336H1.66626V7.50005L3.99446 9.82744L11.6663 2.15485L12.8452 3.33375L5.17246 11.0054ZM18.3335 6.66645V12.5L16.0053 10.1726L8.33346 17.8452L7.15456 16.6663L14.8272 8.99455L12.4998 6.66635L18.3335 6.66645Z"
                  fill="currentColor"></path>
          </svg>
          <div className="footer-btn-text">
            Spot
          </div>
        </div>

        <div className="footer-btn" onClick={() => {window.location.href = 'https://jup.ag/pro?tab=cooking';}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
               className="h-[18px] w-[18px]">
            <path fill="currentColor"
                  d="M7 19v-1H6q-.425 0-.712-.288T5 17V7q0-.425.288-.712T6 6h1V5q0-.425.288-.712T8 4t.713.288T9 5v1h1q.425 0 .713.288T11 7v10q0 .425-.288.713T10 18H9v1q0 .425-.288.713T8 20t-.712-.288T7 19m0-3h2V8H7zm8 3v-4h-1q-.425 0-.712-.288T13 14V9q0-.425.288-.712T14 8h1V5q0-.425.288-.712T16 4t.713.288T17 5v3h1q.425 0 .713.288T19 9v5q0 .425-.288.713T18 15h-1v4q0 .425-.288.713T16 20t-.712-.288T15 19m0-6h2v-3h-2zm1-1.5"></path>
          </svg>
          <div className="footer-btn-text">
            Pro
          </div>
        </div>

        <div className="footer-btn" onClick={() => {window.location.href = 'https://jup.ag/perps';}}>
          <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"
               className="h-4 w-4">
            <path
              d="M3.44806 4.86956C3.44806 5.35387 3.64045 5.81834 3.98291 6.1608C4.32536 6.50325 4.78984 6.69565 5.27414 6.69565C5.75845 6.69565 6.22292 6.50325 6.56538 6.1608C6.90784 5.81834 7.10023 5.35387 7.10023 4.86956C7.10023 4.38525 6.90784 3.92078 6.56538 3.57832C6.22292 3.23587 5.75845 3.04348 5.27414 3.04348C4.78984 3.04348 4.32536 3.23587 3.98291 3.57832C3.64045 3.92078 3.44806 4.38525 3.44806 4.86956Z"
              fill="currentColor"></path>
            <path
              d="M10.7524 12.1739C10.7524 12.6582 10.9448 13.1227 11.2873 13.4651C11.6297 13.8076 12.0942 14 12.5785 14C13.0628 14 13.5273 13.8076 13.8697 13.4651C14.2122 13.1227 14.4046 12.6582 14.4046 12.1739C14.4046 11.6896 14.2122 11.2251 13.8697 10.8827C13.5273 10.5402 13.0628 10.3478 12.5785 10.3478C12.0942 10.3478 11.6297 10.5402 11.2873 10.8827C10.9448 11.2251 10.7524 11.6896 10.7524 12.1739Z"
              fill="currentColor"></path>
            <path
              d="M15.0567 2.00001H10.8828C10.8057 1.99949 10.7302 2.02207 10.6661 2.06484C10.6019 2.10762 10.552 2.16863 10.5228 2.24001C10.492 2.31143 10.4835 2.39049 10.4984 2.46683C10.5133 2.54317 10.5509 2.61323 10.6063 2.66783L12.0568 4.10783C12.0694 4.12 12.0794 4.13459 12.0863 4.15072C12.0931 4.16686 12.0967 4.18421 12.0967 4.20175C12.0967 4.21928 12.0931 4.23663 12.0863 4.25277C12.0794 4.2689 12.0694 4.28349 12.0568 4.29566L4.16285 12.1739C4.01756 12.3213 3.93611 12.52 3.93611 12.727C3.93611 12.9339 4.01756 13.1326 4.16285 13.28C4.31043 13.4254 4.50874 13.5077 4.71589 13.5096C4.81918 13.5111 4.92175 13.4921 5.01761 13.4536C5.11346 13.4151 5.20067 13.3578 5.27415 13.2852L13.1524 5.39131C13.1646 5.37869 13.1792 5.36864 13.1953 5.36179C13.2114 5.35493 13.2288 5.35139 13.2463 5.35139C13.2638 5.35139 13.2812 5.35493 13.2973 5.36179C13.3135 5.36864 13.3281 5.37869 13.3402 5.39131L14.7802 6.83131C14.8348 6.8867 14.9049 6.9243 14.9812 6.9392C15.0576 6.95409 15.1366 6.94558 15.2081 6.91479C15.2794 6.88561 15.3404 6.83573 15.3832 6.77156C15.426 6.7074 15.4486 6.6319 15.4481 6.55479V2.38088C15.444 2.27935 15.4012 2.18323 15.3284 2.11235C15.2556 2.04148 15.1584 2.00127 15.0567 2.00001Z"
              fill="currentColor"></path>
          </svg>
          <div className="footer-btn-text">
            Perps
          </div>
        </div>

        <div className="footer-btn" onClick={() => setIsAsideOpen(true)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' width='16' height='16'>
            <path fill="currentColor" d='M196 136a16 16 0 1 1-16-16a16 16 0 0 1 16 16m40-36v80a32 32 0 0 1-32 32H60a32 32 0 0 1-32-32V60.92A32 32 0 0 1 60 28h132a12 12 0 0 1 0 24H60a8 8 0 0 0-8 8.26v.08A8.32 8.32 0 0 0 60.48 68H204a32 32 0 0 1 32 32m-24 0a8 8 0 0 0-8-8H60.48A33.7 33.7 0 0 1 52 90.92V180a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8Z'/>
          </svg>
          <div className="footer-btn-text">
            Portfolio
          </div>
        </div>
      </footer>
    </>
  )
}

export default Spot
