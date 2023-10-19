const Footer = () => {

    const handlesubscribe = e => {
        e.preventDefault();
        toast("Thanks for subscribe");
    }

    return (
        <div>
            <div className="bg-foot-bg bg-no-repeat bg-cover pt-20 pb-16">
                <div className="max-w-[1400px] m-auto">
                    <div className="flex justify-center items-center">
                        <span className="text-[#eb0029] lg:text-5xl text-4xl font-semibold pl-3 pr-2">BRAND </span>
                        <span className="text-white lg:text-5xl text-4xl font-semibold"> SHOP</span>
                    </div>
                    <div className="py-5">
                        <p className="text-white max-w-[370px] mx-auto text-center">Riverside Building, County Hall, Bishop’s, London SE1 7PB, United Kingdom</p>
                    </div>
                    <div className="md:max-w-lg sm:max-w-md max-w-sm mx-auto">
                        <form onSubmit={handlesubscribe} className="flex justify-center items-center">
                            <input className="h-12 rounded-l-md outline-none bg-white text-[#373a3c] px-4 py-2 w-full" type="email" name="" placeholder="Email" required />
                            <input className="bg-[#eb0029] font-medium h-12 rounded-r-md py-2 sm:px-10 pr-7 pl-5 text-white tracking-widest hover:text-[#010f1c] cursor-pointer" type="submit" value="SUBSCRIBE" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-[#eb0029] pt-4 pb-4">
                <p className="text-xs font-medium text-white font-oswald text-center tracking-widest">COPYRIGHT VICTORY.GG ALL RIGHT RESERVED</p>
            </div>
        </div>
    );
};

export default Footer;