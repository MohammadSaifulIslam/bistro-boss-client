import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import useMenu from "../../hooks/useMenu";

const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDeleteItem = (id) => {
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
                axiosSecure.delete(`/menu/${id}`)
            .then(res => {
              if(res.data.deletedCount){
                Swal.fire(
                    'Deleted!',
                    'Item has been deleted.',
                    'success'
                  )
                  refetch()
              }
            })
            }
          })
   
    }
    return (
        <section className="p-5 md:p-10">
            <SectionTitle heading={'MANAGE ALL ITEMS'} subHeading={'Hurry Up'}></SectionTitle>

            <div className="w-full overflow-x-auto mt-10 pb-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="bg-accent">#</th>
                            <th className="bg-accent">Food Image</th>
                            <th className="bg-accent">Food Name</th>
                            <th className="bg-accent">Price</th>
                            <th className="bg-accent">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map((item, index) => <tr
                                key={item._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="food image" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price.toFixed(2)}</td>
                                <td >
                                    <div className="flex justify-between items-center">
                                        <FaEdit className="w-5 h-5 text-accent cursor-pointer"></FaEdit>
                                        <FaTrashAlt onClick={() => handleDeleteItem(item._id)} className="w-5 h-5 text-red-600 cursor-pointer" />
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageItems;