
const ThemeHeading = ({subheading, heading}) => {
    return (
        <div  className="text-center w-[30%] mx-auto space-y-3">
            <h5 className="text-[#D99904]">{subheading}</h5>
            <h1 className="uppercase text-3xl border-y-2 py-2">{heading}</h1>
        </div>
    );
};

export default ThemeHeading;