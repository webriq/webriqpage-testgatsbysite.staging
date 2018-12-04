import React from 'react'
import { Link } from 'gatsby'
import style from './nav.module.css'

export default ({ pageContext }) => {
  if (typeof process.env.USE_PAGINATION === 'undefined') {
    return (<></>)
  }

  const { currentPage, numPages } = pageContext
  const pathPrefix = '/blog/'
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? pathPrefix
      : pathPrefix + (currentPage - 1).toString()
  const nextPage = pathPrefix + (currentPage + 1).toString()

  return (
    <ul className={style.navList}>
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <li
          key={`pagination-number${i + 1}`}
          className={style.navItem}
        >
          <Link
            to={`/blog/${i === 0 ? '' : i + 1}`}
            className={style.navLink}
            style={{
              color: i + 1 === currentPage ? '#ffffff' : '',
              background: i + 1 === currentPage ? '#007acc' : '',
            }}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </ul>
  )
}
