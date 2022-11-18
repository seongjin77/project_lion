import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    const {id, num} = useParams();
   

  return (
    <>
    <div>ProductDetail{id}</div>
    <div>ProductDetail{num}</div>
    </>
  )
}

export default ProductDetail