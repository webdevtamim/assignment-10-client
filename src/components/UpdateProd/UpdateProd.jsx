import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateProd = () => {
    const updateProduct = useLoaderData();
    const { _id, photo, name, types, price, selectedBrand, rating, description } = updateProduct;

    const [getselectedBrand, setSelectedBrand] = useState('');
    const [getrating, setRating] = useState(0);

    const handleSelectChange = (event) => {
        setSelectedBrand(event.target.value);
    };

    const handleRatingChange = (event) => {
        const selectedRating = parseInt(event.target.value, 10);
        setRating(selectedRating);
    };

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const types = form.types.value;
        const price = form.price.value;
        const description = form.description.value;

        const updatedprodObj = { photo, name, types, price, getselectedBrand, getrating, description }

        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedprodObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="px-5">
            <div className="pt-20 pb-2 mb-16 lg:max-w-[80%] mx-auto space-x-5">
                <span className="text-[#E2012D] md:text-5xl text-4xl font-semibold">BRAND SHOP</span>
                <span className="md:text-5xl text-4xl font-semibold">Update Product</span>
            </div>
            <div className="mb-20 p-10 border lg:max-w-[80%] mx-auto shadow-lg">
                <form onSubmit={handleUpdateProduct}>
                    <div className="grid md:grid-cols-2 md:gap-10">
                        <div>
                            <label className="text-xs font-semibold tracking-widest" htmlFor="photo">Product Photo</label><br />
                            <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="url" name="photo" defaultValue={photo} id="photo" placeholder="URL" required />
                        </div>
                        <div>
                            <label className="text-xs font-semibold tracking-widest" htmlFor="name">Product Name</label><br />
                            <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="text" name="name" defaultValue={name} id="name" placeholder="Product Name" required />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-10">
                        <div>
                            <label className="text-xs font-semibold tracking-widest" htmlFor="types">Product Type</label><br />
                            <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="text" name="types" defaultValue={types} id="types" placeholder="Product Type" required />
                        </div>
                        <div>
                            <label className="text-xs font-semibold tracking-widest" htmlFor="price">Product Price</label><br />
                            <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="text" name="price" defaultValue={price} id="price" placeholder="Product Price" required />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-10 mb-5 md:mb-0">
                        <div>
                            <label className="text-xs font-semibold tracking-widest">Brand Name</label>
                            <select
                                className="mt-2 mb-6 bg-white rounded select h-[10px] select-bordered outline-none font-semibold border-[#7A7A7A] text -tracking-widest text-xs px-4 w-full"
                                name="brand"
                                value={selectedBrand}
                                onChange={handleSelectChange}
                                required
                            >
                                <option>Coca-Cola</option>
                                <option>McDonald's</option>
                                <option>Starbucks</option>
                                <option>PepsiCo</option>
                                <option>Nestlé</option>
                                <option>Kellogg's</option>
                            </select>
                        </div>
                        <div className="flex items-center">
                            <div className="rating md:rating-lg rating-md space-x-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <input
                                        key={star}
                                        type="radio"
                                        name="rating-1"
                                        className="bg-[#EB0029] mask mask-star"
                                        value={star}
                                        checked={getrating ? (star === getrating) : (star === rating)}
                                        onChange={handleRatingChange}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <label className="text-xs font-semibold tracking-widest" htmlFor="description">Short Description</label><br />
                    <textarea className="mt-2 mb-10 w-full bg-white rounded border outline-none font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" id="description" placeholder="Short Description" rows="3" defaultValue={description}></textarea>

                    <input className="border w-full bg-[#EB0029] font-semibold tracking-widest text-xs py-3 text-white rounded-lg hover:bg-white hover:text-[#091022] active:scale-x-90 duration-100" type="submit" value="UPDATE" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProd;