import DynamicTitle from "../../Components/DynamicTitle/DynamicTitle";
import ItemBanner from "../../Components/SharedComponents/ItemBanner";
import PageCover from "../../Components/SharedComponents/PageCover/PageCover";
import ThemeHeading from "../../Components/ThemeHeading/ThemeHeading";
import DisplaySimilarCollections from "../../Hooks/useGetData";
import img from '../../assets/images/menu/banner3.jpg'
import dessertBg from "../../assets/images/menu/dessert-bg.jpeg"
import pizzaBg from "../../assets/images/menu/pizza-bg.jpg"
import saladBg from "../../assets/images/menu/salad-bg.jpg"
import soupBg from "../../assets/images/menu/soup-bg.jpg"


const Menu = () => {
    console.log(img)
    const offeredCategory = 'offered'
    const dessertCategory = 'dessert'
    const pizzaCategory = 'pizza'
    const saladCategory = 'salad'
    const soupCategory = 'soup'
    const dessert = {
        description: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
    const pizza = {
        description: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
    const salad = {
        description: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
    const soup = {
        description: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
    return (
        <div>
            <DynamicTitle pageName={'menu'}></DynamicTitle>
            <PageCover
                img={img}
                heading={'Our menu'}
                subHeading={'Would you like to take a dish'}
            ></PageCover>
            <div className="my-32">
                <ThemeHeading
                    subheading={"---Don't miss---"}
                    heading={"TODAY'S OFFER"}
                ></ThemeHeading>

                <DisplaySimilarCollections

                    askingCategory={offeredCategory}
                ></DisplaySimilarCollections>

                <div className="mt-32 mb-16">
                    <ItemBanner
                        bgImage={dessertBg}
                        itemName={'DESSERTS'}
                        itemDescription={dessert?.description}
                    ></ItemBanner>

                    <DisplaySimilarCollections
                        askingCategory={dessertCategory}
                    ></DisplaySimilarCollections>
                </div>


                <div className="mt-32 mb-16">
                    <ItemBanner
                        bgImage={pizzaBg}
                        itemName={'PIZZA'}
                        itemDescription={pizza?.description}
                    ></ItemBanner>

                    <DisplaySimilarCollections
                        askingCategory={pizzaCategory}
                    ></DisplaySimilarCollections>
                </div>


                <div className="mt-32 mb-16">
                    <ItemBanner
                        bgImage={saladBg}
                        itemName={'salad'}
                        itemDescription={salad?.description}
                    ></ItemBanner>

                    <DisplaySimilarCollections
                        askingCategory={saladCategory}
                    ></DisplaySimilarCollections>
                </div>

                <div className="mt-32 mb-16">
                    <ItemBanner
                        bgImage={soupBg}
                        itemName={'soup'}
                        itemDescription={soup?.description}
                    ></ItemBanner>

                    <DisplaySimilarCollections
                        askingCategory={soupCategory}
                    ></DisplaySimilarCollections>
                </div>

            </div>
        </div>
    );
};

export default Menu;