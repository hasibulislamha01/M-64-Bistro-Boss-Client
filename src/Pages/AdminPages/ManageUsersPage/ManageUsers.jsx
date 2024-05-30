import ThemeHeading from "../../../Components/ThemeHeading/ThemeHeading";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaRegTrashCan, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
import { GrUserAdmin } from "react-icons/gr";
import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    // const [users, setUsers] = useState([])
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    // console.log(users)

    const handleDelete = () => {
        console.log('deleting')
    }

    const handleMakeAdmin = (userId) => {
        console.log('making admin', userId)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${userId}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount) {
                            refetch()
                            Swal.fire({
                                title: "Success",
                                text: "the user is an admin now",
                                icon: "success",
                                showCancelButton: false,
                            })
                        }
                    }).catch(error => {
                        console.error(error.message)
                    })

            }
        });

    }
    return (
        <div>
            <ThemeHeading
                heading={'MANAGE ALL USERS'}
                subheading={'---How many??---'}
            ></ThemeHeading>

            <div className="my-12">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Sl no</th>
                                <th>User Image</th>
                                <th>User Name</th>
                                <th>User email</th>
                                <th>Role</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users?.map((item, index) =>
                                    <tr key={item?._id}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item?.photo} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item?.userName}
                                        </td>
                                        <td>
                                            {item?.email}
                                        </td>
                                        <td>
                                            <button onClick={() => handleMakeAdmin(item?._id)} className="btn btn-outline bg-white text-[#B91C1C] text-2xl"> {item?.role === 'admin' ? <GrUserAdmin /> : <FaUsers></FaUsers>} </button>
                                        </td>
                                        <td>
                                            <span onClick={() => handleDelete(item?._id)} className="btn align-middle bg-[#B91C1C] text-white font-bold"><FaRegTrashCan /></span>

                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;