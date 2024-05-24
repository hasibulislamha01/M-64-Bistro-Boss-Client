import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ItemCard = ({ recipeItem }) => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    console.log(recipeItem);

    const handleAddToCart = () => {
        if (user) {
            const cartItem = {
                buyerEmail: user?.email,
                recipeId: recipeItem?._id, 
            }
            console.log(cartItem)

            // posting the data to database
            axiosSecure.post('/carts', cartItem)
            .then(response => {
                console.log(response.data)
                toast.success('Item added to cart')
            }) .catch(error => {
                console.error(error.message);
            })
        }
        else {
            Swal.fire({
                title: "You are not logged in :(",
                text: "You won't be able to add items to cart without logging in",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/dashboard')
                }
            });
        }
    }

    return (
        <div className="card bg-[#F3F3F3] shadow-xl rounded-md">
            <Toaster></Toaster>
            <figure className="">
                <img src={recipeItem?.image} alt="recipe image" className="object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{recipeItem?.name}</h2>
                <p>{recipeItem?.recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(recipeItem)} className="btn uppercase bg-[#111827] text-[#BB8506] hover:border-b-[3px] hover:border-[#111827] hover:border-x-transparent hover:border-t-transparent">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;