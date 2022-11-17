import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity}) => {

    //1. 클릭했을때 프롭스로 받은 웨더 api를 도시별로 바꿔줌.

  return (
    <div className='button-box'>
        <Button onClick={()=>{setCity('')}} variant="info">Current Location</Button>
        {
            cities.map((item)=>{
              return <Button onClick={()=>{setCity(item)}} variant="warning">{item}</Button>
            })
        }
    </div>
  )
}

export default WeatherButton