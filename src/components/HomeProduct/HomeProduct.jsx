import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="text-center pt-24">
                <h3 className='text-4xl font-bold'>Our Products</h3>
            </div>
            <div className="grid md:grid-cols-3 max-w-[400px] md:max-w-[1000px] gap-5 lg:gap-8 mx-auto px-5 pt-10 pb-40">
                {
                    products.slice(0, 3).map(product => <Link 
                        to={product.id}
                        className="card rounded-lg border hover:border-[#EB0029] shadow-lg bg-white text-[#010F1C]"
                    >
                        <figure className="pt-10"><img src={product.photo} alt="" /></figure>
                        <div className="card-body space-y-1">
                            <h2 className="card-title">{product.name}</h2>
                            <span>${product.price}</span>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default HomeProduct;