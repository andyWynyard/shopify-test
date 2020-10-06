import React from 'react'
import Img from 'gatsby-image'

const Product = ({ product }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <Img fixed={product.images[0].localFile.childImageSharp.fixed} />
    </div>
  )
}

export default Product
