import { useContext, useState } from "react";
import Swal from 'sweetalert2'

const AddProduct = () => {
    const [selectedBrand, setSelectedBrand] = useState('');
    const [rating, setRating] = useState(0);

    const handleSelectChange = (event) => {
        setSelectedBrand(event.target.value);
    };

    const handleRatingChange = (event) => {
        const selectedRating = parseInt(event.target.value, 10);
        setRating(selectedRating);
    };

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const types = form.types.value;
        const price = form.price.value;
        const description = form.description.value;

        const prodObj = { photo, name, types, price, selectedBrand, rating, description }

        console.log(prodObj);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(prodObj)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div>
            <div className="my-20 p-10 border lg:max-w-[80%] mx-auto shadow-lg">
                <form onSubmit={handleAddProduct}>
                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <label className="text-xs font-semibold tracking-widest" htmlFor="photo">Product Photo</label><br />
                            <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="url" name="photo" id="photo" placeholder="URL" required />
                        </div>
                        <div>
                            <label className="text-xs font-semibold tracking-widest" htmlFor="name">Product Name</label><br />
                            <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="text" name="name" id="name" placeholder="Product Name" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <label className="text-xs font-semibold tracking-widest" htmlFor="types">Product Type</label><br />
                            <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="text" name="types" id="types" placeholder="Product Type" required />
                        </div>
                        <div>
                            <label className="text-xs font-semibold tracking-widest" htmlFor="price">Product Price</label><br />
                            <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type="text" name="price" id="price" placeholder="Product Price" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10">
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
                            <div className="rating rating-lg space-x-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <input
                                        key={star}
                                        type="radio"
                                        name="rating-1"
                                        className="bg-[#EB0029] mask mask-star"
                                        value={star}
                                        checked={star === rating}
                                        onChange={handleRatingChange}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <label className="text-xs font-semibold tracking-widest" htmlFor="description">Short Description</label><br />
                    <textarea className="mt-2 mb-10 w-full bg-white rounded border outline-none font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" id="description" placeholder="Short Description" rows="3" required></textarea>

                    <input className="border w-full bg-[#EB0029] font-semibold tracking-widest text-xs py-3 text-white rounded-lg hover:bg-white hover:text-[#091022] active:scale-x-90 duration-100" type="submit" value="SEND" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;