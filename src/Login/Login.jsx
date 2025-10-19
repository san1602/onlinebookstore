import React from 'react'
import st from '../Login/Login.module.css'
import { useState } from 'react';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { MdError } from "react-icons/md";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [error, setError] = useState({});
    const [showpassword, setShowpassword] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [dob, setDob] = useState("");
    const [dobcopy, setDobcopy] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const validation = () => {
        const err = {};
        if (!email.trim()) {
            err.email = 'Enter your Mailid'
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            err.email = 'Invalid data'
        }
        if (!password.trim()) {
            err.password = 'Enter your password'
        }
        if (!confirmpassword.trim()) {
            err.confirmpassword = 'Enter your password'
        } else if (password !== confirmpassword) {
            err.confirmpassword = 'check your password'
        }
        if (!phonenumber.trim()) {
            err.phonenumber = 'Enter your phonenumber'
        } else if (!/^[6-9]\d{9}$/.test(phonenumber)) {
            err.phonenumber = 'Invalid data'
        }
        if (!firstname.trim()) {
            err.firstname = 'Enter your firstname'
        }
        if (!lastname.trim()) {
            err.lastname = 'Enter your firstname'
        }
        if (!dob.trim()) {
            err.dob = 'Enter your date of birth'
        }

        setError(err)
        return Object.keys(err).length === 0
    }

    const dateofbith = (e) => {
        const date = e.target.value
        setDob(date);
        setDobcopy(date);

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

                            {error.email ? <p className={st.errormsg}><span><MdError /></span>{error.email}</p> : ''}

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
                                    {showpassword ? < VscEye /> : <VscEyeClosed />}
                                </span>
                            </div>
                            {error.password ? <p className={st.errormsg}><span><MdError /></span>{error.password}</p> : ''}
                            <button type="submit" onClick={validation}>Login</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className={st.signupform}>
                <form>
                    <div className={st.firstname}>
                        <input type="text"
                            placeholder="Firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                        />
                    </div>
                    {error.firstname ? <p className={st.errormsg}><span><MdError /></span>{error.firstname}</p> : ''}
                    <div className={st.lastname}>
                        <input type="text"
                            placeholder="Lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />
                    </div>
                    {error.lastname ? <p className={st.errormsg}><span><MdError /></span>{error.lastname}</p> : ''}
                    <div className={st.dob}>
                        <div className={st.dateselector}>
                            <input type="date"
                                value={dob}
                                onChange={dateofbith}
                                required
                            />
                        </div>
                        <div className={st.dateinput}>
                            <input type="text"
                                placeholder="D.O.B"
                                value={dobcopy}
                                readOnly
                            />
                        </div>
                        {error.dob ? <p className={st.errormsg}><span><MdError /></span>{error.dob}</p> : ''}
                        <div className={st.signupmail}>
                            <input
                                type="email"
                                placeholder="Mail-id"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        {error.email ? <p className={st.errormsg}><span><MdError /></span>{error.email}</p> : ''}
                        <div className={st.phonenumber}>
                            <input
                                type="text"
                                placeholder="Phonenumber"
                                value={phonenumber}
                                onChange={(e) => setPhonenumber(e.target.value)}
                                required
                            />
                        </div>
                        {error.phonenumber ? <p className={st.errormsg}><span><MdError /></span>{error.phonenumber}</p> : ''}
                        <div className={st.pass}>
                            <input
                                type={showpassword ? 'text' : 'password'}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span
                                className={st.eye}
                                onClick={() => setShowpassword(!showpassword)}
                            >
                                {showpassword ? < VscEye /> : <VscEyeClosed />}
                            </span>
                        </div>
                        {error.password ? <p className={st.errormsg}><span><MdError /></span>{error.password}</p> : ''}
                    </div>
                    <div className={st.cnfrmpass}>
                        <input type="password"
                            placeholder="Confirm Password"
                            value={confirmpassword}
                            onChange={(e) => setConfirmpassword(e.target.value)}
                            required
                        />
                    </div>
                    {error.confirmpassword ? <p className={st.errormsg}><span><MdError /></span>{error.confirmpassword}</p> : ''}
                </form>
                <button type="submit" onClick={validation}>Sign up</button>

            </div>


        </>
    )
}

export default Login