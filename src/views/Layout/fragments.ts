import { graphql } from 'gatsby'

export const SEO = graphql`
  fragment WpSEO on WpPostTypeSEO {
    title
    metaDesc
    opengraphTitle
    opengraphDescription
    opengraphImage {
      sourceUrl
    }
    twitterTitle
    twitterDescription
    opengraphType
    twitterImage {
      sourceUrl
    }
  }
`
