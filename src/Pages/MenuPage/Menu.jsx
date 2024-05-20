import DynamicTitle from "../../Components/DynamicTitle/DynamicTitle";
import PageCover from "../../Components/SharedComponents/PageCover/PageCover";
import ThemeHeading from "../../Components/ThemeHeading/ThemeHeading";
import DisplaySimilarCollections from "../../Hooks/useGetData";
import img from '../../assets/images/menu/banner3.jpg'

const Menu = () => {
    console.log(img)
    const filter1 = 'offered'
    return (
        <div>
            <DynamicTitle pageName={'menu'}></DynamicTitle>
            <PageCover
                img={img}
                heading={'Our menu'}
                subHeading={'Would you like to take a dish'}
            ></PageCover>
            <div className="container mx-auto my-32">
                <ThemeHeading
                    subheading={"---Don't miss---"}
                    heading={"TODAY'S OFFER"}
                ></ThemeHeading>

                <DisplaySimilarCollections

                    askingCategory={filter1}
                ></DisplaySimilarCollections>

            </div>
        </div>
    );
};

export default Menu;