import Logo from '../../assets/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaAlignRight } from 'react-icons/fa';
import { BsArrowRight } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
    const listItems = ['Home', 'Add Product', 'My Cart']
    const listLinks = ['/', '/addProduct', '/myCart']

    return (
        <div>
            <div className='bg-[#eb0029] lg:block md:grid hidden'>
                <div className='max-w-[1440px] flex mx-auto justify-center'>
                    <div className='md:w-[17%] flex gap-3 items-center md:pl-8 pl-5 text-white'>
                        <div>
                            <LuPhoneCall className='lg:text-xl'></LuPhoneCall>
                        </div>
                        <div>
                            <p className='text-center text-xs -mb-1  lg:block hidden'>Call Anytime</p>
                            <a href='tel:+9045864970' className='tracking-widest'>+9045864970</a>
                        </div>
                    </div>
                    <div className="md:w-[83%] text-white flex justify-end px-5 py-2">
                        <div className='flex gap-3'>
                            <div className='flex gap-2 items-center border border-transparent border-r-white pr-4'>
                                <FaMapMarkerAlt></FaMapMarkerAlt>
                                <span className='text-sm font-light'>Rd. Allentown, New Mexico 31134</span>
                            </div>
                            <div className='flex gap-3 text-sm items-center'>
                                <a href="https://www.facebook.com" target='_blank'><FaFacebookF></FaFacebookF></a>
                                <a href="https://www.twiter.com" target='_blank'><FaTwitter></FaTwitter></a>
                                <a href="https://www.instagram.com" target='_blank'><FaInstagram></FaInstagram></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#010f1c]'>
                <div className='max-w-[1440px] flex mx-auto justify-center'>
                    <div className='lg:w-[15%] md:w-[25%] sm:w-[30%] w-[40%] flex'>
                        <Link to={''} className='px-5 py-3 flex items-center'>
                            <img className='lg:w-11/12 md:w-10/12 w-full' src={Logo} alt="Logo" />
                        </Link>
                        <div className="triangle-shape hidden md:flex"></div>
                    </div>
                    <div className='lg:w-[85%] sm:w-[70%] w-[60%] text-white flex md:justify-between justify-end px-5 py-3 items-center'>
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
                                <button className='duration-500 bg-[#eb0029] hover:bg-white hover:text-[#010f1c] rounded-sm md:px-10 px-5 py-3 font-medium flex items-center gap-2'>
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