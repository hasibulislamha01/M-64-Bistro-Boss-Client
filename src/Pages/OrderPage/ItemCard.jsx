
const ItemCard = ({ recipeItem }) => {
    console.log(recipeItem);
    return (
        <div className="card bg-[#F3F3F3] shadow-xl rounded-md">
            <figure className="">
                <img src={recipeItem?.image} alt="recipe image" className="object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{recipeItem?.name}</h2>
                <p>{recipeItem?.recipe}</p>
                <div className="card-actions">
                    <button className="btn uppercase bg-[#111827] text-[#BB8506] hover:border-b-[3px] hover:border-[#111827] hover:border-x-transparent hover:border-t-transparent">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;