import { FaReact } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { AiFillCalendar, AiFillSetting, AiFillSun } from "react-icons/ai";
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
    const showMenu = (e) => {
        const iconsBox = document.getElementById('icons-block');
        iconsBox.classList.toggle('header__icons--active');
    }   


    return (
        <header className="header main-wrapper">
            <div className="header__wrapper">
                <a className="header__logo" href="/" aria-label="Logo">
                    <FaReact className="header__logo-img" />
                </a>
                <div className="header__burger" onClick={showMenu}>
                    <div className="header__icons" id="icons-block"> 
                        <Link to="/login"><IoPersonSharp className="header__icons-item" /></Link>
                        
                        <AiFillCalendar className="header__icons-item" />
                        <AiFillSun className="header__icons-item"/>
                        <AiFillSetting className="header__icons-item" />
                    </div>

                    <div>
                        <input className="header__burget-input" type="checkbox" />

                        <span className="header__burger-stick"></span>
                        <span className="header__burger-stick"></span>
                        <span className="header__burger-stick"></span>
                    </div>
                    
                </div>
            </div>
        </header>
    )
}

export default Header