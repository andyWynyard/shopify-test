import React from 'react'
import { graphql } from 'gatsby'
import ProductDetail from '../components/ProductDetail'
import Layout from '../components/layout'

const ProductPageTemplate = ({ data }) => {
  return (
    <Layout>
      <ProductDetail product={data.shopifyProduct} />
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      shopifyId
      description
      descriptionHtml
      title
      productType
      variants {
        id
        price
        title
        selectedOptions {
          name
          value
        }
        sku
        shopifyId
        image {
          originalSrc
        }
        availableForSale
      }
      tags
      images {
        localFile {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPageTemplate
