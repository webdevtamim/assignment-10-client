import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const MyCart = () => {
    const loaderProducts = useLoaderData()
    const [products, setProducts] = useState(loaderProducts);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                fetch(`http://localhost:5000/cart/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingCart = products.filter(product => product._id !== id);
                            setProducts(remainingCart)
                        }
                    })
            }
        })
    }

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 max-w-[1400px] gap-5 mx-auto px-5 pt-20 pb-40">
            {
                products.map(product => <div key={product._id} className="card shadow-2xl bg-white text-[#010F1C] items-end grid rounded-lg">
                    <figure className="pt-10"><img src={product.productPhoto} alt="" /></figure>
                    <div className="card-body space-y-1">
                        <div className="flex justify-center">
                            <h2 className="card-title">{product.productName}</h2>
                        </div>
                        <div className="flex justify-center pt-1">
                            <button onClick={() => handleDelete(product._id)} className="btn text-white bg-[#EB0029] hover:bg-[#EB0029]">Remove</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyCart;