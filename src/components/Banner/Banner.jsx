import headIMG from '../../assets/headIMG.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {

    return (
        <div className="bg-head-bg bg-no-repeat bg-cover pt-20 pb-16">
            <div className="md:flex items-center max-w-[1200px] mx-auto lg:py-10 md:py-5 px-5">
                <div className='lg:space-y-10 space-y-5 md:w-[60%]'>
                    <p className='font-lobster text-2xl text-[#eb0029]'>Welcome to Brand Shop</p>
                    <div>
                        <h2 id='special-text' className='font-bold  lg:text-7xl text-5xl text-transparent'>GET BEST</h2>
                        <h2 id='special-text' className='font-bold lg:text-7xl text-5xl text-transparent'>QUALITY FOOD</h2>
                        <h2 id='special-text' className='font-bold lg:text-7xl text-5xl text-transparent'>FROM US</h2>
                    </div>
                    <div>
                        <Link to={'register'}>
                            <button className='text-white duration-500 bg-[#eb0029] hover:bg-white hover:text-[#010f1c] rounded-sm md:px-10 px-5 py-3 flex items-center gap-2 text-sm'>
                                <span>Register</span>
                                <BsArrowRight></BsArrowRight>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='md:w-[40%] pt-20 md:pt-0 hidden md:block'>
                    <img className='lg:w-[100%]  mx-auto md:mx-0' src={headIMG} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;