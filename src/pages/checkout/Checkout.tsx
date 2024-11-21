import iconPeople from "../../assets/images/eva_people-fill.png"
import iconWarning from "../../assets/images/iconWarning.png"
import detailImage6 from "../../assets/images/detailImage6.png"
import GuestDetail from "./GuestDetail"
import useCheckOut from "./useCheckout"
import CheckoutReview from "./CheckoutReview"

const Checkout = () => {
    const {
        confirm,
        onHandleConfirmAndPay
    } 
    = useCheckOut();
  
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md: gap-x-3 gap-10 md:gap-y-16 lg:gap-10 lg:px-[200px]">
            <div className="flex flex-col  px-2 py-4 sm:justify-start  sm:order-last">
                <img src={detailImage6} alt="cover" className="rounded-t-lg"/>
                <div className="bg-[#F2F0F2] flex flex-col gap-3 px-2 py-4 rounded-b-lg">
                    <form className="flex items-center justify-center sm:justify-start gap-x-8">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="Move in" className="text-sm font-semibold text-center sm:text-start">Move in</label>
                            <input 
                                type="date"
                                name="start-date"
                                required
                                className="rounded-lg  bg-[#F2F0F2] text-sm"
                            />
                        </div>
                        <div className="flex flex-col justify-center gap-1">
                            <label htmlFor="Move in" className="text-sm font-semibold text-center sm:text-start">Move out</label>
                            <input 
                                type="date"
                                name="end-date"
                                required
                                className="rounded-lg  bg-[#F2F0F2] text-sm"
                            />
                        </div>
                    </form>
                    <div className="flex justify-center items-center sm:justify-start gap-4">
                        <span className="font-semibold text-sm">1</span>
                        <div className="flex gap-1 items-center">
                            <img src={iconPeople} alt="people" className="h-4"/>
                            <span className="font-semibold text-sm">Guests</span>
                        </div>
                    </div>
                    <span className="text-sm  text-center sm:text-start">All utilities are included</span>
                    <span className="text-center font-semibold sm:text-start">Payment timeline</span>
                    <div className="flex flex-col">
                        <div className="flex  gap-3">
                            <div className="flex flex-col items-center">
                                <div className="p-[6px] bg-[#181A18] rounded-lg"></div>
                                <div className="h-full border-r border-r-[#181A18]"></div>
                            </div>
                            <div className="flex flex-1 justify-between gap-y-2">
                                <div className="flex flex-col">
                                    <span className="text-sm">Reserve this apaptment</span>
                                    <span className="text-[10px]">Due now</span>
                                </div>
                                <span className="text-sm">£4001.70</span>
                            </div>
                        </div>
                        <div className="flex  gap-3">
                            <div className="flex flex-col items-center">
                                <div className="p-[6px] bg-[#181A18] rounded-lg"></div>
                            </div>
                            <div className="flex flex-1 justify-between gap-y-2">
                                <div className="flex flex-col">
                                    <span className="text-sm">After move-out</span>
                                    <span className="text-[10px]">Receive your £400.00 deposit back within 30 days</span>
                                </div>
                                <img src={iconWarning} alt="icon-warning" className="h-3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {confirm 
                ? <GuestDetail  onHandleConfirmAndPay={onHandleConfirmAndPay} /> 
                : <CheckoutReview 
                    onHandleConfirmAndPay={onHandleConfirmAndPay}
                />
            }
        </div>
    )
}

export default Checkout;