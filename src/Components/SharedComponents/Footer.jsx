import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
    return (
        <div>
            <footer className="h-[300px] max-w-screen-xl mx-auto text-neutral-content  ">
                <div className="flex h-full">
                    <div className="text-center w-full h-full  py-24 bg-[#1F2937] space-y-3">
                        <h1 className="text-3xl w-full">Contact Us</h1>
                        <p className="w-full">
                            123 ABS Street, Uni 21, Bangladesh <br />
                            +88 123456789 <br />
                            Mon - Fri: 08:00 - 22:00 <br />
                            Sat - Sun: 10:00 - 23:00
                        </p>
                    </div>
                    <div className=" text-center w-full h-full  py-24 bg-[#1F2937] space-y-3 min-h-fit">
                        <h6 className="text-2xl w-full">Follow Us</h6>
                        <p className="w-full">
                            Join us on social media
                        </p>
                        <div className="flex items-center justify-center w-full gap-12 text-3xl text-center">
                            <a href=""><FaFacebookF /></a>
                            <a href=""><FaInstagram /></a>
                            <a href=""><FiTwitter /></a>
                        </div>
                    </div>
                </div>

                <footer className="footer-center p-4 bg-[#151515] text-white">
                    <aside>
                        <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                    </aside>
                </footer>
            </footer>
        </div>
    );
};

export default Footer;