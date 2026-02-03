import React, { FC } from 'react'
import { Approved } from '../icons'
import './style.scss'

type CoinSearchItemProps = {
  img: string
  name: string
  approved: boolean
  fullName: string
  nameID: string
  mc: string
  vol: string
  liq: string
  org: string
}

const shorter = (str: string) => {
  if (str.length < 8) return str
  return `${str.slice(0, 4)}...${str.slice(-4)}`
}

const CoinSearchItem: FC<CoinSearchItemProps> = ({
  img,
  name,
  approved,
  fullName,
  nameID,
  mc,
  vol,
  liq,
  org,
}) => {
  return (
    <div className="coin-search">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img className="coin-search__img" src={img} alt="token" />
        <div className="coin-search__data">
          <div className="coin-search__header">
            <div className="coin-search__name">{name}</div>
            <div className="coin-search__approved">
              <Approved color={'white'} />
            </div>
          </div>
          <div className="coin-search__about">
            <div className="coin-search__full-name">{fullName}</div>
            <div>·</div>
            <div className="coin-search__name-id">{shorter(nameID)}</div>
          </div>
        </div>
      </div>

      <div className="coin-search__statics">
        <div>
          <div className="coin-search__mc">MC: {mc}</div>
          <div className="coin-search__vol">VOL: {vol}</div>
        </div>

        <div>
          <div className="coin-search__liq">LIQ: {liq}</div>
          <div className="coin-search__org">ORG: {org}</div>
        </div>
      </div>
    </div>
  )
}

export default CoinSearchItem
