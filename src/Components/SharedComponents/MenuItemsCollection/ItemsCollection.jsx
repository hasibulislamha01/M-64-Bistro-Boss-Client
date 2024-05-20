
const ItemsCollection = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="flex items-center justify-center gap-4">
            <div className="w-28 h-28 relative">
                <img
                    style={{ borderRadius: "0px 200px 200px 200px" }}
                    className="w-full h-3/5 object-cover absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]"
                    src={image} alt="" />
            </div>
            <div>
                <h2 className="uppercase">{name}-----------</h2>
                <p>{recipe}</p>
            </div>
            <div>
                {price}
            </div>
        </div>
    );
};

export default ItemsCollection;