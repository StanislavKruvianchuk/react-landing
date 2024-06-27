import { FaReact } from "react-icons/fa";
import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <a className="header__logo" href="/" aria-label="Logo">
                    <FaReact className="header__logo-img" />
                </a>
                <div className="header__burger">
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