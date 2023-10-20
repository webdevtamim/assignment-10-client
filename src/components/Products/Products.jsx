import { useContext } from "react";
import { AssetContext } from "../../App";
import { Link } from "react-router-dom";

const Products = (brandName) => {
    const brand = brandName.brandName;

    const products = useContext(AssetContext);

    const product = products.filter(data => data.selectedBrand === brand);
    console.log(product);

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 max-w-[1400px] gap-5 mx-auto px-5 pt-20 pb-40">
            {
                products.map(product => <div className="card shadow-2xl bg-white text-[#010F1C]">
                    <figure className="pt-10"><img src={product.photo} alt="" /></figure>
                    <div className="card-body space-y-1">
                        <div className="flex justify-between">
                            <h2 className="card-title">{product.name}</h2>
                            <span className="bg-[#010F1C] text-white rounded px-2">{product.selectedBrand}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">{product.types}</span>
                            <span>${product.price}</span>
                        </div>
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <input
                                    key={star}
                                    type="radio"
                                    name="rating-1"
                                    className="bg-[#EB0029] mask mask-star"
                                    value={star}
                                    checked={star === product.rating}
                                />
                            ))}
                        </div>
                        <div className="card-actions justify-between">
                            <Link to={product._id}><button className="bg-[#EB0029] rounded-md text-sm text-white py-3 px-4">Details</button></Link>
                            <Link to={product.name}><button className="bg-[#EB0029] rounded-md text-sm text-white py-3 px-4">Update</button></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Products;