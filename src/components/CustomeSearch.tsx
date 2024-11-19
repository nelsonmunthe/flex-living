import iconFilter from "../assets/images/eva_search-fill.png"
import iconCalender from "../assets/images/eva_calendar-fill.png"
import arrowForward from "../assets/images/eva_arrow-forward-fill.png"
import iconPerson from "../assets/images/eva_people-fill.png"
import iconAdd from "../assets/images/eva_plus-fill.png"
import iconRemove from "../assets/images/eva_minus-fill.png"
import CustomButton from "./CustomButtont"

const CustomSearch = () => {
    return(
        <div className=" items-center grid grid-cols-3 bg-white gap-1 sm:gap-2 rounded-3xl border-2 border-[#49735A] lg:mx-[250px]">
            <div className="flex gap-1 items-center border-r border-r-[#49735A]">
                <img src={iconFilter} alt="icon-searching" className="h-3 sm:h-5"/>
                <input 
                    type="text"
                    placeholder="Select a city"
                    className="p-1 w-full rounded-lg text-[8px] sm:text-sm"
                />
            </div>
            <div className="flex gap-1 justify-center items-center border-r border-r-[#49735A]">
                <img src={iconCalender} alt="icon-calender" className="h-3 sm:h-5"/>
                <span className="text-[8px] sm:text-sm">Move-in</span>
                <img src={arrowForward} alt="icon-arrow-left" className="h-3 sm:h-5"/>
                <span className="text-[8px] sm:text-sm">Move-out</span>
            </div>
            <div className="flex gap-1 items-center justify-between sm:ml-4">
                <div className="flex gap-x-1">
                    <img src={iconPerson} alt="icon-calender" className="h-3 sm:h-5"/>
                    <span className="text-[8px] sm:text-sm">Guests</span>
                </div>
                <img src={iconAdd} alt="icon-arrow-left" className="h-3 sm:h-5"/>
                <span className="text-[8px] sm:text-sm">1</span>
                <img src={iconRemove} alt="icon-arrow-left" className="h-3 sm:h-5"/>
                <CustomButton 
                    description="Search"
                    styling="text-white bg-buttonBackground py-2 px-4 rounded-2xl text-[10px] md:text-sm font-semibold"    
                />
            </div>
        </div>
    )
}

export default CustomSearch;