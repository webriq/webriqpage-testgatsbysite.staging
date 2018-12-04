import React from 'react'
import { Link } from 'gatsby'
import style from './index.module.css'
import HeaderNav from '../nav'

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <h1 className={style.heading}>
      <Link to="/">{siteTitle}</Link>
    </h1>

    <HeaderNav />
  </header>
)

export default Header
