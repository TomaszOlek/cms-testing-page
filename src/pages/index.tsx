import { PageProps, graphql } from 'gatsby'
import React from 'react'

import { Seo } from 'components/atoms/Seo'

import { useFormatQueryData } from 'hooks/useFormatQueryData/homepage'

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const PAGE = data.wpPage
  const PAGE_SEO = data.wpPage?.seo!

  if (!PAGE || !PAGE_SEO)
    throw new Error("IndexPage: CMS data didn't load properly")

  const { HERO_DATA } = useFormatQueryData(data)

  return (
    <div>
      <Seo
        title={PAGE_SEO.title ?? ''}
        description={PAGE_SEO.metaDesc ?? ''}
        ogTitle={PAGE_SEO.opengraphTitle}
        ogDescription={PAGE_SEO.opengraphDescription}
        ogImage={PAGE_SEO.opengraphImage?.sourceUrl}
        twitterTitle={PAGE_SEO.twitterTitle}
        twitterDescription={PAGE_SEO.twitterDescription}
        twitterImage={PAGE_SEO.twitterImage?.sourceUrl}
      />
      {HERO_DATA}
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    wpPage {
      seo {
        ...WpSEO
      }

      pageHomepage {
        pageTitle
      }
    }
  }
`
