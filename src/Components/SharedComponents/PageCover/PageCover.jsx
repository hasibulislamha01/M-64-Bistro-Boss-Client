import {  Parallax } from 'react-parallax';
// import image from '../../../assets/images'
const PageCover = ({img, heading, subHeading}) => {
    const backgroundStyle = {
        backgroundSize: 'cover',
        border: '1px solid red'
    }
    console.log(img);
    return (
        <div className='mb-24'>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={img}
                bgImageSizes='cover'
                bgImageAlt="the dog"
                strength={-200}
                bgStyle={backgroundStyle}
            >
                <div className="hero min-h-screen">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content  bg-slate-100 bg-opacity-10 w-[70%] h-[60%]">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
                            <p className="mb-5 uppercase">{subHeading}</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};


export default PageCover;