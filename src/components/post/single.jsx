import { graphql } from 'gatsby'

export const PostSingleFragment = graphql`
  fragment PostSingleFragment on StrapiPosts {
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
    metaKeywords
    metaDescription
  }
`
