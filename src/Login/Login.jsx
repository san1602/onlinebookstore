import React from 'react'
import st from '../Login/Login.module.css'
import { useState } from 'react';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



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

                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login