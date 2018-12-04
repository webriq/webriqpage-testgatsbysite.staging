import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts'

const IndexPage = () => (
  <Layout>
    <h1>Hello there!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <code>This page is located at /src/pages/index.js</code>
    <br />
    <br />
    <Link to="/about">Go to About Us page</Link>
    <br />
    <Link to="/blog">Go to Blog</Link>
  </Layout>
)

export default IndexPage
