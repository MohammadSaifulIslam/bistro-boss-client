import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";

const ManageItems = () => {
    const [menu] = useMenu();
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
                                    <FaTrashAlt className="w-5 h-5 text-red-600 cursor-pointer" />
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