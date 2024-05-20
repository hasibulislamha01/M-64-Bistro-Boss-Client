import { Helmet } from "react-helmet-async";

const DynamicTitle = ({pageName}) => {
    return (
        <Helmet>
            BistroBoss | {pageName}
        </Helmet>
    );
};

export default DynamicTitle;