import iconFilter from "../../assets/images/eva_search-fill.png"
import CustomButton from "../../components/CustomButtont";
const Booking = () => {
    return(
        <div className="grid grid-cols-1 gap-y-10 md:gap-y-16 lg:gap-y-24 px-2">
            <div className="flex flex-col gap-3">
                <div className="flex gap-1 items-center border border-[#181A18] p-1 rounded-xl">
                    <img src={iconFilter} alt="icon-searching" className="h-3 sm:h-5"/>
                    <input 
                        type="text"
                        placeholder="Select a city"
                        className="p-1 w-full rounded-lg text-[8px] sm:text-sm placeholder-[#181A18]"
                    />
                </div>
                <div className="flex gap-1 justify-between">
                    <CustomButton description="Parking"/>
                    <select name="" id="" className="p-1 rounded-xl bg-white text-[#49735A] border border-[#49735A] text-sm">
                        <option value="">Bedrooms</option>
                    </select>
                    <select name="" id="" className="p-1 rounded-xl bg-white text-[#49735A] border border-[#49735A] text-sm">
                        <option value="">Bathroom</option>
                    </select>
                </div>
                <div className="grid grid-cols-12">
                    <span className="text-sm col-span-9"><b>52 results</b> for “1 Bedroom property in West London</span>
                    <div className="flex justify-end items-center w-full gap-1 col-span-3">
                        <label htmlFor="Sort By" className="text-sm text-[#49735A]">Sort By</label>
                        <select name="" id="" className="p-1 rounded-xl bg-white text-[#49735A]  text-sm">
                            <option value="" className="text-sm"></option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking;