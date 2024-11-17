// import image1 from "../../assets/images/background-1.png"
// import image2 from "../../assets/images/image-2.png"
import image3 from "../../assets/images/image-3.png"
// import image4 from "../../assets/images/image-4.png"
import image5 from "../../assets/images/image-5.png"
import iconCalender from "../../assets/images/eva_calendar-fill.png"
import iconSofa from "../../assets/images/mdi_sofa.png"
import iconWifi from "../../assets/images/eva_wifi-fill.png"
import iconMessage from "../../assets/images/eva_message-circle-fill.png"
import place1 from "../../assets/images/place-1.png"
import place2 from "../../assets/images/place-2.png"
import place3 from "../../assets/images/place-3.png"
import place4 from "../../assets/images/place-4.png"
import place5 from "../../assets/images/place-5.png"
import place6 from "../../assets/images/place-6.png"
import iconSearch from "../../assets/images/eva_search-outline.png"
import iconPeople from "../../assets/images/eva_person-fill.png"
import iconFile from "../../assets/images/eva_file-text-fill.png"
import people1 from "../../assets/images/people1.png"
import people2 from "../../assets/images/people2.png"
import people3 from "../../assets/images/people3.png"
import arrowLeft from "../../assets/images/eva_arrow-left-fill.png"
import arrowRight from "../../assets/images/eva_arrow-right-fill.png"
import unsplash from "../../assets/images/unsplash__r80LCluvVM.png"
import iconClock from "../../assets/images/eva_clock-fill.png"
import unsplash6 from "../../assets/images/unsplash6.png"
import unsplash5 from "../../assets/images/unsplash5.png"
import unsplash4 from "../../assets/images/unsplash4.png"
import unsplash2 from "../../assets/images/unsplash2.png"
import arrowLeftLink from "../../assets/images/arrowLeft.png"
import { NavLink } from "react-router-dom"

const Home = () => {
    return(
        <div className="grid grid-cols-1 gap-y-10 md:gap-y-16">
            <div className="relative overflow-hidden bg-center bg-cover bg-background3 p-2 lg:px-[100px]">
                <div className="bg-white flex justify-start flex-col gap-1 mt-6 p-2 lg:p-4  rounded-tr-3xl rounded-br-3xl w-40">
                    <span className="font-semibold text-md lg:text-2xl">We rent your property</span>
                    <p className="text-[10px] md:text-sm max-w-40 lg:max-w-[400px]">Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis proin fermentum, consectetur cursus. </p>
                </div>
            </div>
            <div className="grid grid-cols-1 px-2 md:grid-cols-2 lg:px-[100px]">
                <div className="grid grid-cols-2">
                    <img  src={image3} alt="image-1" className="object-cover rounded-tl-3xl"/>
                    <img  src={image5} alt="image-2" className="object-cover rounded-tr-3xl md:rounded-none"/>
                    <img  src={image3} alt="image-3" className="object-cover md:rounded-bl-3xl"/>
                    <img  src={image5} alt="image-5" className="object-cover"/>
                </div>
                <div className="bg-[#F2F0F2] flex flex-col justify-center items-center p-4 gap-y-1 rounded-b-3xl md:rounded-bl-none md:rounded-br-3xl md:rounded-tr-3xl">
                    <h2 className="font-semibold md:text-lg lg:text-2xl">The future is flexible</h2>
                    <p className="text-sm text-center max-w-80">We believe in a world where finding a home is just a click away. Whether you’re selling your home, travelling for work or moving to a new city.  Just bring your bags, and we’ll handle the rest.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 px-2 gap-y-3 lg:px-[100px]">
                <div className="flex flex-col justify-center items-center md:px-20">
                    <h1 className="font-semibold text-center md:text-lg">Id aliquam molestie nunc quis turpis imperdiet quis</h1>
                    <p className="text-sm text-center">Euismod condimentum tempus quis nibh. Accumsan imperdiet non vulputate venenatis, lorem amet, purus amet, sagittis. Cum orci quam enim adipiscing interdum purus.</p>
                </div>
                <div className="grid grid-cols-1 gap-y-3 md:grid-cols-4 gap-x-3">
                    <div className="bg-[#E2F1E8] rounded-xl py-4 px-6">
                        <img src={iconCalender} alt="calender-icon" className="my-2 h-8"/>
                        <h5 className="font-semibold text-lg">Flexible living</h5>
                        <p className="text-sm">Stay as Long or as little as you need with month-to-month contracts</p>
                    </div>
                    <div className="bg-[#E2F1E8] rounded-xl py-4 px-6">
                        <img src={iconSofa} alt="calender-icon" className="my-2 h-8"/>
                        <h5 className="font-semibold text-lg">Move-in ready</h5>
                        <p className="text-sm">Ready to move in with everything you need</p>
                    </div>
                    <div className="bg-[#E2F1E8] rounded-xl py-4 px-6">
                        <img src={iconWifi} alt="calender-icon" className="my-2 h-8"/>
                        <h5 className="font-semibold text-lg">Flexible living</h5>
                        <p className="text-sm">Stay as Long or as little as you need with month-to-month contracts</p>
                    </div>
                    <div className="bg-[#E2F1E8] rounded-xl py-4 px-6">
                        <img src={iconMessage} alt="calender-icon" className="my-2 h-8"/>
                        <h5 className="font-semibold text-lg">Flexible living</h5>
                        <p className="text-sm">Stay as Long or as little as you need with month-to-month contracts</p>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 px-2 gap-y-3 lg:px-[100px]">
                <h2 className="font-semibold text-center md:text-2xl">Choose your location</h2>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
                    <div className="flex flex-col gap-y-1">
                        <h6 className="font-medium text-center">Shoreditch</h6>
                        <img src={place1} alt="place-1" className="object-cover h-48 rounded-xl"/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <h6 className="font-medium text-center">City of London</h6>
                        <img src={place2} alt="place-1" className="object-cover h-48 rounded-xl"/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <h6 className="font-medium text-center">The West End</h6>
                        <img src={place3} alt="place-1" className="object-cover h-48 rounded-xl"/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <h6 className="font-medium text-center">Kensington</h6>
                        <img src={place4} alt="place-1" className="object-cover h-48 rounded-xl"/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <h6 className="font-medium text-center">Kingston-Upon-Thames</h6>
                        <img src={place5} alt="place-1" className="object-cover h-48 rounded-xl"/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <h6 className="font-medium text-center">Hammersmith</h6>
                        <img src={place6} alt="place-1" className="object-cover h-48 rounded-xl"/>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="text-white bg-[#064749] py-2 px-4 rounded-2xl text-sm"
                        >
                            View all spaces
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-center w-full bg-cover p-12  bg-hero flex flex-col gap-y-3 lg:px-[100px]">
                <h5 className="font-semibold text-white">Bespoke spaces</h5>
                <p className="text-sm text-white">Expertly designed to create extraordinary spaces with the flexible renter in mind</p>
                <div className="my-2">
                    <button
                            className="text-white bg-[#064749] py-2 px-4 rounded-2xl text-sm"
                    >
                        Start booking
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 px-2 gap-y-3 lg:px-[100px]">
                <div className="flex flex-col gap-y-1 md:px-20">
                    <h2 className="font-semibold text-center md:text-2xl">Corporate Partnerships</h2>
                    <p className="text-sm text-center">We work with 100+  companies to meet accommodation needs in London. Offer a dedicated booking manager that can help to find properties for your needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-[#E2F1E8] rounded-xl py-4 px-6">
                        <img src={iconSearch} alt="calender-icon" className="my-2 h-8"/>
                        <h5 className="font-semibold text-lg">Booking manager </h5>
                        <p className="text-sm">We do the searching for you</p>
                    </div>
                    <div className="bg-[#E2F1E8] rounded-xl py-4 px-6">
                        <img src={iconPeople} alt="calender-icon" className="my-2 h-8"/>
                        <h5 className="font-semibold text-lg">Account manager </h5>
                        <p className="text-sm">Preferred partner rates</p>
                    </div>
                    <div className="bg-[#E2F1E8] rounded-xl py-4 px-6">
                        <img src={iconFile} alt="calender-icon" className="my-2 h-8"/>
                        <h5 className="font-semibold text-lg">Flexible terms</h5>
                        <p className="text-sm">Extend on short notice</p>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 px-2 gap-y-3 lg:px-[100px]">
                <div className="flex flex-col gap-y-1">
                    <h2 className="font-semibold text-center md:text-2xl">What our partners think</h2>
                    <p className="text-sm text-center">See what our partners say about us</p>
                </div>
               <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    <div className="bg-[#F2F0F2] p-5 rounded-lg flex flex-col gap-y-2">
                        <div className="flex gap-x-2 items-center">
                            <img src={people1} alt="people 1" />
                            <div className="flex flex-col">
                                <h6 className="font-semibold">Annie</h6>
                                <span>Landlord in SE1</span>
                            </div>
                        </div>
                        <p className="text-sm text-start"> 
                            Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam sagittis fermentum fames habitasse. Vulputate volutpat sit est, elementum. Accumsan nunc nunc arcu faucibus aliquam.
                        </p>
                    </div>
                    <div className="bg-[#F2F0F2] p-5 rounded-lg flex flex-col gap-y-2">
                        <div className="flex gap-x-2 items-center">
                            <img src={people2} alt="people 1" />
                            <div className="flex flex-col">
                                <h6 className="font-semibold">Laura</h6>
                                <span>Landlord in SE1</span>
                            </div>
                        </div>
                        <p className="text-sm text-start"> 
                        Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam sagittis fermentum fames habitasse. Vulputate volutpat sit est, elementum. Accumsan nunc nunc arcu faucibus aliquam.
                        </p>
                    </div>
                    <div className="bg-[#F2F0F2] p-5 rounded-lg flex flex-col gap-y-2">
                        <div className="flex gap-x-2 items-center">
                            <img src={people3} alt="people 1" />
                            <div className="flex flex-col">
                                <h6 className="font-semibold">Gabriel</h6>
                                <span>Landlord in SE1</span>
                            </div>
                        </div>
                        <p className="text-sm text-start"> 
                        Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam sagittis fermentum fames habitasse. Vulputate volutpat sit est, elementum. Accumsan nunc nunc arcu faucibus aliquam.
                        </p>
                    </div>
               </div>
                <div className="flex justify-center items-center gap-x-2 my-2">
                    <div className="p-2 bg-[#064749] rounded-lg hover:cursor-pointer">
                        <img src={arrowLeft} alt="image1"/>
                    </div>
                    <div className="p-2 bg-[#064749] rounded-lg  hover:cursor-pointer">
                        <img src={arrowRight} alt="image2"/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 px-2 gap-y-3 lg:px-[100px]">
                <h1 className="font-semibold text-center text-2xl">Read our blog</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="flex flex-col">
                        <img src={unsplash} alt="image3"/>
                        <div className="flex flex-col gap-y-2 bg-[#F2F0F2] p-4">
                            <span className="font-semibold text-center text-2xl">Turpis elit in dictum eget eget</span>
                            <p className="text-sm text-center">Neque faucibus pharetra condimentum tincidunt commodo velit.</p>
                            <div className="flex justify-center items-center gap-x-2">
                                <img src={iconClock} alt="image4"/>
                                <span className="font-semibold">1 min read</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={unsplash2} alt="image5"/>
                        <div className="flex flex-col gap-y-2 bg-[#F2F0F2] p-4">
                            <span className="font-semibold text-center text-2xl">Turpis elit in dictum eget eget</span>
                            <p className="text-sm text-center">Convallis eu vel fames feugiat et venenatis nulla ipsum.</p>
                            <div className="flex justify-center items-center gap-x-2">
                                <img src={iconClock} alt="image6"/>
                                <span className="font-semibold">1 min read</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={unsplash4} alt="image7"/>
                        <div className="flex flex-col gap-y-2 bg-[#F2F0F2] p-4">
                            <span className="font-semibold text-center text-2xl">Faucibus egestas ut sit purus ultricies at eu</span>
                            <p className="text-sm text-center">Viverra tellus risus lacus commodo urna fringilla cursus nulla amet.</p>
                            <div className="flex justify-center items-center gap-x-2">
                                <img src={iconClock} alt="image8"/>
                                <span className="font-semibold">3 min read</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={unsplash5} alt="image9"/>
                        <div className="flex flex-col gap-y-2 bg-[#F2F0F2] p-4">
                            <span className="font-semibold text-center text-2xl">Feugiat gravida sed sit lacus sagittis</span>
                            <p className="text-sm text-center">Pellentesque ultrices hendrerit lacus lectus..</p>
                            <div className="flex justify-center items-center gap-x-2">
                                <img src={iconClock} alt="image10"/>
                                <span className="font-semibold">3 min read</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={unsplash6} alt="image11"/>
                        <div className="flex flex-col gap-y-2 bg-[#F2F0F2] p-4">
                            <span className="font-semibold text-center text-2xl">Feugiat gravida sed sit lacus sagittis</span>
                            <p className="text-sm text-center">Dolor elit viverra facilisis aliquam, aliquet arcu nec.</p>
                            <div className="flex justify-center items-center gap-x-2">
                                <img src={iconClock} alt="image12"/>
                                <span className="font-semibold">3 min read</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="text-white bg-[#064749] py-2 px-4 rounded-2xl text-sm"
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 px-2 gap-y-3 lg:px-[100px]">
                <h1 className="font-semibold text-center text-2xl">Useful links</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
                    <div className="flex justify-between items-center">
                        <NavLink to={"/"} className="text-[#064749] underline font-semibold">West London Apartments</NavLink>
                        <img src={arrowLeftLink} className="h-3" alt="image3"/>
                    </div>
                    <div className="flex justify-between items-center">
                        <NavLink to={"/"} className="text-[#064749] underline font-semibold">Riverside Apartments</NavLink>
                        <img src={arrowLeftLink} className="h-3" alt="image4"/>
                    </div>
                    <div className="flex justify-between items-center">
                        <NavLink to={"/"} className="text-[#064749] underline font-semibold">Apartments in Finance Sector City of London</NavLink>
                        <img src={arrowLeftLink} className="h-3" alt="image5"/>
                    </div>
                    <div className="flex justify-between items-center">
                        <NavLink to={"/"} className="text-[#064749] underline font-semibold">Apartments in Soho, Fitrovia</NavLink>
                        <img src={arrowLeftLink} className="h-3" alt="image6"/>
                    </div>
                    <div className="flex justify-between items-center">
                        <NavLink to={"/"} className="text-[#064749] underline font-semibold">East London Aaprtments</NavLink>
                        <img src={arrowLeftLink} className="h-3" alt="image7"/>
                    </div>
                    <div className="flex justify-between items-center">
                        <NavLink to={"/"} className="text-[#064749] underline font-semibold">Suitable for Families or Groups</NavLink>
                        <img src={arrowLeftLink} className="h-3" alt="image18"/>
                    </div>
                    <div className="flex justify-between items-center">
                        <NavLink to={"/"} className="text-[#064749] underline font-semibold">Apartments with Parking</NavLink>
                        <img src={arrowLeftLink} className="h-3" alt="image199"/>
                    </div>
                    <div className="flex justify-between items-center">
                        <NavLink to={"/"} className="text-[#064749] underline font-semibold">Apartments with Elevator</NavLink>
                        <img src={arrowLeftLink} className="h-3" alt="image20"/>
                    </div>
                    <div className="flex justify-between items-center">
                        <NavLink to={"/"} className="text-[#064749] underline font-semibold">Apartments suitable for physical disabilities</NavLink>
                        <img src={arrowLeftLink} className="h-3" alt="image21"/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center relative overflow-hidden rounded-lg bg-center w-full bg-cover p-12  bg-background2 gap-y-3 lg:px-[100px]">
                <div className="flex flex-col p-6 bg-white rounded-t-3xl rounded-br-3xl gap-y-3 md:max-w-[300px]">
                    <span className="font-semibold text-2xl">Dictum nunc</span>
                    <p className="text-sm">Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis proin fermentum, consectetur cursus. </p>
                    <select name="" id="" className="w-full p-1 rounded-lg bg-[#064749] text-white text-sm">
                        <option value="choose city" className="text-white text-sm px-2">choose city</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Home;