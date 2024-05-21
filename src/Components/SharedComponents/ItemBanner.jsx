
const ItemBanner = ({ bgImage, itemName, itemDescription }) => {
    const itemStyles = {
        backgroundImage: `url(${bgImage})`
    }
    return (
        <div style={itemStyles} className="bg-center bg-fixed bg-cover">

            <div className="mx-28 py-24">
                <div className="px-28 py-12 text-center space-y-6 text-base-300 bg-black bg-opacity-50">
                    <h1 className="text-3xl uppercase">{itemName}</h1>
                    <p>
                        {itemDescription}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ItemBanner;