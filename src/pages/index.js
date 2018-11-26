import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts'
import Image from '../components/image'

const IndexPage = () => (
  <Layout head={{ name: 'Custom Name' }}>
    <h1>Hello team!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/about">Go to About Us page</Link>
    <br />
    <Link to="/blog">Go to Blog</Link>
  </Layout>
)

export default IndexPage
