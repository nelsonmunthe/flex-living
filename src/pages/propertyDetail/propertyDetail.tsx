import detailImage1 from "../../assets/images/detailImage1.png"
import arrowLeft from "../../assets/images/arrowLeftBlack.png"
import arrowRigth from "../../assets/images/arrowRighBlack.png"
import CustomHeader from "../../components/CustomHeader";
import CustomButton from "../../components/CustomButtont";
import iconTelevision from "../../assets/images/mdi_television.png"
import iconFireplace from "../../assets/images/mdi_fireplace.png"
import iconPhone from "../../assets/images/mdi_phone-classic.png"
import iconWorkDesk from "../../assets/images/mdi_desktop-mac-dashboard.png"
import iconFridge from "../../assets/images/mdi_fridge.png"
import iconKettle from "../../assets/images/mdi_kettle.png"
import iconCoffeeMaker from "../../assets/images/mdi_coffee-maker.png"
import iconDishes from "../../assets/images/mdi_pot-steam.png"
import iconWashingMachine from "../../assets/images/mdi_washing-machine.png"
import iconDryer from "../../assets/images/mdi_tumble-dryer.png"
import iconIron from "../../assets/images/mdi_curling.png"
import iconWardrobe from "../../assets/images/mdi_wardrobe.png"
import {IconProperty} from "../../intefrace/common"
import MyMap from "../booking/MyMap";
import iconClock from "../../assets/images/eva_clock-fill.png"
import iconNoSmoking from "../../assets/images/foundation_no-smoking.png"
import iconNoPets from "../../assets/images/ic_twotone-pets.png"
import iconParty from "../../assets/images/bx_bxs-party.png"
import detailImage2 from "../../assets/images/detailImage2.png"
import detailImage3 from "../../assets/images/detailImage3.png"
import detailImage4 from "../../assets/images/detailImage4.png"
import iconWarning from "../../assets/images/iconWarning.png"
import detailImage6 from "../../assets/images/detailImage6.png"
import iconBedroom from "../../assets/images/fluent_bed-24-filled.png"
import iconBathroom from "../../assets/images/fa-solid_bath.png"
import iconPeople from "../../assets/images/eva_people-fill.png"
import iconPlus from "../../assets/images/eva_plus-fill.png"
import iconMinus from "../../assets/images/eva_minus-fill.png"

const PropertyDetail = () => {
    const properties:IconProperty[] = [
        {
            image: iconTelevision,
            name: "TV"
        },
        {
            image: iconFireplace,
            name: "Fireplace"
        },
        {
            image: iconPhone,
            name: "Phone"
        },
        {
            image: iconWorkDesk,
            name: "Work desk"
        },
        {
            image: iconFridge,
            name: "Fridge"
        },
        {
            image: iconKettle,
            name: "Kettle"
        },
        {
            image: iconCoffeeMaker,
            name: "Coffee machine"
        },
        {
            image: iconDishes,
            name: "Dishes"
        },
        {
            image: iconWashingMachine,
            name: "Washing machine"
        },
        {
            image: iconDryer,
            name: "Dryer"
        },
        {
            image: iconIron,
            name: "Iron"
        },
        {
            image: iconWardrobe,
            name: "Wardrobe"
        }
    ]
    return(
        <div className="grid grid-cols-1 gap-y-10 md:gap-y-16 lg:gap-y-10 px-2">
            <div className="hidden sm:grid grid-cols-12 gap-3 lg:px-[150px]">
                <div className="relative col-span-7">
                    <img  src={detailImage6} alt="image-1" className="object-cover h-full rounded-lg" />
                    <div className="absolute bottom-2 left-4">
                        <CustomButton description="View all photos"/>
                    </div>
                </div>

                <div className="col-span-5 grid grid-cols-2 gap-1">
                    <img  src={detailImage2} alt="image-1" />
                    <img  src={detailImage2} alt="image-1" />
                    <img  src={detailImage3} alt="image-1" />
                    <img  src={detailImage4} alt="image-1" />
                </div>
            </div>
            <div className="hidden sm:grid grid-cols-12  gap-3 md:px-10 lg:px-[150px]">
                <div className="col-span-12 sm:col-span-6  lg:col-span-7 flex justify-start flex-col gap-2">
                    <div className="flex flex-col justify-center  gap-1 lg:my-4 lg:px[300px]">
                        <h2 className="font-semibold text-lg lg:text-2xl">Rhoncus suspendisse</h2>
                         <p className="text-sm lg:max-w-[600px]">London, Notting Hill"</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex gap-2 my-3">
                            <div className="flex gap-1 items-center">
                                <img src={iconBedroom} alt="bed-room" className="h-4"/>
                                <span className="text-sm">2 bedroom</span>
                            </div>
                            <div className="flex gap-1 items-center">
                                <img src={iconBathroom} alt="bath-room" className="h-4"/>
                                <span className="text-sm">2 bath</span>
                            </div>
                        </div>
                        <div className="flex  items-center justify-center">
                            <span className="px-1 text-sm border-r border-r-[#181A18]">500 sq.ft</span>
                            <span className="px-1 text-sm">Elevator</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Desription</h3>
                        <p className="text-sm w-full">A truly global city, London has long been considered a cutting-edge metropolis and hub for culture, style and finance. With each borough, Tube zone and neighborhood of London sporting its own vibe and lifestyle advantages, it can be downright difficult to settle on where to look for a furnished apartment in London . Whether you’re a digital nomad looking for a studio apartment in London or just seeking a month to month rental in London, Blueground has you covered.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h6 className="font-semibold">In sed</h6>
                        <p className="text-sm">In nullam eget urna suspendisse odio nunc. Eu sodales vestibulum, donec rutrum justo, amet porttitor vitae et. Interdum consectetur dictum mattis gravida sed vulputate. Tempus sagittis cras sagittis viverra erat proin duis enim. </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h6 className="font-semibold">Adipiscing risus, fermentum</h6>
                        <p className="text-sm">Laoreet risus accumsan pellentesque lacus, in nulla eu elementum. Mollis enim fringilla aenean diam tellus diam morbi ipsum placerat.  </p>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-5 flex justify-start flex-col gap-3 lg:gap-4 bg-[#F2F0F2] rounded-lg p-4 lg:px-8">
                    <h3 className="font-semibold text-center">£3990 / Month</h3>
                    <div className="flex items-center  gap-x-8">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="Move in" className="text-sm font-semibold">Move in</label>
                            <input 
                                type="date"
                                className="rounded-lg p-1"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="Move in" className="text-sm font-semibold">Move out</label>
                            <input 
                                type="date"
                                className="rounded-lg p-1"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <img src={iconPeople} alt="icon people" className="h-5"/>
                        <span className="text-sm font-semibold">Guests</span>
                        <img src={iconPlus} alt="icon plus" className="h-5"/>
                        <span className="text-sm font-semibold">1</span>
                        <img src={iconMinus} alt="icon plus" className="h-5"/>
                    </div>
                    <span>All utilities are included</span>
                    <div className="flex justify-between">
                        <span>Average monthy rent</span>
                        <div className="flex flex-col items-center">
                            <span className="text-sm">£3700</span>
                            <span className="text-sm">incl. VAT</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                       <div className="flex  gap-1">
                            <span className="font-semibold">Pay upon booking</span>
                            <img src={iconWarning} className="h-4"/>
                       </div>
                       <div className="flex flex-col items-center">
                            <span className="font-semibold text-sm">£3989.23</span>
                            <span className="text-sm">incl. VAT</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <div className="flex  gap-1">
                                <span className="font-semibold">Total Costs</span>
                                <img src={iconWarning} className="h-4"/>
                            </div>
                            <span className="text-sm text-[#064749]">Show more</span>
                        </div>
                       <div className="flex flex-col items-center">
                            <span className="font-semibold text-sm">£4001.70</span>
                            <span className="text-sm">incl. VAT</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-y-2">
                        <CustomButton description="Continue Booking"/>
                        <p className="text-sm text-center">When you book this apartment, your reservation will be cofirmed instantly</p>
                    </div>
                </div>
            </div>
            <div className="sm:hidden relative grid grid-cols-1">
                <img src={detailImage1} alt="detail-1" className="w-full"/>
                <div className="absolute w-full bottom-[50%] flex justify-between">
                    <div className="p-2 bg-white rounded-lg opacity-[0.7] hover:cursor-pointer">
                        <img src={arrowLeft}/>
                    </div>
                    <div className="p-2 bg-white rounded-lg opacity-[0.7] hover:cursor-pointer">
                        <img src={arrowRigth}/>
                    </div>
                </div>
                <span className="absolute py-1 px-2 opacity-[0.8] bg-white bottom-2 right-2 text-sm">1/10</span>
            </div>
            <div className="sm:hidden grid grid-cols-1 auto-cols-auto gap-3 lg:px-[150px]">
                <CustomHeader 
                    header="Rhoncus suspendisse"
                    subHeader="London, Notting Hill"
                />
                <div className="bg-[#49735A] flex justify-between items-center p-2 rounded-lg">
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold text-white">£3990 / Month</span>
                        <div className="flex justify-center items-center gap-x-2">
                            <span className="text-white text-sm">31.12.2021</span> 
                            <span className="text-white text-sm">31.12.2021</span>
                        </div>
                    </div>
                    <CustomButton description="Book"/>
                </div>
                <h6 className="font-semibold text-center">Desription</h6>
                <p className="text-sm">A truly global city, London has long been considered a cutting-edge metropolis and hub for culture, style and finance. With each borough, Tube zone and neighborhood of London sporting its own vibe and lifestyle advantages, it can be downright difficult to settle on where to look for a furnished apartment in London . Whether you’re a digital nomad looking for a studio apartment in London or just seeking a month to month rental in London, Blueground has you covered.</p>
                <div className="flex justify-center items-center">
                    <CustomButton description="Read More"/>
                </div>
                
            </div>
            <div className="grid grid-cols-1 auto-cols-auto gap-3 lg:px-[150px]">
                <CustomHeader header="Amenities"/>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {
                        properties.map(item => {
                            return (
                                <div className="flex justify-between items-center px-10">
                                     <span className="text-sm">{item.name}</span>
                                    <img src={item.image} alt="image" className="h-5"/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="grid grid-cols-1 auto-cols-auto gap-3 lg:px-[150px]">
                <CustomHeader header="Location"/>
                <MyMap />
            </div>
            <div className="grid grid-cols-1  auto-cols-auto gap-3 lg:px-[150px] px-10">
                <CustomHeader header="Policy Detail"/>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="flex flex-col gap-2">
                        <h6 className="font-semibold text-center sm:text-start">House rules</h6>
                        <div className="flex gap-2 items-center">
                            <img src={iconClock} alt="icon" className="h-5"/>
                            <span className="text-sm">Checkin time</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={iconClock} alt="icon" className="h-5"/>
                            <span className="text-sm">Checkout time</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={iconNoSmoking} alt="icon" className="h-5"/>
                            <span className="text-sm">No smoking</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={iconNoPets} alt="icon" className="h-5"/>
                            <span className="text-sm">No pets</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={iconParty} alt="icon" className="h-5"/>
                            <span className="text-sm">No parties or events</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h6 className="font-semibold text-center sm:text-start">Cancellation Policy</h6>
                        <div className="flex gap-2 items-center ">
                            <img src={iconClock} alt="icon" className="h-5"/>
                            <span className="text-sm">Free Cancellation up to 24hrs before checkin</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h6 className="font-semibold text-center sm:text-start">Health & Safty</h6>
                        <div className="flex gap-2 items-center">
                            <img src={iconClock} alt="icon" className="h-5"/>
                            <span className="text-sm">Cleaner in accordance with our COVID safe cleaning policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PropertyDetail;