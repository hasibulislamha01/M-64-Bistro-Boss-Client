import ItemCard from "./ItemCard";

const OrderTab = ({recipeCategory}) => {
    return (
        <div className='my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {
                recipeCategory?.map(item =>
                    <ItemCard
                        key={item?._id}
                        recipeItem={item}
                    ></ItemCard>
                )
            }
        </div>
    );
};

export default OrderTab;