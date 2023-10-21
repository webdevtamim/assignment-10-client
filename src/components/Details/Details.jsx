import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const products = useLoaderData();
    const { id } = useParams();

    const detailsProduct = products.filter(data => data._id === id);

    return (
        <div className="max-w-[800px] mx-auto px-5 pt-20 pb-40">
            {
                detailsProduct.map(product => <div className="card">
                    <figure className="py-10"><img src={product.photo} alt="" /></figure>
                    <div className="card-body space-y-2">
                        <h2 className="text-5xl">{product.name}</h2>
                        <p>{product.description}</p>
                        <p className="text-2xl">Brand: {product.selectedBrand}</p>
                        <p className="text-2xl">Type: {product.types}</p>
                        <p className="text-lg font-semibold">Price: ${product.price}</p>
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
                            <button className="bg-[#EB0029] rounded-md text-sm text-white py-3 px-4">Add to Cart</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Details;