import React from 'react'
import { Link } from 'gatsby'
import style from './header.module.css'

const Header = ({ siteTitle }) => (
  <header>
    <h1 className={style.heading}>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
)

export default Header
