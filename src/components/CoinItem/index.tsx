import { FC } from 'react'
import { Approved, List } from '../icons'
import './style.scss'

interface Coin {
  img: string
  name: string
  approved: boolean
  active: boolean
  count: number
  fullName: string
  nameID: string
  LST?: string
  desc?: string
  onClick: () => void
}

const shorter = (str: string) => {
  if (str.length < 8) return str
  return `${str.slice(0, 4)}...${str.slice(-4)}`
}

export const CoinsItem: FC<Coin> = ({
  img,
  name,
  approved,
  active,
  count,
  fullName,
  nameID,
  LST,
  desc,
  onClick,
}) => {
  return (
    <div className="coin" onClick={onClick}>
      <img className="coin__img" src={img} alt="token" />
      <div className="coin__data">
        <div className="coin__header">
          <div className="coin__name">{name}</div>
          <div className="coin__approved">
            <Approved color={'white'} />
          </div>
          <div className="coin__list">
            <List color={'white'} />
            {count}
          </div>
        </div>
        <div className="coin__full-name">{fullName}</div>
        <div className="coin__name-id">{shorter(nameID)}</div>
      </div>

      {LST && <div className="coin__lts">{LST}</div>}
      {desc && <div className="coin__desc">{desc}</div>}
    </div>
  )
}
