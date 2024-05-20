// import Slider from "../../Components/Slider";

import Slider from "../../Components/Slider";
import BistroBoss from "./BistroBossSection/BistroBoss";
import CallUs from "./CallUsSection/CallUs";
import Category from "./Category/Category";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import Featured from "./FeaturedSection/Featured";
import PopularMenues from "./PopularMenues/PopularMenues";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenues></PopularMenues>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
        </div>
    );
};

export default Home;