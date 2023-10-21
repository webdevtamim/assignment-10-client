import Banner from "../Banner/Banner";
import CateSection from "../CateSection/CateSection";
import HomeProduct from "../HomeProduct/HomeProduct";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <CateSection></CateSection>
            <div className="bg-food-section bg-no-repeat bg-cover mt-28">
                <div className="max-w-[1000px] mx-auto py-28 space-y-5 px-5">
                    <p className='font-lobster text-2xl text-[#eb0029]'>THE BEST FOOD SHOP</p>
                    <div>
                        <h2 id='special-text' className='font-bold  lg:text-7xl text-5xl text-transparent'>DELICIOUS</h2>
                        <h2 id='special-text' className='font-bold lg:text-7xl text-5xl text-transparent'>FOOD</h2>
                    </div>
                </div>
            </div>
            <HomeProduct></HomeProduct>
        </div>
    );
};

export default Home;