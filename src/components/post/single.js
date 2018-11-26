import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../layouts'
import ReactMarkdown from 'react-markdown'
import DEBUG from '../../utils/debug'

export default ({ data }) => {
  return (
    <Layout
      head={{
        title: data.strapiPosts.title,
        meta: {
          title: data.strapiPosts.metaTitle,
          keywords: data.strapiPosts.metaKeywords,
          description: data.strapiPosts.metaDescription,
        },
      }}
    >
      <DEBUG data={data} />
      <h2>{data.strapiPosts.title}</h2>
      <ReactMarkdown escapeHtml={false} source={data.strapiPosts.body} />
      <Link to="/blog">Go back</Link>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    strapiPosts(id: { eq: $id }) {
      id
      title
      body
      excerpt
      author {
        id
        email
        profile
      }
      fields {
        slug
      }
      metaTitle
      metaKeywords
      metaDescription
    }
  }
`
