import { useEffect, useState } from "react";
import ThemeHeading from "../../../Components/ThemeHeading/ThemeHeading";
import ItemsCollection from "../../../Components/SharedComponents/MenuItemsCollection/ItemsCollection";


const PopularMenues = () => {
    const [popularItem, setPopularItem] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popular = data?.filter(item => item.category === 'popular')
                setPopularItem(popular)
            })
    }, [])
    console.log(popularItem);
    return (
        <section className="my-24">
            <div className="mb-6">
                <ThemeHeading
                    subheading={'---Check it out---'}
                    heading={'FROM OUR MENU'}

                ></ThemeHeading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {
                    popularItem?.map(item =>
                        <ItemsCollection
                            key={item?._id}
                            item={item}
                        ></ItemsCollection>)
                }
            </div>
        </section>
    );
};

export default PopularMenues;