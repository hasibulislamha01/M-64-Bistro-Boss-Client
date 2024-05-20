import SwiperCarousel from "../../../Components/Swiper";
import ThemeHeading from "../../../Components/ThemeHeading/ThemeHeading";

const Category = () => {
    return (
        <div className="space-y-12 mt-20">
            <ThemeHeading 
                subheading={'---From 11:00am to 10:00pm---'}
                heading={'ORDER ONLINE'}
            ></ThemeHeading>
            <div>
                <SwiperCarousel></SwiperCarousel>
            </div>
        </div>
    );
};

export default Category;