import iconFilter from "../../assets/images/eva_search-fill.png"
import CustomButton from "../../components/CustomButtont";
import imageMag from "../../assets/images/Map.png"
import bookingImage1 from "../../assets/images/bookingImage1.png"
import bookingImage2 from "../../assets/images/bookingImage2.png"
import bookingImage3 from "../../assets/images/bookingImage3.png"
import bookingImage4 from "../../assets/images/bookingImage4.png"
import bookingImage5 from "../../assets/images/bookingImage5.png"
import bookingImage6 from "../../assets/images/bookingImage6.png"
import bookingImage7 from "../../assets/images/bookingImage7.png"
import bookingImage8 from "../../assets/images/bookingImage8.png"
import bookingImage9 from "../../assets/images/bookingImage9.png"
import iconBedRoom from "../../assets/images/fluent_bed-24-filled.png"
import iconBathub from "../../assets/images/fa-solid_bath.png"
import iconWifi from "../../assets/images/eva_wifi-fill.png"
import { BookingViewProps } from "../../intefrace/common";
import CustomHeader from "../../components/CustomHeader";
import iconClose from "../../assets/images/Close.png"
import iconPlus from "../../assets/images/iconPlus.png"
import MyMap from "./MyMap";
import CustomSearch from "../../components/CustomeSearch";

const Booking = () => {
    const bookingReview:BookingViewProps[] = [
        {
            coverImage: bookingImage1,
            header: "Rhoncus suspendisse penatibus mauris, sit non",
            properties: { bedroom: 1, bath: 1, wifi: true},
            additional: ["City view", "3rd floor", "Elevator", "Parking"],
            availableDate: "28 Nov 2021",
            price: 3490
        },
        {
            coverImage: bookingImage2,
            header: "Rhoncus suspendisse penatibus mauris, sit non",
            properties: { bedroom: 1, bath: 1, wifi: true},
            additional: ["City view", "3rd floor", "Elevator", "Parking"],
            availableDate: "28 Nov 2021",
            price: 3490
        },
        {
            coverImage: bookingImage3,
            header: "Rhoncus suspendisse penatibus mauris, sit non",
            properties: { bedroom: 1, bath: 1, wifi: true},
            additional: ["City view", "3rd floor", "Elevator", "Parking"],
            availableDate: "28 Nov 2021",
            price: 3490
        },
        {
            coverImage: bookingImage4,
            header: "Rhoncus suspendisse penatibus mauris, sit non",
            properties: { bedroom: 1, bath: 1, wifi: true},
            additional: ["City view", "3rd floor", "Elevator", "Parking"],
            availableDate: "28 Nov 2021",
            price: 3490
        },
        {
            coverImage: bookingImage5,
            header: "Rhoncus suspendisse penatibus mauris, sit non",
            properties: { bedroom: 1, bath: 1, wifi: true},
            additional: ["City view", "3rd floor", "Elevator", "Parking"],
            availableDate: "28 Nov 2021",
           price: 3490
        },
        {
            coverImage: bookingImage6,
            header: "Rhoncus suspendisse penatibus mauris, sit non",
            properties: { bedroom: 1, bath: 1, wifi: true},
            additional: ["City view", "3rd floor", "Elevator", "Parking"],
            availableDate: "28 Nov 2021",
            price: 3490
        },
        {
            coverImage: bookingImage7,
            header: "Rhoncus suspendisse penatibus mauris, sit non",
            properties: { bedroom: 1, bath: 1, wifi: true},
            additional: ["City view", "3rd floor", "Elevator", "Parking"],
            availableDate: "28 Nov 2021",
            price: 3490
        },
        {
            coverImage: bookingImage8,
            header: "Rhoncus suspendisse penatibus mauris, sit non",
            properties: { bedroom: 1, bath: 1, wifi: true},
            additional: ["City view", "3rd floor", "Elevator", "Parking"],
            availableDate: "28 Nov 2021",
            price: 3490
        },
        {
            coverImage: bookingImage9,
            header: "Rhoncus suspendisse penatibus mauris, sit non",
            properties: { bedroom: 1, bath: 1, wifi: true},
            additional: ["City view", "3rd floor", "Elevator", "Parking"],
            availableDate: "28 Nov 2021",
            price: 3490
        },
    ]
   
    return(
        <div className="grid grid-cols-1 gap-y-10 md:gap-y-16 lg:gap-y-10 px-2">
            <div className="flex flex-col gap-3">
                <CustomSearch />
                <div className="grid grid-cols-3 sm:grid-cols-6  md:grid-cols-8 lg:grid-cols-8 gap-2 lg:mx-[250px]">
                    <div className="grid col-span-1">
                        <CustomButton description="Parking"/>
                    </div>
                    <select 
                        name="" 
                        id="" 
                        className="text-[#49735A] p-2 border border-[#49735A] text-sm rounded-2xl bg-white col-span-1"
                    >
                        <option value="">Bedrooms</option>
                    </select>
                    <select 
                        name="" 
                        id="" 
                        className="text-[#49735A] p-2 border border-[#49735A] text-sm rounded-2xl bg-white col-span-1"
                    >
                        <option value="">Bathrooms</option>
                    </select>
                </div>
                <div className="grid grid-cols-12 lg:mx-[250px]">
                    <span className="text-sm col-span-8"><b>52 results</b> for “1 Bedroom property in West London”</span>
                    <div className="flex gap-1 items-center justify-end col-span-4">
                        <label htmlFor="" className="text-sm">Order by</label>
                        <select name="" id="" className="text-[#49735A] p-2 border border-[#49735A] text-sm rounded-2xl bg-white">
                            <option value="">Bathrooms</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 items-center gap-3 px-2 lg:px-[100px]">
                <div className="col-span-12 sm:col-span-7  flex justify-start sm:order-last sm:h-full">
                    <MyMap />
                </div>
                <div className="col-span-12 sm:col-span-5  grid grid-cols-1 gap-3 max-h-[400px] overflow-scroll p-2">
                    <div className="grid grid-cols-1  gap-3 ">
                        {
                            bookingReview.map((item, index) => {
                                return <div className="grid grid-cols-12">
                                    <img src={item.coverImage} alt={`image-${index}`} className="object-cover w-full h-full col-span-3"/>
                                    <div className="flex flex-col gap-1 w-full col-span-9 p-2 bg-[#F2F0F2] rounded-tr-2xl rounded-br-2xl">
                                        <h6 className="font-semibold">Rhoncus suspendisse penatibus mauris, sit non</h6>
                                        <div className="flex gap-2 items-center">
                                            <div className="gap-1 flex">
                                                <img src={iconBedRoom} className="h-4"/>
                                                <span className="text-[10px]">1 bedroom</span>
                                            </div>
                                            <div className="gap-1 flex">
                                                <img src={iconBathub} className="h-4"/>
                                                <span className="text-[10px]">1 bath</span>
                                            </div>
                                            <div className="gap-1 flex">
                                                <img src={iconWifi} className="h-4"/>
                                                <span className="text-[10px]">WIFI</span>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-x-2">
                                            {
                                                item.additional.map((subItem, index) => {
                                                    return <span className={`text-[10px] ${item.additional.length - 1 === index ? '': 'border-r border-r-[#181A18]'}`}>{subItem}</span>
                                                })
                                            }
                                        </div>
                                        <CustomButton 
                                            description={item.availableDate}
                                            styling="text-white bg-[#49735A] py-2 px-4 rounded-2xl text-sm font-semibold"
                                        />
                                        <span className="text-sm">from <b>£{item.price}</b> /month</span>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="flex justify-center items-center">
                        <CustomButton description="Show more apartments"/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 items-center gap-3 px-2 lg:px-[100px]">
                <CustomHeader header="Apartments for rent in London"/>
                <p className="text-sm">A truly global city, London has long been considered a cutting-edge metropolis and hub for culture, style and finance. With each borough, Tube zone and neighborhood of London sporting its own vibe and lifestyle advantages, it can be downright difficult to settle on where to look for a furnished apartment in London . Whether you’re a digital nomad looking for a studio apartment in London or just seeking a month to month rental in London, Blueground has you covered. With a pub on almost every corner and beautiful parks in all major neighborhoods, you’ll feel right at home across all of Blueground’s exquisite London flats.</p>
                <p className="text-sm">Furnished apartment rentals in London. Getting the most out of living in London starts with securing a furnished flat for rent. Fortunately, Blueground’s flats for rent across London marry convenient locations close to public transportation, top notch interiors and modern furnishings, and support from our local team. Zero in on the ideal serviced apartment in London from studios to two-bedroom apartments by filtering for your date, area, and must-have amenities on our site. Moving to London has never been simpler!</p>
                <p className="text-sm">The choice is yours from Chelsea to Soho to Shoreditch, always within a short walk from Tube stops and local hangouts. Show up and start living in your new London accommodation with furnishings and a fully-equipped setup taken care of before your arrival by the team at Blueground. So book today, and move in tomorrow so you can enjoy all a Blueground London flat has to offer: premium work from home setups, a user-friendly guest app service, flexible contracts, and a booking process free of broker’s fees (and stresses!).</p>
            </div>
            <div className="grid grid-cols-1 items-center gap-3 px-2 lg:px-[100px]">
                <CustomHeader header="Frequently Asked Questions"/>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between gap-x-2">
                            <p className="text-md font-semibold">Integer morbi semper sodales sit facilisi habitant pulvinar sed venenatis?</p>
                            <img src={iconClose} alt="icon-close" className="h-4 hover:cursor-pointer"/>
                        </div>
                        <p className="text-sm">Magnis congue neque sociis ut nisl. Quis dui lobortis lectus viverra.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between gap-x-2">
                            <p className="text-md font-semibold">Massa massa nulla rhoncus a quam consectetur sed purus, enim?</p>
                            <img src={iconClose} alt="icon-close" className="h-4 hover:cursor-pointer"/>
                        </div>
                        <p className="text-sm">Nunc molestie sit in sed sodales. Bibendum pharetra, id viverra suspendisse pharetra ac aenean neque. Sodales ornare penatibus eros consectetur potenti in feugiat purus. Posuere amet, sodales nibh eget. A et, a ante pretium praesent elementum feugiat pharetra congue.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between gap-x-2">
                            <p className="text-md font-semibold">Dignissim congue rutrum pretium nunc sed nibh vitae tortor ut?</p>
                            <img src={iconPlus} alt="icon-close" className="h-4 hover:cursor-pointer"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between gap-x-2">
                            <p className="text-md font-semibold">Vulputate imperdiet fusce vivamus nunc leo morbi scelerisque in?</p>
                            <img src={iconPlus} alt="icon-close" className="h-4 hover:cursor-pointer"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between gap-x-2">
                            <p className="text-md font-semibold">Sit rhoncus rhoncus malesuada massa adipiscing arcu, semper ut in?</p>
                            <img src={iconPlus} alt="icon-close" className="h-4 hover:cursor-pointer"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between gap-x-2">
                            <p className="text-md font-semibold">Vulputate nisl non neque iaculis lacus dui, habitant gravida?</p>
                            <img src={iconPlus} alt="icon-close" className="h-4 hover:cursor-pointer"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between gap-x-2">
                            <p className="text-md font-semibold">Est felis a velit at vitae venenatis rhoncus?</p>
                            <img src={iconPlus} alt="icon-close" className="h-4 hover:cursor-pointer"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between gap-x-2">
                            <p className="text-md font-semibold">Eget nam accumsan elementum accumsan imperdiet eu, cras?</p>
                            <img src={iconPlus} alt="icon-close" className="h-4 hover:cursor-pointer"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between gap-x-2">
                            <p className="text-md font-semibold">Fermentum et semper aliquet justo, facilisis?</p>
                            <img src={iconPlus} alt="icon-close" className="h-4 hover:cursor-pointer"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between gap-x-2">
                            <p className="text-md font-semibold">A vulputate est diam tempus condimentum in?</p>
                            <img src={iconPlus} alt="icon-close" className="h-4 hover:cursor-pointer"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking;