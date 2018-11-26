import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/default'

const AboutPage = () => (
  <Layout head={{ title: 'Page 2' }}>
    <h1>Hi, I am the about page</h1>
    <p>Welcome to page 2 of your Gatsby site</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
