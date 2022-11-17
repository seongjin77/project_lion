import React from 'react'

const WeatherBox = ({weather}) => {
    //console.log('프롭스',weather);
  return (
    <div className='main-box'>
        <div>
        <p>날씨 알리미</p>
        <h1>{weather == null ? '로딩중' : weather.name}</h1>
        <h2>{weather == null ? '로딩중' : weather.weather[0].main}</h2>
        <p>℃ {weather?.main.temp}도 / ℉ {Math.round(weather?.main.temp * 1.8) + 32}도</p>
        </div>
    </div>
  )
}
export default WeatherBox