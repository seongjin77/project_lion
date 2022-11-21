import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','스포츠','Sale','지속가능성']

  const navigate = useNavigate();
  const goToLogin = ()=> {
    navigate('/login')
  }

  const search = (e) => {
      if(e.key === 'Enter'){
        let keyword = e.target.value;
        navigate(`/?q=${keyword}`)
      }
  }

  return (
    <div>
        <div className='login-button' onClick={goToLogin}>
        <div><FontAwesomeIcon icon={faUser} /></div>
        <button>로그인</button>
        </div>
        <div className='logo-nav'>
          <img width={100} src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg'></img>
        </div>
        <div className='nav-item'>
          <nav>
            <ul className='menulist'>
              {menuList.map(item => <li>{item}</li>)}
            </ul>
          </nav>
          <div className='nav-search'>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
          <input type='text' onKeyDown={search}></input>
          </div>
        </div>
    </div>
  )
}

export default Navbar