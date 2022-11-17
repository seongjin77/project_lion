import React from 'react'

const Box = ({title,item,result}) => {

if(title === 'computer' && result === '이김'){
  result = '졌음'
}
else if(title === 'computer' && result === '졌음'){
  result = '이김'
}


  return (
    <>
    <div className={`box ${result} sss`}>
        <h1>{title}</h1>
        <img src={item && item.img} alt='가위바위보 사진'></img>
        <p>{result}</p>
    </div>
    
    </>
  )
}

export default Box