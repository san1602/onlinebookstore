import React from 'react'
import st from '../navbar/Navbar.module.css'
import { IoMdContact } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
    const location = useLocation();
    return (
        <>
            <nav>
                <div className={st.navbar}>
                    <div className={st.leftside}>
                        <Link to="/"
                            className={`${st.link} ${location.pathname === '/' ? st.active : ''}`}>
                            Home</Link>
                        <Link to="/about"
                            className={`${st.link} ${location.pathname === '/about' ? st.active : ''}`}>
                            About</Link>
                        <p>Books</p>
                        <p>Contact</p>
                    </div>
                    <div className={st.rightside}>
                        <div>
                            <IoMdContact /><span>Log in</span>
                        </div>
                        <div>
                            <FaCartShopping />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar