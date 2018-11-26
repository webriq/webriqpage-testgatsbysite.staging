import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

const Layout = ({ head, children }) => (
  <StaticQuery
    render={data => (
      <>
        <Helmet
          title={
            ((head && head.title) || data.site.siteMetadata.title) +
            ' - ' +
            ((head && head.name) || data.site.siteMetadata.name)
          }
          meta={[
            {
              name: 'description',
              content:
                (head && head.meta && head.meta.description) ||
                data.site.siteMetadata.meta.description,
            },
            {
              name: 'keywords',
              content:
                (head && head.meta && head.meta.keywords) ||
                data.site.siteMetadata.meta.keywords,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
      </>
    )}
    query={graphql`
      query siteQuery {
        site {
          siteMetadata {
            title
            name
            meta {
              keywords
              description
            }
          }
        }
      }
    `}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
