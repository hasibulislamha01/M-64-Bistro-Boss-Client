import ThemeHeading from "../../../Components/ThemeHeading/ThemeHeading";
import featuredImage from '../../../assets/images/home/featured.jpg'
import './featured.css'
const Featured = () => {
    return (
        <div className="my-24 featured-container py-28 px-24">
            <ThemeHeading
                subheading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            ></ThemeHeading>

            <div className="mt-12 w-full flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                <div>
                    <img className="w-[600px]" src={featuredImage} alt="" />
                </div>
                <div>

                    <h3>19 May, 2024</h3>
                    <h1>Where can i get some</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores repellat cumque odio! Deserunt accusamus vel reprehenderit nam quo perspiciatis?
                    </p>
                    <button className="btn btn-outline border-b-2">
                        Read More
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Featured;