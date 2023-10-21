import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const Details = () => {
    const products = useLoaderData();
    const { id } = useParams();

    const detailsProduct = products.filter(data => data._id === id);

    const handleAddToCart = productInfo => {
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Add to cart successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

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
                            <button onClick={() => handleAddToCart({ productName: product.name, productPhoto: product.photo })} className="bg-[#EB0029] rounded-md text-sm text-white py-3 px-4">Add to Cart</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Details;