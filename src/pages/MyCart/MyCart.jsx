import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useCart from "../../hooks/useCart";

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart)
    const totalPrice = cart.reduce((sum, items) => sum += items.price, 0) || 0;
    console.log(cart)

    const handleDeleteItem = (id) => {
        console.log(id)
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
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: "DELETE",
                    headers: {
                        'content-type': 'application/json'
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <section className="md:w-11/12 mx-auto h-full py-20">
            <SectionTitle
                subHeading={'Wanna Add More?'}
                heading={'My Cart'}
            ></SectionTitle>
            <div className="  text-3xl font-bold flex justify-between uppercase">
                <h3>Total items: {cart.length}</h3>
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                <button className="my-btn">Pay</button>
            </div>

            {/* cart table */}
            <div className="overflow-x-auto w-full mt-10 pb-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((foodItem, index) => <tr
                                key={foodItem._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={foodItem.image} alt="food image" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {foodItem.name}
                                </td>
                                <td>${foodItem.price.toFixed(2)}</td>
                                <th>
                                    <FaTrashAlt onClick={() => handleDeleteItem(foodItem._id)} className="w-5 h-5 text-red-600 cursor-pointer" />
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyCart;