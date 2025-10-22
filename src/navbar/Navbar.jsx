import React, { useRef } from 'react'
import st from '../navbar/Navbar.module.css'
import { IoMdContact } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Navbar = ({scrollto}) => {
    const location = useLocation();
    const navigate = useNavigate();
     const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollto();
      }, 300);
    } else {
      scrollto();
    }
  };
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
                        <p onClick={handleContactClick}>Contact</p>
                    </div>
                    <div className={st.rightside}>
                        <div>
                            <IoMdContact /><span>
                                <Link to="/Login"
                                    className={`${st.link} ${location.pathname === '/Login' ? st.active : ''}`}>Log in</Link></span>
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