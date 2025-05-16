import { ReactNode } from 'react'
import './style.scss'

export const MoreItem = ({
  icon,
  title,
  desc,
  link,
}: {
  icon: ReactNode
  title: string
  desc: string
  link: string
}) => {
  return (
    <a href={link} target="_blank" className="more-item" rel="noreferrer">
      <span className="more-item__img">{icon} </span>
      <div>
        <div className="more-item__title">{title}</div>
        <div className="more-item__desc">{desc}</div>
      </div>
    </a>
  )
}
