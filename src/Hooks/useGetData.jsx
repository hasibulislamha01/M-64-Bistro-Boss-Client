// import Category from "../Pages/HomePage/Category/Category";
import { Link } from "react-router-dom";
import ItemsCollection from "../Components/SharedComponents/MenuItemsCollection/ItemsCollection";
import useLoadMenuData from "./useLoadMenuData";

const DisplaySimilarCollections = ({ askingCategory }) => {
    console.log(askingCategory)
    // const [item, setItem] = useState([])
    const item = useLoadMenuData()

    const query = item?.filter(singleItem => singleItem.category === askingCategory)
    console.log(query)
    return (
        <div>
            <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    query?.map(singleQuery =>
                        <ItemsCollection
                            key={singleQuery._id}
                            item={singleQuery}
                        ></ItemsCollection>
                    )
                }
            </div>
            <Link to={`/shop/${askingCategory}`}>
                <button className="container mx-auto flex justify-center btn bg-[#111827] text-[#BB8506] w-1/5 my-12">Order Now</button>
            </Link>
        </div>
    )
};

export default DisplaySimilarCollections;