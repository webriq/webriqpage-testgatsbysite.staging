import React from 'react'
import { Link } from 'gatsby'
import style from './index.module.css'

const Nav = ({ menuItems }) => (
  <nav className={style.nav}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/blog">Blog</Link>
  </nav>
)

export default Nav 
