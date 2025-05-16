import { ReactNode } from 'react'

import './style.scss'

export const SocialIcon = ({
  icon,
  name,
  link,
}: {
  icon: ReactNode
  name: string
  link: string
}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="social-icon">
      <div className="social-icon__img">{icon}</div>
      <span className="social-icon__name">{name}</span>
    </a>
  )
}
