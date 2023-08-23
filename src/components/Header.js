import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [toggleDark, setToggleDark] = useState(false);
  let loc = useLocation().pathname
  const arr = ['/','/about','/contact']
  let chk = arr.filter((val)=>val===loc)
  if(chk.length===0) loc='/'
  
  useEffect(() => {
    let toggleBlack = document.querySelectorAll('.note');
    let toggleGrey = document.querySelectorAll('.note-grey');
    if (toggleDark) {
      document.body.classList.add('dark');
      toggleBlack.forEach((item) => item.classList.add('dark'))
      toggleGrey.forEach((item) => item.classList.add('grey'))
    } else {
      document.body.classList.remove('dark');
      toggleBlack.forEach((item) => item.classList.remove('dark'))
      toggleGrey.forEach((item) => item.classList.remove('grey'))
    }
    document.getElementById('/').classList.remove('active');
    document.getElementById('/about').classList.remove('active');
    document.getElementById('/contact').classList.remove('active');
    let l = document.getElementById(loc).classList
    if(l) l.add('active');
  }, [toggleDark,loc]);
  
  return (
    <div className="container">
      <header className="row d-flex flex-md-row justify-content-between py-3">
        <Link className='navbar-brand col-md-3 d-flex justify-content-center' to={'/'}  style={{'height':'7vh', 'width':'9vh', 'paddingTop':'1%', margin:'0 auto'}}>
          <img src="https://d29fhpw069ctt2.cloudfront.net/clipart/105048/preview/Sephr_Notepad_with_Text_and_Pencil_1_preview_17c5.png" alt="icon" />
        </Link>
        <ul className="d-flex justify-content-center col-md-5 nav nav-pills mt-3">
          <li className="nav-item"><Link to="/" id='/' className="nav-link active" aria-current="page">Home</Link></li>
          <li className="nav-item"><Link to="/about" id='/about' className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/contact" id='/contact' className="nav-link">Contact</Link></li>
        </ul>
        <div className="d-flex justify-content-center col-md-4 toggle-theme-wrapper mr-5 mt-3">
          <span>☀️</span>
          <label className="toggle-theme" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              onClick={() => { setToggleDark(!toggleDark) }}
            />
            <div className="slider round"></div>
          </label>
          <span>🌒</span>
        </div>
      </header>
    </div>
  )
}

export default Navbar
