import { FaReact } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { AiFillCalendar } from "react-icons/ai";
import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <a className="header__logo" href="/" aria-label="Logo">
                    <FaReact className="header__logo-img" />
                </a>
                <div className="header__burger">
                    <div className="header__icons"> 
                        <IoPersonSharp />
                        <AiFillCalendar />
                    </div>

                    <input className="header__burget-input" type="checkbox" />

                    <span className="header__burger-stick"></span>
                    <span className="header__burger-stick"></span>
                    <span className="header__burger-stick"></span>
                </div>
            </div>
        </header>
    )
}

export default Header