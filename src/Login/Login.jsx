import React from 'react'
import st from '../Login/Login.module.css'
import { useState } from 'react';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { MdError } from "react-icons/md";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const [showpassword, setShowpassword] = useState(false);
    const validation = () => {
        const err = {};
        if (!email.trim()) {
            err.email ='Enter your Mailid'
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            err.email ='Invalid data'
        }
        if (!password.trim()) {
            err.password ='Enter your password'
        }

        setError(err)
        return Object.keys(err).length === 0
    }

    return (
        <>
            <div className={st.finalloginform}>
                <div className={st.loginform}>
                    <div className={st.brandname}>
                        INKSPIRE
                    </div>
                    <div className={st.signuptrigger}>
                        <p>Don,t have an account yet ? <span>Sign up</span> </p>
                    </div>
                    <div className={st.formcontainer}>
                        <form className={st.form}>
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            
                            {error.email ? <p className={st.errormsg}><span><MdError/></span>{error.email}</p> : ''}

                            <label>Password</label>
                            <div className={st.pass}>
                                <input
                                    type={showpassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span
                                    className={st.eye}
                                    onClick={() => setShowpassword(!showpassword)}
                                >
                                    {showpassword ? <VscEyeClosed /> : <VscEye />}
                                </span>
                            </div>
                            {error.password ? <p className={st.errormsg}><span><MdError/></span>{error.password}</p> : ''}
                            <button type="submit" onClick={validation}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login