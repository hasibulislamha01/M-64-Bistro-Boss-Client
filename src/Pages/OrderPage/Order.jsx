import PageCover from "../../Components/SharedComponents/PageCover/PageCover";
import orderBanner from "../../assets/images/shop/banner2.jpg"
import ReactTab from "./ReactTab";

const Order = () => {
    return (
        <div>
            <PageCover
                img={orderBanner}
                heading={'OUR SHOP'}
                subHeading={'Would you like to try a dish?'}>
            </PageCover>

            <ReactTab></ReactTab>

        </div>
    );
};

export default Order;