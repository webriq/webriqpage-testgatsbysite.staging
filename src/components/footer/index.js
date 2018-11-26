import React from 'react'
import style from './footer.module.css'

const Footer = ({ siteTitle }) => (
  <footer className={style.footer}>
    Copyright &copy; {new Date().getFullYear()}
  </footer>
)

export default Footer
