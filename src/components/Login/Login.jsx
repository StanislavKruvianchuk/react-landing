import { useState } from "react";
import './Login.scss'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onButtonClick = () => {
       
    }

    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__content">
                    <div className="login__content-top">
                        <h1>Login</h1>
                        <p>Please enter your Name, Login and your Password</p>
                    </div>
                    <div className="login__content-middle">
                        <div className="login__input-box">
                            <input
                                value={email}
                                placeholder="Enter your email here"
                                onChange={(ev) => setEmail(ev.target.value)}
                                className="login__input"
                            />
                        </div>
                        <div className="login__input-box">
                            <input
                                value={password}
                                placeholder="Enter your password here"
                                onChange={(ev) => setPassword(ev.target.value)}
                                className="login__input"
                            />
                        </div>
                        <button className="login__btn" type="submit" onClick={onButtonClick}>Submit</button>
                    </div>

                </div>
            </div> 
        </div>
    )
}

export default Login