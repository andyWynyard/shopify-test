import React, { useState, useLayoutEffect } from 'react'
import Img from 'gatsby-image'
import { Base64 } from 'js-base64'
import ShopifyBuy from '@shopify/buy-button-js'

const ProductDetail = ({ product }) => {
  const [variantState, setVariantState] = useState(product.variants[0])
  // console.log('product', product)

  useLayoutEffect(() => {
    const client = ShopifyBuy.buildClient({
      domain: 'andys-level-up-tuts-store.myshopify.com',
      storefrontAccessToken: '31aa0eae1da41ca3da6ebd523abae79d',
    })
    const decoded = Base64.decode(product.shopifyId).split('/').pop()
    console.log('decoded', decoded)
    const ui = ShopifyBuy.UI.init(client)

    ui.createComponent('product', {
      id: decoded,
      node: document.getElementById('button'),
    })
  }, [])

  console.log('variantState', variantState)
  return (
    <div>
      {/* <h1>{product.title}</h1>
      <Img fixed={product.images[0].localFile.childImageSharp.fixed} />
      <p>${variantState.price}</p> */}
      <div id="button"></div>
      {/* <h4>{product.description}</h4>
      <select
        onChange={(e) => {
          const selected = product.variants.filter(
            (variant) => variant.sku === e.target.value
          )
          setVariantState(selected[0])
        }}
        value={variantState.sku}
      >
        {product.variants.map((variant) => (
          <option key={variant.id} value={variant.sku}>
            {variant.title}
          </option>
        ))}
      </select> */}
    </div>
  )
}

export default ProductDetail
