import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CateSection = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);

    return (
        <div className="max-w-[1000px] mx-auto">
            <div className="text-center pt-24 pb-16">
                <p className='font-lobster text-2xl text-[#eb0029]'>Best Categories Menu</p>
                <h3 className='text-4xl font-bold'>Our Best Categories Menus</h3>
            </div>
            <div className="grid lg:grid-cols-6 grid-cols-3 lg:max-w-full md:max-w-[500px] mx-auto gap-y-5">
                {
                    categories.map(category => <div
                        className="grid justify-center gap-4 px-8 border border-dashed border-x-[#010f1c] border-transparent content-end"
                    >
                        <img className="w-full mx-auto" src={category.photo} alt="" />
                        <Link to={`category/${category.route}`}>
                            <h6 className="font-semibold text-center hover:text-[#eb0029] duration-500">{category.name}</h6>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CateSection;