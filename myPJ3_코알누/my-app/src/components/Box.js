import React from 'react'

const Box = ({title,item,result}) => {

  return (
    <>
    
    <div className='box'>
        <h1>{title}</h1>
        <img src={item && item.img} alt='가위바위보 사진'></img>
        <p>{result}</p>
    </div>
    
    </>
  )
}

export default Box