import { NavLink } from "react-router-dom";
import iconTwitter  from "../assets/images/eva_twitter-fill.png"
import iconLinkIn  from "../assets/images/eva_linkedin-fill.png"
import iconFacebook  from "../assets/images/eva_facebook-fill.png"

const Footer = () => {
    return(
        <footer className="grid grid-cols-1 md:grid-cols-4 px-2 leading-5 gap-y-2 mb-2 mt-10 lg:px-[100px]">
            <div className="flex justify-center gap-x-4 ">
                <span className="text-[#181A18] w-[50%] text-right">Company</span>
                <div className="flex flex-col gap-y-2 w-[50%]">
                    <NavLink to={"/home"} className="text-sm">Home</NavLink>
                    <NavLink to={"/about-us"} className="text-sm">About Us</NavLink>
                    <NavLink to={"/our-team"} className="text-sm">Our Team</NavLink>
                </div>
            </div>
            <div className="flex justify-center gap-x-4 ">
                <span className="text-[#181A18] w-[50%] text-right">Guests</span>
                <div className="flex flex-col gap-y-2 w-[50%]">
                    <NavLink to={"/blog"} className="text-sm">Blog</NavLink>
                    <NavLink to={"/faq"} className="text-sm">FAQ</NavLink>
                    <NavLink to={"/career"} className="text-sm">Career</NavLink>
                </div>
            </div>
            <div className="flex justify-center gap-x-4 ">
                <span className="text-[#181A18] w-[50%] text-right">Privacy</span>
                <div className="flex flex-col gap-y-2 w-[50%]">
                    <NavLink to={"/terms-of-service"} className="text-sm">Terms of Service</NavLink>
                    <NavLink to={"/privacy-policy"} className="text-sm">Privacy Policy</NavLink>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
                <span className="text-[#181A18] text-center ">Stay up to date</span>
                <p className="text-center text-sm">Be the first to know about our newest apartments</p>
                <input 
                    type="email"
                    placeholder="Email address"
                    className="bg-[#F2F0F2] p-2 rounded-lg w-full"
                />
                <button
                    className="text-white bg-[#064749] py-2 px-4 rounded-2xl text-sm"
                >
                    Subscribe
                </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2 my-4">
                <p className="text-sm">Contact number: 02033074477</p>
                <div className="flex gap-x-2 justify-between">
                    <img src={iconLinkIn} className="h-6 hover:cursor-pointer"  alt="linkedin-account"/>
                    <img src={iconFacebook} className="h-6 hover:cursor-pointer"   alt="facebook-account"/>
                    <img src={iconTwitter}  className="h-6 hover:cursor-pointer"  alt="twitter-account"/>
                </div>
                <p className="text-sm">© 2021 Flex Living</p>
            </div>
        </footer>
    )
}

export default Footer;