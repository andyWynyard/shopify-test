import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Product from "./Product"

const PRODUCTS_LISTING_QUERY = graphql`
  query ProductsListingQuery {
    allShopifyProduct {
      edges {
        node {
          id
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
    }
  }
`

const ProductsListing = () => {
  const { allShopifyProduct } = useStaticQuery(PRODUCTS_LISTING_QUERY)
  console.log("allShopifyProduct", allShopifyProduct)
  return (
    <div>
      {allShopifyProduct.edges.map((product, index) => {
        console.log("product", product)
        return <Product product={product.node} key={index} />
      })}
    </div>
  )
}

export default ProductsListing
