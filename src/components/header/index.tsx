import React, { useEffect, useState } from 'react'
import './style.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../../constants/routes'
import { CustomModal } from '../CustomModal'
import { data } from '../MoreItem/data'
import { MoreItem } from '../MoreItem'
import { iconsData } from '../SocialItem/data'
import { SocialIcon } from '../SocialItem'
import { debounce } from '@mui/material'
import axios from 'axios'
import CoinSearchItem from '../CoinSearchItem'
import { modal } from '@reown/appkit/react';

type HeaderProps = {
  isAsideOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = ({ isAsideOpen }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpen = () => setIsModalOpen(true)
  const handleClose = () => setIsModalOpen(false)

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const [search, setSearch] = useState('')
  const debouncedSearch = debounce((value: string) => {}, 300)

  const [searchData, setSearchData] = useState([])

  useEffect(() => {
    axios
      .get('https://datapi.jup.ag/v1/pools/toptrending/24h')
      .then((response) => {
        const data = response.data.pools
        setSearchData(data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (search.length > 1) {
      debouncedSearch(search)
    }
  }, [search])

  const handleOpenSearchModal = () => setIsSearchModalOpen(true)
  const handleCloseSearchModal = () => {
    setSearch('')
    setIsSearchModalOpen(false)
  }

  const handleConnectClick = () => {
    modal?.open({ view: "Connect" });
  };

  return (
    <>
      <div className="header-container">
        <div className="header-navigation">
          <div className="navigation-link header-logo">
            <img
              src={`${process.env.PUBLIC_URL}/jupiter-logo.webp`}
              alt="icon"
              className="header-icon"
            />
            <div className="logo-text">Jup.ag</div>
          </div>
          <div
            className={`navigation-link ${
              location.pathname.includes(routes.spot) ||
              location.pathname === '/newTestSite/'
                ? 'active'
                : ''
            }`}
            onClick={() => navigate(routes.spot)}
          >
            Spot
          </div>
          <div
            className={`navigation-link ${
              location.pathname.includes(routes.trenches) ? 'active' : ''
            }`}
            onClick={() => {
              window.location.href = 'https://jup.ag/trenches?tab=trending'
            }}
          >
            Trenches
          </div>
          <div
            className={`navigation-link ${
              location.pathname.includes(routes.perps) ? 'active' : ''
            }`}
            onClick={() => {
              window.location.href = 'https://jup.ag/perps'
            }}
          >
            Perps
          </div>
          <div className="navigation-info" onMouseEnter={handleOpen}>
            More
          </div>

          <div className="navigation-burger" onClick={handleOpen}>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 shrink-0"
            >
              <path
                fill="currentColor"
                d="M17.5938 6.85693C17.5938 7.13044 17.4851 7.39274 17.2917 7.58614C17.0983 7.77953 16.836 7.88818 16.5625 7.88818H1.4375C1.164 7.88818 0.901693 7.77953 0.708296 7.58614C0.514899 7.39274 0.40625 7.13044 0.40625 6.85693C0.40625 6.58343 0.514899 6.32113 0.708296 6.12773C0.901693 5.93433 1.164 5.82568 1.4375 5.82568H16.5625C16.836 5.82568 17.0983 5.93433 17.2917 6.12773C17.4851 6.32113 17.5938 6.58343 17.5938 6.85693ZM1.4375 2.38818H16.5625C16.836 2.38818 17.0983 2.27953 17.2917 2.08614C17.4851 1.89274 17.5938 1.63044 17.5938 1.35693C17.5938 1.08343 17.4851 0.821126 17.2917 0.62773C17.0983 0.434333 16.836 0.325684 16.5625 0.325684H1.4375C1.164 0.325684 0.901693 0.434333 0.708296 0.62773C0.514899 0.821126 0.40625 1.08343 0.40625 1.35693C0.40625 1.63044 0.514899 1.89274 0.708296 2.08614C0.901693 2.27953 1.164 2.38818 1.4375 2.38818ZM16.5625 11.3257H1.4375C1.164 11.3257 0.901693 11.4343 0.708296 11.6277C0.514899 11.8211 0.40625 12.0834 0.40625 12.3569C0.40625 12.6304 0.514899 12.8927 0.708296 13.0861C0.901693 13.2795 1.164 13.3882 1.4375 13.3882H16.5625C16.836 13.3882 17.0983 13.2795 17.2917 13.0861C17.4851 12.8927 17.5938 12.6304 17.5938 12.3569C17.5938 12.0834 17.4851 11.8211 17.2917 11.6277C17.0983 11.4343 16.836 11.3257 16.5625 11.3257Z"
              ></path>
            </svg>
          </div>
        </div>

        <div className="header-search" onClick={handleOpenSearchModal}>
          <svg
            className="icon-search"
            width="20"
            height="16"
            viewBox="0 0 18 18"
            fill="rgba(232,249,255,.5)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.30327 14.6058C8.75327 14.6074 10.1705 14.1746 11.3729 13.3637L15.5971 17.5871C16.1463 18.1371 17.0377 18.1371 17.5877 17.5871C18.1377 17.0371 18.1377 16.1457 17.5877 15.5964L13.3643 11.3722C14.5823 9.55661 14.9229 7.28943 14.2909 5.19563C13.6596 3.10183 12.1229 1.40183 10.1033 0.56283C8.08365 -0.276231 5.79385 -0.16607 3.86505 0.86283C1.93537 1.89251 0.569053 3.73243 0.140853 5.87683C-0.286487 8.02143 0.269759 10.2448 1.65725 11.9354C3.04397 13.6261 5.11665 14.6064 7.30325 14.6058H7.30327ZM7.30327 1.68943C8.79233 1.68865 10.2197 2.28005 11.2729 3.33319C12.3252 4.38631 12.9166 5.81359 12.9166 7.30279C12.9166 8.79199 12.3252 10.2192 11.2729 11.2724C10.2198 12.3247 8.79247 12.9162 7.30327 12.9162C5.81407 12.9162 4.38687 12.3247 3.33367 11.2724C2.28133 10.2193 1.68913 8.79199 1.68991 7.30279C1.69148 5.81451 2.28287 4.38719 3.33523 3.33479C4.38759 2.28239 5.81483 1.69103 7.30323 1.68947L7.30327 1.68943Z"
              fill="rgba(232,249,255,.5)"
            ></path>
          </svg>
          <div className="search-text">Search token or address</div>
          <div className="search-slash">/</div>
        </div>

        <div className="header-settings">
          <button
            className="header-portfolio"
            onClick={() => {
              window.location.href = 'https://portfolio.jup.ag/'
            }}
          >
            <span>Portfolio</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <button className="header-setting">
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.71971 1.2926L6.41471 2.9726C6.11846 3.06573 5.83097 3.18635 5.55971 3.32761L4.14971 2.35761L2.33979 4.16753L3.31479 5.57252C3.17292 5.84439 3.05355 6.13003 2.95979 6.42753L1.27979 6.73252V9.29252L2.95979 9.59751C3.05354 9.89564 3.17729 10.18 3.31979 10.4525L2.33979 11.8575L4.14971 13.6674L5.5547 12.6974C5.82719 12.8399 6.11657 12.9587 6.4147 13.0524L6.71969 14.7324H9.27969L9.58468 13.0524C9.88218 12.9587 10.1678 12.8393 10.4397 12.6974L11.8447 13.6674L13.6546 11.8575L12.6796 10.4525C12.8208 10.1813 12.9415 9.89878 13.0346 9.60252L14.7196 9.29252V6.73252L13.0346 6.42753C12.9415 6.1319 12.8252 5.84815 12.6846 5.57753L13.6546 4.16753L11.8447 2.35761L10.4397 3.32761C10.1678 3.18574 9.88218 3.06636 9.58468 2.9726L9.27969 1.2926H6.71971ZM7.9997 4.9726C9.67842 4.9726 11.0397 6.33385 11.0397 8.0126C11.0397 9.69135 9.67846 11.0526 7.9997 11.0526C6.32095 11.0526 4.95971 9.69135 4.95971 8.0126C4.95971 6.33385 6.32095 4.9726 7.9997 4.9726Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </button>
          <button className="header-connect" onClick={() => {
            handleConnectClick();
            /*isAsideOpen(true)*/
          }}>
            <span>Connect</span>
          </button>
        </div>
      </div>
      <CustomModal
        open={isSearchModalOpen}
        onClose={handleCloseSearchModal}
        flag={null}
      >
        <div className="search">
          <div>
            <span className="search__icon">i</span>
            <input
              className="search__input"
              type="text"
              placeholder='Search any token. Include " " for exact match.'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="seacrh__esc" onClick={handleCloseSearchModal}>
            Esc
          </button>
        </div>
        <div className="search-coins">
          {searchData.map((item: any) => {
            return (
              <CoinSearchItem
                img={item.baseAsset.icon}
                name={item.baseAsset.symbol}
                approved={true}
                fullName={item.baseAsset.name}
                nameID={item.baseAsset.id}
                mc={'1,15 млрд'}
                vol={'191 млн'}
                liq={'21,4 млн'}
                org={item.baseAsset.organicScore.toFixed(0)}
              />
            )
          })}
        </div>
      </CustomModal>
      <CustomModal open={isModalOpen} onClose={handleClose} flag={null}>
        <div className="items">
          {data.map((item) => (
            <MoreItem
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              link={item.link}
            />
          ))}
        </div>
        <div className="social-icons">
          {iconsData.map((item) => (
            <SocialIcon icon={item.icon} name={item.name} link={item.link} />
          ))}
        </div>
      </CustomModal>
    </>
  )
}

export default Header
