import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { data: users = [], refetch, } = useQuery(['users'], async() => {
        const res = await fetch('http://localhost:5000/users/')
        return res.json()


    })
    const handleAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: `${user.name} is an admin now.`,
                        text: 'You successfully make an admin'
                    })
                    refetch()
                }
            })
    }
    return (
        <section className="md:w-11/12 mx-auto h-full py-20">
            <h4 className=" text-3xl font-bold mb-5">Total Users {users.length}</h4>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="text-white">
                            <tr >
                                <th className="bg-accent">#</th>
                                <th className="bg-accent">Name</th>
                                <th className="bg-accent">Email</th>
                                <th className="bg-accent">Role</th>
                                <th className="bg-accent">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    {
                                        user.role === 'admin' ? <td>Admin</td>
                                            : <td><button onClick={() => handleAdmin(user)} className="my-btn"><FaUserShield /></button></td>
                                    }
                                    <td><button className="btn btn-error text-white"><FaTrash /></button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AllUsers;