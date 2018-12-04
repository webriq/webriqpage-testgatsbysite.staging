import React from 'react'
import style from './index.module.css'

const Footer = ({ siteTitle }) => (
  <footer className={style.footer}>
    Copyright &copy; {new Date().getFullYear()}
  </footer>
)

export default Footer
