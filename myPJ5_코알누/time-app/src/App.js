import { useEffect, useState } from 'react';
import './App.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';



// 1. 앱이 실행되자마자 현재위치 기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨 화씨 날씨 상태
// 3. 499d737b2bec38bd9d9551149102200a

function App() {
  const [weather,setWeather] = useState(null)
  const cities = ['paris','london','tokyo','seoul','new york']
   const [city, setCity] = useState('');
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        getWeatherByCurrentLocation(lat,lon)
        
    });
  }

  const getWeatherByCurrentLocation = async (lat,lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=499d737b2bec38bd9d9551149102200a&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data); // data에는 날씨 정보 객체가 들어감
  }

  // useEffect(()=>{
  //   getCurrentLocation();
  // },[])

  useEffect(()=>{
    if(city !== ''){
      도시별날씨(city)
    }
    else{
      getCurrentLocation();
    }
  },[city])

  const 도시별날씨 = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=499d737b2bec38bd9d9551149102200a&units=metric`
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }


  //// 버튼으로 도시별날씨 함수를 props로 내려서 밑에서 쓰는거랑
  //// useEffect로 
  return (
    <>
      <div className='container'>
      <WeatherBox weather={weather}/>
      <WeatherButton cities={cities} setCity={setCity} />
      </div>
    </>
  );
}

export default App;
