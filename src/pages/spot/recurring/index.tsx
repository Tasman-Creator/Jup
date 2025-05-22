import React, { useEffect, useState } from 'react'
import './style.scss'
import { CustomModal } from '../../../components/CustomModal'
import axios from 'axios'
import { CoinsItem } from '../../../components/CoinItem'
import CoinSearchItem from '../../../components/CoinSearchItem'
import { Token, useTokenStore } from '../../../store/useTokenStore'
import {info} from "sass";
import Flow from "../flow";
import { useAppKitAccount } from "@reown/appkit/react";
import { modal } from '@reown/appkit/react';

type InstantProps = {
  isAsideOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Reccuring: React.FC<InstantProps> = ({ isAsideOpen }) => {
  const [sellingValue, setSellingValue] = useState<string>('')
  const [buyingValue, setBuyingValue] = useState<string>('')
  const [sellingPrice, setSellingPrice] = useState<number | null>(null)
  const [buyingPrice, setBuyingPrice] = useState<string | null>(null)
  const [sellingRate, setSellingRate] = useState<string>('0')
  const [timeOfTrade, setTimeOfTrade] = useState<string>('1')
  const [orders, setOrders] = useState<string>('2')
  const [minPrice, setMinPrice] = useState<string>('')
  const [maxPrice, setMaxPrice] = useState<string>('')
  const [formattedDate, setFormattedDate] = useState<string>('')
  const [isSellingFucused, setIsSellingFucused] = useState<boolean>(false)
  const [isOn, setIsOn] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [flag, setFlag] = useState<'selling' | 'buying' | null>(null)
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const { isConnected } = useAppKitAccount();

  const {
    tokens,
    fetchTokens,
    selectedBuyingToken,
    selectedSellingToken,
    setSelectedBuyingToken,
    setSelectedSellingToken,
    swapTokens,
  } = useTokenStore()


  useEffect(() => {
    fetchTokens()
  }, [])

  const handleOpen = () => setIsModalOpen(true)
  const handleClose = () => setIsModalOpen(false)

  const handleConnectClick = () => {
    modal?.open({ view: "Connect" });
  };

  const handleSellingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value.replace(/[^0-9.]/g, '') // Видаляємо все, крім цифр і точки
    if (newValue.startsWith('.')) newValue = '0' + newValue // Додаємо 0 перед точкою
    // Замінюємо всі коми на крапки
    newValue = newValue.replace(/,/g, '.');

    // Видаляємо всі символи, крім цифр і крапки
    newValue = newValue.replace(/[^\d.]/g, '');

    // Залишаємо тільки першу крапку, якщо їх кілька
    const parts = newValue.split('.');
    if (parts.length > 2) {
      newValue = parts[0] + '.' + parts.slice(1).join('');
    }

    setSellingValue(newValue);
    if (sellingPrice && buyingPrice) {
      setBuyingValue(((+newValue * sellingPrice) / +buyingPrice).toFixed(2));
    }
  }

  const handleByuingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value.replace(/[^0-9.]/g, '') // Видаляємо все, крім цифр і точки
    if (newValue.startsWith('.')) newValue = '0' + newValue // Додаємо 0 перед точкою
    // Замінюємо всі коми на крапки
    newValue = newValue.replace(/,/g, '.');

    // Видаляємо всі символи, крім цифр і крапки
    newValue = newValue.replace(/[^\d.]/g, '');

    // Залишаємо тільки першу крапку, якщо їх кілька
    const parts = newValue.split('.');
    if (parts.length > 2) {
      newValue = parts[0] + '.' + parts.slice(1).join('');
    }

    setBuyingValue(newValue);
    if (sellingPrice && buyingPrice) {
      setSellingValue(((+newValue * (+buyingPrice)) / +sellingPrice).toFixed(2));
    }
  }

  useEffect(() => {
    const now = new Date();
    const updatedTime = new Date(now.getTime() + (+timeOfTrade) * 60 * 1000);

    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };

    setFormattedDate(updatedTime.toLocaleString('en-GB', options).replace(',', ''));
  }, [timeOfTrade]);

  useEffect(() => {
    if (buyingPrice && sellingPrice)
      setSellingRate(((+buyingPrice) / (+sellingPrice)).toString())
  }, [buyingPrice, sellingPrice]);

  useEffect(() => {
    setBuyingValue(((+sellingValue) / (+sellingRate)).toString());
  }, [sellingValue, sellingRate]);

  useEffect(() => {
    if (sellingPrice && buyingPrice) {
      setBuyingValue((+sellingValue * sellingPrice / (+buyingPrice)).toFixed(2));
    }
  }, [sellingPrice, buyingPrice, sellingValue])

  useEffect(() => {
    axios.get(`https://api.jup.ag/price/v2?ids=${selectedSellingToken.address},${selectedBuyingToken.address}&showExtraInfo=true`)
      .then(response => {
        const currentPrices = [
          response.data.data[selectedSellingToken.address]?.price,
          response.data.data[selectedBuyingToken.address]?.price
        ];
        setSellingPrice(currentPrices[0]);
        setBuyingPrice(currentPrices[1]);
        console.log("Price");
        console.log(response.data.data);
        console.log(currentPrices);
      })
      .catch(err => console.log(err));

  }, [selectedBuyingToken.address, selectedSellingToken.address]);

  return (
    <>
      <div className="instant-container">
        <div className="instant-switcher">
          <div className={`active-text ${isOn ? '' : 'active'}`}>ULTRA</div>

          <button
            type="button"
            className={`toggle ${isOn ? 'on' : ''}`}
            onClick={() => setIsOn(!isOn)}
          >
            <div className="icon left">
              <svg viewBox="0 0 10 10" className="svg-icon">
                <g clip-path="url(#clip0_1785_33901)">
                  <path
                    d="M7.20001 7.86127C7.45429 7.86127 7.69815 7.96228 7.87795 8.14208C8.05775 8.32188 8.15876 8.56574 8.15876 8.82002C8.15876 8.56574 8.25977 8.32188 8.43957 8.14208C8.61937 7.96228 8.86324 7.86127 9.11751 7.86127C8.86324 7.86127 8.61937 7.76026 8.43957 7.58046C8.25977 7.40066 8.15876 7.15679 8.15876 6.90252C8.15876 7.15679 8.05775 7.40066 7.87795 7.58046C7.69815 7.76026 7.45429 7.86127 7.20001 7.86127ZM7.20001 2.10877C7.45429 2.10877 7.69815 2.20978 7.87795 2.38958C8.05775 2.56938 8.15876 2.81324 8.15876 3.06752C8.15876 2.81324 8.25977 2.56938 8.43957 2.38958C8.61937 2.20978 8.86324 2.10877 9.11751 2.10877C8.86324 2.10877 8.61937 2.00776 8.43957 1.82796C8.25977 1.64816 8.15876 1.40429 8.15876 1.15002C8.15876 1.40429 8.05775 1.64816 7.87795 1.82796C7.69815 2.00776 7.45429 2.10877 7.20001 2.10877Z"
                    stroke="currentColor"
                    stroke-width="0.95875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M4.09971 1.42435C4.08095 1.37314 4.04691 1.32892 4.00219 1.29768C3.95748 1.26644 3.90425 1.24969 3.84971 1.24969C3.79517 1.24969 3.74194 1.26644 3.69723 1.29768C3.65251 1.32892 3.61847 1.37314 3.59971 1.42435L3.34534 2.11935C3.1457 2.6643 2.82969 3.15919 2.41931 3.56957C2.00893 3.97996 1.51403 4.29596 0.969084 4.4956L0.274086 4.74998C0.222871 4.76874 0.178655 4.80279 0.147417 4.8475C0.116179 4.89221 0.0994263 4.94543 0.0994263 4.99998C0.0994263 5.05452 0.116179 5.10775 0.147417 5.15246C0.178655 5.19717 0.222871 5.23122 0.274086 5.24998L0.969084 5.50435C1.51403 5.70399 2.00893 6.02001 2.41931 6.43039C2.82969 6.84077 3.1457 7.33566 3.34534 7.88061L3.59971 8.5756C3.61847 8.62681 3.65251 8.67103 3.69723 8.70227C3.74194 8.7335 3.79517 8.75026 3.84971 8.75026C3.90425 8.75026 3.95748 8.7335 4.00219 8.70227C4.04691 8.67103 4.08095 8.62681 4.09971 8.5756L4.35409 7.88061C4.55372 7.33566 4.86973 6.84077 5.28011 6.43039C5.69049 6.02001 6.18538 5.70399 6.73033 5.50435L7.42533 5.24998C7.47654 5.23122 7.52076 5.19717 7.552 5.15246C7.58323 5.10775 7.59999 5.05452 7.59999 4.99998C7.59999 4.94543 7.58323 4.89221 7.552 4.8475C7.52076 4.80279 7.47654 4.76874 7.42533 4.74998L6.73033 4.4956C6.18538 4.29596 5.8125 3.97995 5.40212 3.56957C4.99174 3.15919 4.55372 2.6643 4.35409 2.11935L4.09971 1.42435Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1785_33901">
                    <rect width="10" height="10" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="icon right">
              <svg viewBox="0 0 8 8" className="svg-icon">
                <g id="tool-02" clip-path="url(#clip0_5463_77660)">
                  <path
                    id="Icon"
                    d="M2.0013 1.99959L3.5013 3.49959M2.0013 1.99959H1.0013L0.667969 0.999593L1.0013 0.66626L2.0013 0.999593V1.99959ZM6.42096 0.913264L5.54509 1.78914C5.41309 1.92114 5.34708 1.98714 5.32235 2.06325C5.3006 2.1302 5.3006 2.20232 5.32235 2.26927C5.34708 2.34537 5.41309 2.41138 5.54509 2.54338L5.62418 2.62247C5.75618 2.75447 5.82219 2.82048 5.8983 2.84521C5.96524 2.86696 6.03736 2.86696 6.10431 2.84521C6.18042 2.82048 6.24642 2.75448 6.37843 2.62247L7.19773 1.80317C7.28597 2.01789 7.33464 2.25306 7.33464 2.49959C7.33464 3.51211 6.51382 4.33293 5.5013 4.33293C5.37923 4.33293 5.25995 4.321 5.14455 4.29824C4.98251 4.26628 4.90148 4.2503 4.85236 4.25519C4.80014 4.2604 4.77441 4.26823 4.72814 4.29299C4.68462 4.31628 4.64096 4.35994 4.55364 4.44725L2.16797 6.83292C1.89183 7.10906 1.44411 7.10906 1.16797 6.83292C0.891827 6.55678 0.891827 6.10906 1.16797 5.83292L3.55364 3.44725C3.64096 3.35993 3.68462 3.31628 3.70791 3.27276C3.73267 3.22649 3.7405 3.20075 3.7457 3.14853C3.7506 3.09941 3.73462 3.01839 3.70266 2.85634C3.6799 2.74095 3.66797 2.62166 3.66797 2.49959C3.66797 1.48707 4.48878 0.66626 5.5013 0.66626C5.83647 0.66626 6.15063 0.756201 6.42096 0.913264ZM4.00132 4.99957L5.83463 6.83289C6.11078 7.10903 6.55849 7.10903 6.83463 6.83289C7.11077 6.55675 7.11077 6.10903 6.83463 5.83289L5.32641 4.32469C5.21964 4.31459 5.11554 4.29533 5.0149 4.2677C4.88521 4.23211 4.74295 4.25794 4.64786 4.35304L4.00132 4.99957Z"
                    stroke="currentColor"
                    stroke-width="0.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="thumb">
              {!isOn ? (
                <svg viewBox="0 0 10 10" className="svg-icon">
                  <g clip-path="url(#clip0_1785_33901)">
                    <path
                      d="M7.20001 7.86127C7.45429 7.86127 7.69815 7.96228 7.87795 8.14208C8.05775 8.32188 8.15876 8.56574 8.15876 8.82002C8.15876 8.56574 8.25977 8.32188 8.43957 8.14208C8.61937 7.96228 8.86324 7.86127 9.11751 7.86127C8.86324 7.86127 8.61937 7.76026 8.43957 7.58046C8.25977 7.40066 8.15876 7.15679 8.15876 6.90252C8.15876 7.15679 8.05775 7.40066 7.87795 7.58046C7.69815 7.76026 7.45429 7.86127 7.20001 7.86127ZM7.20001 2.10877C7.45429 2.10877 7.69815 2.20978 7.87795 2.38958C8.05775 2.56938 8.15876 2.81324 8.15876 3.06752C8.15876 2.81324 8.25977 2.56938 8.43957 2.38958C8.61937 2.20978 8.86324 2.10877 9.11751 2.10877C8.86324 2.10877 8.61937 2.00776 8.43957 1.82796C8.25977 1.64816 8.15876 1.40429 8.15876 1.15002C8.15876 1.40429 8.05775 1.64816 7.87795 1.82796C7.69815 2.00776 7.45429 2.10877 7.20001 2.10877Z"
                      stroke="#111821"
                      stroke-width="0.95875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4.09971 1.42435C4.08095 1.37314 4.04691 1.32892 4.00219 1.29768C3.95748 1.26644 3.90425 1.24969 3.84971 1.24969C3.79517 1.24969 3.74194 1.26644 3.69723 1.29768C3.65251 1.32892 3.61847 1.37314 3.59971 1.42435L3.34534 2.11935C3.1457 2.6643 2.82969 3.15919 2.41931 3.56957C2.00893 3.97996 1.51403 4.29596 0.969084 4.4956L0.274086 4.74998C0.222871 4.76874 0.178655 4.80279 0.147417 4.8475C0.116179 4.89221 0.0994263 4.94543 0.0994263 4.99998C0.0994263 5.05452 0.116179 5.10775 0.147417 5.15246C0.178655 5.19717 0.222871 5.23122 0.274086 5.24998L0.969084 5.50435C1.51403 5.70399 2.00893 6.02001 2.41931 6.43039C2.82969 6.84077 3.1457 7.33566 3.34534 7.88061L3.59971 8.5756C3.61847 8.62681 3.65251 8.67103 3.69723 8.70227C3.74194 8.7335 3.79517 8.75026 3.84971 8.75026C3.90425 8.75026 3.95748 8.7335 4.00219 8.70227C4.04691 8.67103 4.08095 8.62681 4.09971 8.5756L4.35409 7.88061C4.55372 7.33566 4.86973 6.84077 5.28011 6.43039C5.69049 6.02001 6.18538 5.70399 6.73033 5.50435L7.42533 5.24998C7.47654 5.23122 7.52076 5.19717 7.552 5.15246C7.58323 5.10775 7.59999 5.05452 7.59999 4.99998C7.59999 4.94543 7.58323 4.89221 7.552 4.8475C7.52076 4.80279 7.47654 4.76874 7.42533 4.74998L6.73033 4.4956C6.18538 4.29596 5.8125 3.97995 5.40212 3.56957C4.99174 3.15919 4.55372 2.6643 4.35409 2.11935L4.09971 1.42435Z"
                      fill="#111821"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1785_33901">
                      <rect width="10" height="10" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg viewBox="0 0 8 8" className="svg-icon">
                  <g id="tool-02" clip-path="url(#clip0_5463_77660)">
                    <path
                      id="Icon"
                      d="M2.0013 1.99959L3.5013 3.49959M2.0013 1.99959H1.0013L0.667969 0.999593L1.0013 0.66626L2.0013 0.999593V1.99959ZM6.42096 0.913264L5.54509 1.78914C5.41309 1.92114 5.34708 1.98714 5.32235 2.06325C5.3006 2.1302 5.3006 2.20232 5.32235 2.26927C5.34708 2.34537 5.41309 2.41138 5.54509 2.54338L5.62418 2.62247C5.75618 2.75447 5.82219 2.82048 5.8983 2.84521C5.96524 2.86696 6.03736 2.86696 6.10431 2.84521C6.18042 2.82048 6.24642 2.75448 6.37843 2.62247L7.19773 1.80317C7.28597 2.01789 7.33464 2.25306 7.33464 2.49959C7.33464 3.51211 6.51382 4.33293 5.5013 4.33293C5.37923 4.33293 5.25995 4.321 5.14455 4.29824C4.98251 4.26628 4.90148 4.2503 4.85236 4.25519C4.80014 4.2604 4.77441 4.26823 4.72814 4.29299C4.68462 4.31628 4.64096 4.35994 4.55364 4.44725L2.16797 6.83292C1.89183 7.10906 1.44411 7.10906 1.16797 6.83292C0.891827 6.55678 0.891827 6.10906 1.16797 5.83292L3.55364 3.44725C3.64096 3.35993 3.68462 3.31628 3.70791 3.27276C3.73267 3.22649 3.7405 3.20075 3.7457 3.14853C3.7506 3.09941 3.73462 3.01839 3.70266 2.85634C3.6799 2.74095 3.66797 2.62166 3.66797 2.49959C3.66797 1.48707 4.48878 0.66626 5.5013 0.66626C5.83647 0.66626 6.15063 0.756201 6.42096 0.913264ZM4.00132 4.99957L5.83463 6.83289C6.11078 7.10903 6.55849 7.10903 6.83463 6.83289C7.11077 6.55675 7.11077 6.10903 6.83463 5.83289L5.32641 4.32469C5.21964 4.31459 5.11554 4.29533 5.0149 4.2677C4.88521 4.23211 4.74295 4.25794 4.64786 4.35304L4.00132 4.99957Z"
                      stroke="#111821"
                      stroke-width="0.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="#111821"
                    ></path>
                  </g>
                </svg>
              )}
            </div>
          </button>

          <div className={`active-text ${isOn ? 'active' : ''}`}>MANUAL</div>

          {isOn && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 15"
              fill="rgba(191,205,219,.5)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.8567 10.1405C12.8175 9.92421 12.8439 9.70116 12.9327 9.50008C13.0172 9.3029 13.1575 9.13474 13.3364 9.01629C13.5152 8.89784 13.7248 8.83427 13.9393 8.83341H13.9993C14.353 8.83341 14.6921 8.69294 14.9422 8.44289C15.1922 8.19284 15.3327 7.8537 15.3327 7.50008C15.3327 7.14646 15.1922 6.80732 14.9422 6.55727C14.6921 6.30722 14.353 6.16675 13.9993 6.16675H13.886C13.6715 6.16589 13.4619 6.10233 13.283 5.98388C13.1042 5.86543 12.9639 5.69726 12.8793 5.50008V5.44675C12.7906 5.24567 12.7641 5.02262 12.8033 4.80636C12.8426 4.59009 12.9457 4.39053 13.0993 4.23341L13.1393 4.19341C13.2633 4.06958 13.3617 3.92253 13.4288 3.76067C13.4959 3.5988 13.5304 3.4253 13.5304 3.25008C13.5304 3.07486 13.4959 2.90136 13.4288 2.73949C13.3617 2.57763 13.2633 2.43058 13.1393 2.30675C13.0155 2.18278 12.8685 2.08443 12.7066 2.01733C12.5447 1.95024 12.3712 1.9157 12.196 1.9157C12.0208 1.9157 11.8473 1.95024 11.6854 2.01733C11.5236 2.08443 11.3765 2.18278 11.2527 2.30675L11.2127 2.34675C11.0556 2.50044 10.856 2.60354 10.6397 2.64275C10.4235 2.68196 10.2004 2.65549 9.99935 2.56675C9.80217 2.48224 9.634 2.34192 9.51555 2.16306C9.3971 1.9842 9.33354 1.77461 9.33268 1.56008V1.50008C9.33268 1.14646 9.19221 0.807321 8.94216 0.557272C8.69211 0.307224 8.35297 0.166748 7.99935 0.166748C7.64573 0.166748 7.30659 0.307224 7.05654 0.557272C6.80649 0.807321 6.66602 1.14646 6.66602 1.50008V1.61341C6.66516 1.82794 6.60159 2.03753 6.48314 2.21639C6.36469 2.39525 6.19653 2.53557 5.99935 2.62008H5.94602C5.74494 2.70882 5.52189 2.7353 5.30562 2.69608C5.08936 2.65687 4.8898 2.55377 4.73268 2.40008L4.69268 2.36008C4.56885 2.23611 4.4218 2.13777 4.25994 2.07067C4.09807 2.00357 3.92457 1.96903 3.74935 1.96903C3.57413 1.96903 3.40063 2.00357 3.23876 2.07067C3.0769 2.13777 2.92985 2.23611 2.80602 2.36008C2.68205 2.48391 2.5837 2.63096 2.5166 2.79283C2.4495 2.95469 2.41497 3.12819 2.41497 3.30341C2.41497 3.47863 2.4495 3.65214 2.5166 3.814C2.5837 3.97587 2.68205 4.12292 2.80602 4.24675L2.84602 4.28675C2.99971 4.44387 3.10281 4.64343 3.14202 4.85969C3.18123 5.07595 3.15476 5.299 3.06602 5.50008C2.98983 5.70724 2.85308 5.88668 2.67355 6.01509C2.49402 6.14349 2.28001 6.21492 2.05935 6.22008H1.99935C1.64573 6.22008 1.30659 6.36056 1.05654 6.61061C0.806491 6.86065 0.666016 7.19979 0.666016 7.55341C0.666016 7.90704 0.806491 8.24617 1.05654 8.49622C1.30659 8.74627 1.64573 8.88675 1.99935 8.88675H2.11268C2.32721 8.8876 2.5368 8.95117 2.71566 9.06962C2.89452 9.18807 3.03484 9.35623 3.11935 9.55341C3.20809 9.75449 3.23456 9.97754 3.19535 10.1938C3.15614 10.4101 3.05304 10.6096 2.89935 10.7667L2.85935 10.8067C2.73538 10.9306 2.63703 11.0776 2.56994 11.2395C2.50284 11.4014 2.4683 11.5749 2.4683 11.7501C2.4683 11.9253 2.50284 12.0988 2.56994 12.2607C2.63703 12.4225 2.73538 12.5696 2.85935 12.6934C2.98318 12.8174 3.13023 12.9157 3.2921 12.9828C3.45396 13.0499 3.62746 13.0845 3.80268 13.0845C3.9779 13.0845 4.15141 13.0499 4.31327 12.9828C4.47513 12.9157 4.62218 12.8174 4.74602 12.6934L4.78602 12.6534C4.94313 12.4997 5.14269 12.3966 5.35896 12.3574C5.57522 12.3182 5.79827 12.3447 5.99935 12.4334C6.20651 12.5096 6.38595 12.6464 6.51436 12.8259C6.64276 13.0054 6.71419 13.2194 6.71935 13.4401V13.5001C6.71935 13.8537 6.85982 14.1928 7.10987 14.4429C7.35992 14.6929 7.69906 14.8334 8.05268 14.8334C8.4063 14.8334 8.74544 14.6929 8.99549 14.4429C9.24554 14.1928 9.38602 13.8537 9.38602 13.5001V13.3867C9.38687 13.1722 9.45044 12.9626 9.56889 12.7838C9.68734 12.6049 9.8555 12.4646 10.0527 12.3801C10.2538 12.2913 10.4768 12.2649 10.6931 12.3041C10.9093 12.3433 11.1089 12.4464 11.266 12.6001L11.306 12.6401C11.4298 12.764 11.5769 12.8624 11.7388 12.9295C11.9006 12.9966 12.0741 13.0311 12.2493 13.0311C12.4246 13.0311 12.5981 12.9966 12.7599 12.9295C12.9218 12.8624 13.0689 12.764 13.1927 12.6401C13.3167 12.5162 13.415 12.3692 13.4821 12.2073C13.5492 12.0455 13.5837 11.872 13.5837 11.6967C13.5837 11.5215 13.5492 11.348 13.4821 11.1862C13.415 11.0243 13.3167 10.8772 13.1927 10.7534L13.1527 10.7134C12.999 10.5563 12.8959 10.3567 12.8567 10.1405ZM9.99935 7.50008C9.99935 8.60465 9.10392 9.50008 7.99935 9.50008C6.89478 9.50008 5.99935 8.60465 5.99935 7.50008C5.99935 6.39551 6.89478 5.50008 7.99935 5.50008C9.10392 5.50008 9.99935 6.39551 9.99935 7.50008Z"
                fill="rgba(191,205,219,.5)"
              ></path>
            </svg>
          )}

          <svg
            className="refresh-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 15"
            fill="none"
          >
            <path
              d="M13.6667 6.16667C13.6667 6.16667 12.33 4.34548 11.2441 3.25883C10.1582 2.17218 8.6576 1.5 7 1.5C3.68629 1.5 1 4.18629 1 7.5C1 10.8137 3.68629 13.5 7 13.5C9.7354 13.5 12.0433 11.6695 12.7655 9.16667M13.6667 6.16667V2.16667M13.6667 6.16667H9.66667"
              stroke="rgba(191,205,219,.5)"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>

        <div className={`instant-selling ${isSellingFucused ? 'active' : ''}`}>
          <div className="selling-text">Selling</div>
          <div className="selling-info">
            <div
              className="modal-dropdown"
              onClick={() => {
                setFlag('selling')
                handleOpen()
              }}
            >
              <img
                src={selectedSellingToken.icon}
                alt="icon"
                className="dropdown-icon"
              />
              <div className="value-name">{selectedSellingToken.symbol}</div>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="hsla(0,0%,100%,.25)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z"
                  fill="hsla(0,0%,100%,.25)"
                />
              </svg>
            </div>
            <div className="info-money-container">
              <input
                type="text"
                value={sellingValue}
                onChange={handleSellingChange}
                className={`money-input-main ${sellingValue ? 'active' : ''}`}
                placeholder={'0.00'}
                onFocus={() => setIsSellingFucused(true)}
                onBlur={() => setIsSellingFucused(false)}
              />
              <div className="secondary-money">${sellingPrice ? (
                `${(+sellingValue) * (+sellingPrice)}`
              ) : (
                '0.00'
              )}
              </div>
            </div>
          </div>
        </div>

        <div className="swap-sell-buy">
          <div className="button-swap-container" onClick={() => swapTokens()}>
            <svg width="21" height="22" viewBox="0 0 21 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.51043 7.47998V14.99H7.77043V7.47998L9.66043 9.36998L10.5505 8.47994L7.5859 5.51453C7.3398 5.26925 6.94114 5.26925 6.69504 5.51453L3.73047 8.47994L4.62051 9.36998L6.51043 7.47998Z" fill="currentColor"></path>
              <path d="M14.4902 14.52V7.01001H13.2302V14.52L11.3402 12.63L10.4502 13.5201L13.4148 16.4855C13.6609 16.7308 14.0595 16.7308 14.3056 16.4855L17.2702 13.5201L16.3802 12.63L14.4902 14.52Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>

        <div className="instant-buying">
          <div className="buying-text">Buying</div>

          <div className="info-money-container">
            <div
              className="modal-dropdown"
              onClick={() => {
                setFlag('buying')
                handleOpen()
              }}
            >
              <img
                src={selectedBuyingToken.icon}
                alt="icon"
                className="dropdown-icon"
              />
              <div className="value-name">{selectedBuyingToken.symbol}</div>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="hsla(0,0%,100%,.25)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z"
                  fill="hsla(0,0%,100%,.25)"
                />
              </svg>
            </div>
            <div className="info-money">
              <input
                type="text"
                placeholder={'0.00'}
                value={buyingValue?.toString()}
                onChange={handleByuingChange}
                className={`money-main ${!buyingValue ? 'disabled' : ''}`}
              />
              <div className="secondary-money">${buyingPrice ? (
                `${(+buyingValue) * (+buyingPrice)}`
              ) : (
                '0.00'
              )}</div>
            </div>
          </div>
        </div>

        <div className="reccurring-additional">
          <div className="time">
            <div className="time-text">
              Every
            </div>
            <div className="time-dropdown">
              <input
                type="text"
                value={timeOfTrade}
                onChange={(value) => setTimeOfTrade(value.target.value)}
                className={`time-input ${sellingValue ? 'active' : ''}`}
                placeholder={'1'}
                /*onFocus={() => setIsSellingFucused(true)}
                onBlur={() => setIsSellingFucused(false)}*/
              />
              <div className="switcher-info">
                <div className="switcher-info-text">
                  minute
                </div>
                <svg className="" width="10" height="6" viewBox="0 0 10 6" fill="inherit"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z"
                        fill="currentColor"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="orders">
            <div className="orders-text">
              Over
            </div>
            <div className="orders-container">
              <input
                type="text"
                value={orders}
                onChange={(value) => setOrders(value.target.value)}
                className={`orders-input ${sellingValue ? 'active' : ''}`}
                placeholder={'2'}
                /*onFocus={() => setIsSellingFucused(true)}
                onBlur={() => setIsSellingFucused(false)}*/
              />
              <div className="orders-additional-text">
                orders
              </div>
            </div>
          </div>
        </div>

        <div className="price-range">
          <div className="price-range-text-container">
            <div className="price-range-text first">
              Price Range (optional)
            </div>
            <div className="price-range-text last">
              Rate: {sellingRate} {selectedSellingToken.symbol} / {selectedBuyingToken.symbol}
            </div>
          </div>
          <div className="price-range-changer">
            <input
              type="text"
              value={minPrice}
              onChange={(value) => setMinPrice(value.target.value)}
              className={`price-range-input ${sellingValue ? 'active' : ''}`}
              placeholder={'Min Price'}
              /*onFocus={() => setIsSellingFucused(true)}
              onBlur={() => setIsSellingFucused(false)}*/
            />
            <div className="price-range-slash">
              -
            </div>
            <input
              type="text"
              value={maxPrice}
              onChange={(value) => setMaxPrice(value.target.value)}
              className={`price-range-input ${sellingValue ? 'active' : ''}`}
              placeholder={'Max Price'}
              /*onFocus={() => setIsSellingFucused(true)}
              onBlur={() => setIsSellingFucused(false)}*/
            />
          </div>
        </div>

        {!isConnected && (
          <div
            className="instant-connect"
            // onClick={() => connectToWallet(setWalletAddress)}
            onClick={() => {
              handleConnectClick();
            }}
          >
            Connect
          </div>
        )}
        {isConnected && !sellingValue || sellingValue === '0.00' ? (
          <div
            className="instant-connect disabled"
            // onClick={() => connectToWallet(setWalletAddress)}
            onClick={() => {
              handleConnectClick();
            }}
          >
            Enter an amount
          </div>
        ) : (
          /*@ts-ignore*/
          <Flow sendingCurrencyValue={+sellingValue} sendingCurrencyPrice={+sellingPrice} text={'Place Reccuring Order'}/>
        )}

        <div className="summary-btn" onClick={() => setIsSummaryOpen(!isSummaryOpen)}>
          {isSummaryOpen ? (
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 5.70711C0.683416 6.09763 1.31658 6.09763 1.7071 5.70711L4.99999 2.41421L8.29288 5.70711C8.6834 6.09763 9.31657 6.09763 9.70709 5.70711C10.0976 5.31658 10.0976 4.68342 9.70709 4.29289L5.7071 0.292893C5.31657 -0.097631 4.68341 -0.097631 4.29289 0.292893L0.292893 4.29289C-0.0976309 4.68342 -0.0976309 5.31658 0.292893 5.70711Z" fill="currentColor"></path></svg>
          ) : (
            <svg width="10" height="6" viewBox="0 0 10 6" fill="inherit" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z" fill="currentColor"></path></svg>
          )}
          <div className="summary-btn-text">
            Recurring Summary
          </div>
        </div>

        {isSummaryOpen && (
          <div className="summary-info">
            <div className="summary-info-line">
              <div className="line-title">
                Sell total
              </div>
              <div className="line-additional">
                {sellingValue} {selectedSellingToken.symbol}
              </div>
            </div>

            <div className="summary-info-line">
              <div className="line-title">
                Sell per order
              </div>
              <div className="line-additional">
                {((+sellingValue) / (+orders)).toFixed(2)} {selectedSellingToken.symbol}
              </div>
            </div>

            <div className="summary-info-line">
              <div className="line-title">
                To buy
              </div>
              <div className="line-additional">
                {selectedBuyingToken.symbol}
              </div>
            </div>

            <div className="summary-info-line">
              <div className="line-title">
                Order interval
              </div>
              <div className="line-additional">
                {timeOfTrade} minute(s)
              </div>
            </div>

            <div className="summary-info-line">
              <div className="line-title">
                Extimate end date
              </div>
              <div className="line-additional">
                {formattedDate}
              </div>
            </div>

            <div className="summary-info-line">
              <div className="line-title">
                Platform Fee
              </div>
              <div className="line-additional-fee">
                0.1%
              </div>
            </div>
          </div>
        )}
      </div>

      <CustomModal open={isModalOpen} onClose={handleClose} flag={flag}>
        <div className="coins">
          {tokens.map((token: Token) => {
            return (
              <CoinsItem
                key={token.address}
                onClick={() => {
                  if (flag === 'selling') {
                    setSelectedSellingToken(token)
                    handleClose()
                  } else if (flag === 'buying') {
                    setSelectedBuyingToken(token)
                    handleClose()
                  }
                }}
                img={token.icon}
                name={token.symbol}
                approved={token.tags.includes('verified')}
                active={true}
                count={+token.organicScore.toFixed(0)}
                fullName={token.name}
                nameID={token.address}
                // capital={1000}
              />
            )
          })}
        </div>
      </CustomModal>
    </>
  )
}

export default Reccuring;