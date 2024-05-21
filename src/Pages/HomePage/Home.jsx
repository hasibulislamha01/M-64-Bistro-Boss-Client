
import Slider from "../../Components/Slider";
import BistroBoss from "./BistroBossSection/BistroBoss";
import CallUs from "./CallUsSection/CallUs";
import Category from "./Category/Category";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import Featured from "./FeaturedSection/Featured";
import PopularMenues from "./PopularMenues/PopularMenues";
import DynamicTitle from "../../Components/DynamicTitle/DynamicTitle";


const Home = () => {
    return (
        <div>
            <DynamicTitle
                pageName={'Home'}
            ></DynamicTitle>
                <Slider></Slider>
            <div className="container mx-auto">
                <Category></Category>
                <BistroBoss></BistroBoss>
                <PopularMenues></PopularMenues>
                <CallUs></CallUs>
                <ChefRecommends></ChefRecommends>
            </div>
            <Featured></Featured>
        </div>
    );
};

export default Home;