import ThemeHeading from "../../../Components/ThemeHeading/ThemeHeading";
import useCartData from "../../../Hooks/useCartData";

import useLoadMenuData from "../../../Hooks/useLoadMenuData";
import Table from "../table/Table";

const MyCarts = () => {
    const menuItems = useLoadMenuData()
    console.log(menuItems)
    const [cartItems, refetch] = useCartData()
    console.log(cartItems)

    const cartedMenues = cartItems?.map(cartItem => menuItems.find(menuItem => cartItem?.recipeId === menuItem?._id))
    console.log(cartedMenues)

    const totalPrice = cartedMenues?.reduce((total, item)=> total + item?.price, 0)

    return (
        <div>
            <div className="">
                <ThemeHeading
                    heading={'Wanna add more'}
                    subheading={'---My Cart---'}
                ></ThemeHeading>
            </div>
            <div className="my-12 flex justify-between text-3xl px-12">
                <h3>Total Orders: {cartItems.length}</h3>
                <h3>Total Price: {totalPrice}</h3>
                <button className="btn bg-[#D1A054] uppercase">Pay</button>
            </div>
            {/* table starts here */}
            <Table items={cartedMenues} refetch={refetch}></Table>
        </div>
    );
};

export default MyCarts;