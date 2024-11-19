import CustomButton from "../../components/CustomButtont";
import iconLock from "../../assets/images/eva_lock-fill.png"
import iconPriceTag from "../../assets/images/eva_pricetags-fill.png"
import iconApartement from "../../assets/images/ic_round-apartment.png"
import iconHour from "../../assets/images/fluent_access-time-24-filled.png"
import { InformationCardProps } from "../../intefrace/common";
import iconEmail from "../../assets/images/eva_email-fill.png"
import iconPeople from "../../assets/images/eva_person-fill.png"
import iconEye from "../../assets/images/eva_eye-fill.png"
import iconPantone from "../../assets/images/eva_pantone-fill.png"
import iconBriefCase from "../../assets/images/eva_briefcase-fill.png"
import iconSun from "../../assets/images/eva_sun-fill.png"
import before from "../../assets/images/Before.png"
import after from "../../assets/images/After.png"
import iconBook from "../../assets/images/eva_book-fill.png"
import iconAward from "../../assets/images/eva_award-fill.png"
import CustomHeader from "../../components/CustomHeader";
import iconCheckMark from "../../assets/images/eva_checkmark-fill.png"
import iconClose from "../../assets/images/Close.png"
import iconPlus from "../../assets/images/iconPlus.png"

const Landlord = () => {
    const howItWorks :InformationCardProps[]  = [ 
        {
            header: "Get in touch",
            content: "Ut id cras malesuada dolor. Consectetur eget malesuada enim massa viverra mauris",
            image: iconEmail
        },
        {
            header: "Let’s chat",
            content: "Euismod commodo feugiat purus egestas diam. Facilisi sed senectus consequat risus. Porta purus nec dui odio vehicula.",
            image: iconPeople
        },
        {
            header: "Property viewing",
            content: "Sit lectus parturient diam ac congue elementum praesent blandit. Tristique ut ut venenatis tortor, id elementum. Integer tristique viverra enim libero.",
            image: iconEye
        },
        {
            header: "Time to decorate",
            content: "Adipiscing magna ut justo, et. Sem pellentesque eu risus euismod et. Sapien est tellus dapibus sed varius lorem tellus, turpis nisl. Elementum scelerisque elit in nibh aliquet phasellus.",
            image: iconPantone
        },
        {
            header: "Moving in & Moving up!",
            content: "Sit lectus parturient diam ac congue elementum praesent blandit. Tristique ut ut venenatis tortor, id elementum. Integer tristique viverra enim libero.",
            image: iconBriefCase
        },
        {
            header: "Sit back & Relax",
            content: "Euismod commodo feugiat purus egestas diam. Facilisi sed senectus consequat risus. Porta purus nec dui odio vehicula.",
            image: iconSun
        }
    ];

    const  coorporatePartnerShip :InformationCardProps[] = [
        {
            header: "Morbi pulvinar",
            content: "Eu vulputate mi cras quam lectus. Ut ut dignissim amet dignissim gravida sit ullamcorper lectus.",
            image: iconBook
        },
        {
            header: "Turpis elit",
            content: "Arcu venenatis id dignissim massa ipsum. Viverra mi habitant urna at elit dignissim cursus ut facilisi.",
            image: iconAward
        },
        {
            header: "Faucibus egestas",
            content: "Vehicula arcu, felis, et urna, nunc, ut eget pellentesque scelerisque. Accumsan et velit nibh tempor.",
            image: iconBook
        },
        {
            header: "Faucibus egestas",
            content: "Compare our pricing model to high street agents",
            image: iconAward
        }
    ]

    return(
        <div className="grid grid-cols-1 gap-y-10 md:gap-y-16 lg:gap-y-24">
            <div className="flex justify-center sm:justify-end overflow-hidden bg-center px-5  bg-cover bg-coverLandLord py-5 md:py-10 lg:px-[100px]">
                <div className="bg-gray-300 flex flex-col gap-3 md:gap-4 items-center justify-center  rounded-xl p-2 md:p-4 opacity-[0.7]">
                    <CustomHeader 
                        header="Earn more from your property, do less"
                        subHeader="Find out if your property meets our criteria"
                    />
                    <input 
                        type="text"
                        placeholder="Name *"
                        className="text-sm bg-white px-2 lg:p-2 rounded-md w-full"
                    />
                    <input 
                        type="text"
                        placeholder="Email *"
                        className="text-sm bg-white px-2 lg:p-2 rounded-md w-full"
                    />
                    <input 
                        type="text"
                        placeholder="Phone Number *"
                        className="text-sm bg-white px-2 lg:p-2 rounded-md w-full"
                    />
                    <div className="grid grid-cols-1 gap-3 w-full">
                        <span className="text-sm font-semibold text-start">Property details</span>
                        <select name="" id="" className="w-full p-1 lg:p-2 bg-white rounded-md px-2">
                            <option value="" className="w-full">Area *</option>
                        </select>
                        <select name="" id="" className="w-full p-1 lg:p-2 bg-white rounded-md px-2">
                            <option value="" className="w-full"># of bedrooms *</option>
                        </select>
                    </div>
                    <CustomButton description="Submit"/>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-3 px-2 lg:px-[100px]">
                <CustomHeader 
                    header="Better than Property Management"
                    subHeader="We work with 100+  companies to meet accommodation needs in London. Offer a dedicated booking manager that can help to find properties for your needs."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="grid grid-cols-1 gap-3 bg-[#F2F0F2] py-4 px-6 rounded-xl">
                        <h5 className="font-semibold text-lg">Guaranteed rent</h5>
                        <p className="text-sm">We do the searching for you</p>
                        <img src={iconLock} className="my-2 h-8" alt="icon-lock"/>
                    </div>
                    <div className="grid grid-cols-1 gap-3 bg-[#F2F0F2] py-4 px-6 rounded-xl">
                        <h5 className="font-semibold text-lg">No fees</h5>
                        <p className="text-sm">Preferred partner rates</p>
                        <img src={iconLock} className="my-2 h-8" alt="icon-lock"/>
                    </div>
                    <div className="grid grid-cols-1 gap-3 bg-[#F2F0F2] py-4 px-6 rounded-xl">
                        <h5 className="font-semibold text-lg">No voids</h5>
                        <p className="text-sm">Preferred partner rates</p>
                        <img src={iconApartement} className="my-2 h-8" alt="icon-lock"/>
                    </div>
                    <div className="grid grid-cols-1 gap-3 bg-[#F2F0F2] py-4 px-6 rounded-xl">
                        <h5 className="font-semibold text-lg">Guaranteed rent</h5>
                        <p className="text-sm">We do the searching for you</p>
                        <img src={iconHour} className="my-2 h-8" alt="icon-lock"/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 px-2  py-4 lg:px-[100px] bg-cardBackground ">
                <h2 className="font-semibold  text-lg text-center lg:text-2xl my-10">How it Works</h2>
                <div className="flex flex-col sm:hidden">
                    {
                        howItWorks.map(item => {
                            return (
                                <div className="flex">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-[#181A18] p-2 rounded-lg"></div>
                                        <div className="flex-1 border-r border-r-[#181A18]"></div>
                                    </div>
                                    <div className="bg-cardBackground rounded-xl px-6 grid grid-cols-1 gap-3">
                                        <img src={item.image} alt="calender-icon" className="h-8"/>
                                        <h5 className="font-semibold text-lg">{item.header}</h5>
                                        <p className="text-sm">{item.content}</p>
                                    </div>
                                </div>  
                            )
                        })
                    }
                                     
                </div>
                {
                    howItWorks.map((item, index) => {
                        return (
                            <div className="hidden sm:grid grid-cols-12 lg:px-[100px]">
                                <div className="col-span-5 flex justify-center items-center">
                                    <div className={`${index % 2 === 0 ? "" : "hidden"} bg-cardBackground rounded-xl px-6 grid grid-cols-1 gap-3`}>
                                        <img src={item.image} alt="calender-icon" className="h-8"/>
                                        <h5 className="font-semibold text-lg">{item.header}</h5>
                                        <p className="text-sm">{item.content}</p>
                                    </div>
                                </div>
                                <div className="col-span-2 flex flex-col items-center">
                                    <div className="bg-[#181A18] p-2 rounded-lg"></div>
                                    <div className="flex-1 border-r border-r-[#181A18]"></div>
                                </div>
                                <div className="col-span-5 flex justify-center items-center">
                                    <div className={`${index % 2 === 0 ? "hidden" : ""} bg-cardBackground rounded-xl px-6 grid grid-cols-1 gap-3`}>
                                        <img src={item.image} alt="calender-icon" className="h-8"/>
                                        <h5 className="font-semibold text-lg">{item.header}</h5>
                                        <p className="text-sm">{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="grid grid-cols-1 gap-3 px-2  lg:px-[100px]">
                <CustomHeader 
                    header="Corporate Partnerships" 
                    subHeader="We work with 100+  companies to meet accommodation needs in London. Offer a dedicated booking manager that can help to find properties for your needs."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex relative justify-center items-center">
                        <img  src={before} alt="before" className="object-cover w-full "/>
                        <div className="bg-cardBackground absolute rounded-md bottom-0 right-0 py-2 px-4">
                            <span className="text-md">Before</span>
                        </div>
                    </div>
                    <div className="flex relative justify-center items-center">
                        <img  src={after} alt="before" className="object-cover w-full mx-h-[200px]"/>
                        <div className="bg-cardBackground absolute rounded-md bottom-0 right-0 py-2 px-4">
                            <span className="text-md">After</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 my-10">
                    {
                        coorporatePartnerShip.map(item => {
                            return(
                                <div className="flex flex-col justify-center items-center gap-3">
                                    <h5 className="font-semibold text-lg">{item.header}</h5>
                                    <p className="text-sm text-center">{item.content}</p>
                                    <img src={item.image} alt="calender-icon" className="my-2 h-8"/>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className="grid grid-cols-1 gap-3 px-2 sm:px-[50px]  lg:px-[100px]">
                <CustomHeader  
                    header="Pricing" 
                    subHeader="Compare our pricing model to high street agents"
                />
                <div className="grid grid-cols-12 md:px-[20px] lg:px-[100px] gap-3">
                    <div className="col-span-12 sm:col-span-5 border-2 border-gray-300 rounded-xl">
                        <div className="bg-cardBackground flex flex-col justify-center items-center gap-3 py-3 lg:py-10 rounded-t-xl">
                            <h5 className="font-semibold text-lg">High Street Agents</h5>
                            <span className="text-3xl font-semibold">12%</span>
                            <p>management fee</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4 gap-3">
                            <div className="flex justify-start items-center w-full gap-x-2">
                                <img src={iconCheckMark} alt="icon-checkmark"/>
                                <span className="text-sm">6 to 12 months</span>
                            </div>
                            <div className="flex justify-start items-center w-full gap-x-2">
                                <img src={iconCheckMark} alt="icon-checkmark"/>
                                <span className="text-sm">No maintenance</span>
                            </div>
                            <div className="flex justify-start items-center w-full gap-x-2">
                                <img src={iconCheckMark} alt="icon-checkmark"/>
                                <span className="text-sm">No weekly cleaning</span>
                            </div>
                            <div className="flex justify-start items-center w-full gap-x-2">
                                <img src={iconCheckMark} alt="icon-checkmark"/>
                                <span className="text-sm">No interior design</span>
                            </div>
                            <div className="flex justify-start items-center w-full gap-x-2">
                                <img src={iconCheckMark} alt="icon-checkmark"/>
                                <span className="text-sm">5% void</span>
                            </div>
                            <div className="flex justify-start items-center w-full gap-x-2">
                                <img src={iconCheckMark} alt="icon-checkmark"/>
                                <span className="text-sm">£24,900</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-2 flex justify-center items-center">
                        <p className="text-3xl font-semibold text-center">VS</p>
                    </div>
                    <div className="col-span-12 sm:col-span-5 border-2 border-gray-300 rounded-xl">
                        <div className="bg-cardBackground flex flex-col justify-center items-center gap-3 py-3 lg:py-10  rounded-t-xl">
                            <h5 className="font-semibold text-lg">Flex Living (guaranteed Rental)</h5>
                            <span className="text-3xl font-semibold">Fixed price</span>
                            <p>monthly</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4 gap-3">
                            <div className="flex justify-start items-center w-full gap-x-2">
                                <img src={iconCheckMark} alt="icon-checkmark"/>
                                <span className="text-sm">3 to 5 years</span>
                            </div>
                            <div className="flex justify-start items-center w-full gap-x-2">
                                <img src={iconCheckMark} alt="icon-checkmark"/>
                                <span className="text-sm">Free maintenance</span>
                            </div>
                            <div className="flex justify-start items-center w-full gap-x-2">
                                <img src={iconCheckMark} alt="icon-checkmark"/>
                                <span className="text-sm">Weekly cleaning</span>
                            </div>
                            <div className="flex justify-start items-center w-full gap-x-2">
                                <img src={iconCheckMark} alt="icon-checkmark"/>
                                <span className="text-sm">Interior design</span>
                            </div>
                            <div className="flex justify-start items-center w-full gap-x-2">
                                <img src={iconCheckMark} alt="icon-checkmark"/>
                                <span className="text-sm">No void</span>
                            </div>
                            <div className="flex justify-start items-center w-full gap-x-2">
                                <img src={iconCheckMark} alt="icon-checkmark"/>
                                <span className="text-sm">£30,000</span>
                            </div>
                            <CustomButton description="Get started"/>
                        </div>
                    </div>
                </div>
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

export default Landlord;