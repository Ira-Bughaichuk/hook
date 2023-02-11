import React, { useEffect, useState } from 'react'
import { fetchProductById } from 'services/product-api'

export const Modal = ({onClose,productId}) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(productId)
    .then(result => setProduct(result))
    .catch(error => console.log(error))
  }, [productId])

  return (
      <div onClick={onClose}>
          <h3>{product?.name}</h3>
          <p>${product?.price}</p>
          <p>{product?.description}</p>
            <p>{product?.createdAt}</p>
            
      </div>
  )
}
