import { useEffect, useState } from "react";
// import Category from "../Pages/HomePage/Category/Category";
import ItemsCollection from "../Components/SharedComponents/MenuItemsCollection/ItemsCollection";

const DisplaySimilarCollections = ({ askingCategory }) => {
    console.log(askingCategory)
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setItem(data)
            })
    }, [])

    const query = item?.filter(singleItem => singleItem.category ==  askingCategory )
    console.log(query)
    return (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                query?.map(singleQuery =>
                    <ItemsCollection
                        key={singleQuery._id}
                        item={singleQuery}
                    ></ItemsCollection>
                )
            }
        </div>
    )
};

export default DisplaySimilarCollections;