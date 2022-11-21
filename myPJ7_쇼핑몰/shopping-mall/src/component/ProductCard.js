import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
   const style = {
        width: '100%',
        objectFit: 'cover'
}
    const navigate = useNavigate();
    const showDetail = ()=>{
        navigate(`/product/${item.id}`)
    }
   

  return (
    <div className='productcard-item' onClick={showDetail}>
        <img style={style} src={item?.img}></img>
        <p>{item?.title}</p>
        <p>{item?.price}</p>
        <p>{item?.new === true? '신제품' : ''}</p>
    </div>
  )
}

export default ProductCard