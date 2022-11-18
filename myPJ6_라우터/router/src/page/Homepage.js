import React from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Homepage = () => {

  let navigate = useNavigate();

  return (
    <>
    <div>Homepage</div>
    <Link to='/about'>이동합니다</Link>
    <button onClick={()=>{navigate('/product?q=3&num=3')}}>이동</button>
    </>
  )
}

export default Homepage