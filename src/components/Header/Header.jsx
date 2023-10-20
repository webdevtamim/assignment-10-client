import Logo from '../../assets/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaAlignRight } from 'react-icons/fa';
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    const handleToggle = e => {
        if(e.target.checked) {
            setTheme('black');
        } else {
            setTheme('light');
        }
    }

    useEffect( () => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const listItems = ['Home', 'Add Product', 'My Cart']
    const listLinks = ['/', '/addProduct', '/myCart']

    return (
        <div>
            <div className='bg-[#eb0029] px-5 py-1'>
                <div className='max-w-[1440px] mx-auto'>
                    <div className='flex justify-between text-white'>
                        <div className='flex gap-3 text-sm items-center lg:pr-10'>
                            <a href="https://www.facebook.com" target='_blank'><FaFacebookF></FaFacebookF></a>
                            <a href="https://www.twiter.com" target='_blank'><FaTwitter></FaTwitter></a>
                            <a href="https://www.instagram.com" target='_blank'><FaInstagram></FaInstagram></a>
                        </div>
                        <div className=''>
                            <label className="swap swap-rotate">
                                <input onChange={handleToggle} type="checkbox" />
                                <svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                <svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='max-w-[1440px] flex mx-auto justify-center'>
                    <div className='lg:w-[15%] md:w-[25%] sm:w-[30%] w-[40%] flex'>
                        <Link to={''} className='px-5 py-3 flex items-center'>
                            <img className='lg:w-11/12 md:w-10/12 w-full' src={Logo} alt="Logo" />
                        </Link>
                        <div className="triangle-shape hidden md:flex"></div>
                    </div>
                    <div className='lg:w-[85%] sm:w-[70%] w-[60%] flex md:justify-between justify-end px-5 py-3 items-center'>
                        <nav className='hidden md:flex items-center'>
                            <ul className='flex gap-8 pl-7'>
                                {
                                    listItems.map((listItem, index) => (
                                        <li key={index}>
                                            <NavLink
                                                className='duration-300 hover:text-[#eb0029] py-3'
                                                to={listLinks[index]}
                                            >
                                                {listItem}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                        <div className="dropdown dropdown-end md:hidden pt-1 pr-4">
                            <label tabIndex={0}>
                                <FaAlignRight className='text-2xl'></FaAlignRight>
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-5">
                                {
                                    listItems.map((listItem, index) => (
                                        <li key={index}>
                                            <NavLink
                                                className='duration-300 hover:text-[#eb0029] hover:bg-white py-3'
                                                to={listLinks[index]}
                                            >
                                                {listItem}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <Link to={'register'}>
                                <button className='text-white duration-500 bg-[#eb0029] hover:bg-white hover:text-[#010f1c] rounded-sm md:px-10 px-5 py-3 font-medium flex items-center gap-2'>
                                    <span>Register</span>
                                    <BsArrowRight></BsArrowRight>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;