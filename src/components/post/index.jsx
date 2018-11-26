import { graphql } from 'gatsby'

export const PostsListFragment = graphql`
  fragment PostsListFragment on StrapiPosts {
    id
    title
    excerpt
    fields {
      slug
    }
    author {
      id
    }
  }
`
