import { useLoaderData, useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Products from "../Products/Products";

const Category = () => {
    const categories = useLoaderData();
    const { brandName } = useParams();

    const category = categories.find(categoryBrand => categoryBrand.route == brandName);
    const { name, slider1, slider2, slider3 } = category;

    const sliders = [slider1, slider2, slider3]

    return (
        <div>
            <Carousel className='pb-10 max-h-screen max-w-[1400px] mx-auto px-5' autoPlay infiniteLoop showDots={false} showArrows={false} showStatus={false} showThumbs={false} interval={3000}>
                {
                    sliders.map(slider => <div>
                        <img className='max-h-[500px] md:min-h-[400px] min-h-[250px] brightness-50' src={slider} alt="Slider" />
                        <div className="legend h-1/2" style={{ backgroundColor: '#ffffff00' }}>
                            <h1 className="font-semibold lg:text-6xl md:text-6xl text-3xl uppercase text-center">
                                <span className="lg:inline block">Category: </span>
                                <span>{name}</span>
                            </h1>
                        </div>
                    </div>)
                }
            </Carousel>
            <Products brandName={brandName}></Products>
        </div>
    );
};

export default Category;