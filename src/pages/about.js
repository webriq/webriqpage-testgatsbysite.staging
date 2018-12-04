import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts'

const AboutPage = () => (
  <Layout head={{ title: 'Page 2' }}>
    <h1>Hi, I am the about page</h1>
    <p>Welcome to page 2 of your Gatsby site</p>
    <code>This page is located at /src/pages/about.js</code>
    <br />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
