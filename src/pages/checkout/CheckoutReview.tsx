import CustomButton from "../../components/CustomButtont";
import CustomHeader from "../../components/CustomHeader";
import iconWarning from "../../assets/images/iconWarning.png"

type CheckoutReviewProps = {
    onHandleConfirmAndPay : () => void
}

const CheckoutReview = (
    {
        onHandleConfirmAndPay
    }:CheckoutReviewProps) => {
    
    return(
        <div className="flex flex-col w-full  gap-y-3 px-2 py-4">
            <CustomHeader header="Booking review"/>
            <div className="flex flex-col gap-2 mt-4">
                <div className="flex justify-between items-center">
                    <label htmlFor="Rent per month" className="font-semibold text-sm">Rent per month</label>
                    <span className="font-semibold text-sm">£2990.00</span>
                </div>
                <div className="flex justify-between items-end">
                    <div className="flex gap-1 items-center">
                        <label htmlFor="Utilities per month" className="text-sm">Utilities per month</label>
                        <img src={iconWarning} alt="icon-warning" className="h-3"/>
                    </div>
                    <span className="text-sm">£250.70</span>
                </div>
                <div className="flex justify-between items-center">
                    <label htmlFor="Rent per month" className="font-semibold text-sm">Monthly subtotal</label>
                    <span className="font-semibold text-sm">£3340.70</span>
                </div>
                <div className="flex justify-between items-end">
                    <div className="flex gap-1 items-center">
                        <label htmlFor="Utilities per month" className="text-sm">One-time cleaning fee</label>
                        <img src={iconWarning} alt="icon-warning" className="h-3"/>
                    </div>
                    <span className="text-sm">£225.00</span>
                </div>
                <div className="flex justify-between items-end">
                    <label htmlFor="total" className="text-md font-semibold">Total</label>
                    <span className="text-md font-semibold">£225.00</span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <CustomButton 
                    description="Confirm and pay"
                    onHandleClick={onHandleConfirmAndPay}
                />
                <p className="text-sm">You won’t be charged yet</p>
            </div>
        </div>
    )
}

export default CheckoutReview;