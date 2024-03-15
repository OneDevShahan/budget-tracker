import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css';
import { BsMoonStarsFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { IoMdSettings } from "react-icons/io";



const Navbar = (props) => {
  return (
      <div className='nbar'>
        <div className='logo'>
            <h1>OneDev</h1>
            <h6>Code.Solve.Repeat</h6>
        </div>
        <ul className='ul-flex'>
            <Link to='/' className='link'>Expenses</Link>
            <Link to='/add' className='link'>Add Expense</Link>
            <Link to='/edit/:id' className='link'>Edit Expense</Link>
            <div className='dropdown'>
              <button className='mode' data-bs-toggle="dropdown" aria-expanded="false">
              <span className='svg'><WiMoonAltFirstQuarter size={18}/></span>
              </button>
              <ul className="dropdown-menu">
                { props.isDarkModeOn && <li><button className="dropdown-item" onClick={props.toggleDarkMode}><LuSunMoon /><span className='p-3'>Light</span></button></li> }
                { !props.isDarkModeOn && <li><button className="dropdown-item" onClick={props.toggleDarkMode}><LuSunMoon/><span className='p-3'>Dark</span></button></li> }
                <li><button className="dropdown-item" onClick={props.toggleDarkMode("system")}><IoMdSettings/><span className='p-3'>System</span></button></li>
              </ul>
            </div>
        </ul>
    </div>
  )
}

export default Navbar
