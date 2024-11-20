import CustomHeader from "../../components/CustomHeader";
import iconFlag from "../../assets/images/emojione_flag-for-liberia.png"
import CustomButton from "../../components/CustomButtont";

type CheckoutReviewProps = {
    onHandleConfirmAndPay : () => void
}

const GuestDetail = (
    {
        onHandleConfirmAndPay
    }:CheckoutReviewProps) => {

    return(
        <form 
            className="grid grid-cols-1 gap-5 p-2 lg:mx-10"
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <div className="flex flex-col gap-2">
                <CustomHeader  header="Guest details"/>
                <div className="w-full flex flex-col gap-2">
                    <input 
                        required
                        placeholder="First Name"
                        type="text"
                        className="bg-[#F2F0F2] w-full p-2 text-sm rounded-lg"
                    />
                    <input 
                        required
                        placeholder="Last Name"
                        type="text"
                        className="bg-[#F2F0F2] w-full p-2 text-sm rounded-lg"
                    />
                    <input 
                        required
                        placeholder="Email"
                        type="email"
                        className="bg-[#F2F0F2] w-full p-2 text-sm rounded-lg"
                    />
                    <div className="bg-[#F2F0F2] w-full p-2 text-sm rounded-lg flex gap-2 items-center">
                        <img src={iconFlag} className="h-3" />
                        <select name="" id="" className="hover:cursor-pointer text-sm">
                            <option value="" className="text-sm">+1</option>
                        </select>
                        <input 
                            type="text"
                            placeholder="Phone number"
                            required
                            className="bg-[#F2F0F2] flex-1 px-2 py-1 rounded-lg"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 my-3">
                    <h6 className="font-semibold text-center text-md sm:text-start">Purpose of stay</h6>
                    <div className="flex justify-center sm:justify-start items-center">
                        <div className="flex flex-col">
                            <div className="flex justify-start gap-2 w-full">
                                <input type="radio" name="contact"/>
                                <label htmlFor="I'm a Customer">Business Travel/ Work</label>
                            </div>
                            <div className="flex justify-start  gap-2 w-full">
                                <input type="radio" name="contact"/>
                                <label htmlFor="I'm a Customer">Moving to this city or country</label>
                            </div>
                            <div className="flex justify-start gap-2 w-full">
                                <input type="radio" name="contact"/>
                                <label htmlFor="I'm a Customer">Holiday</label>
                            </div>
                            <div className="flex justify-start gap-2 w-full">
                                <input type="radio" name="contact"/>
                                <label htmlFor="I'm a Customer">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
                <input 
                    required
                    placeholder="Name of Employer/ Organisaition"
                    type="text"
                    className="bg-[#F2F0F2] text-[#49735A] w-full p-2 text-sm rounded-lg"
                />
                <div className="flex gap-2 flex-col">
                    <div className="flex gap-2">
                        <input 
                            type="checkbox"
                            name="bookers"
                        />
                        <label htmlFor="bookers" className="text-sm">I’m booking on behalf of someone else</label>
                    </div>
                    <input 
                        required
                        placeholder="Name"
                        type="text"
                        className="bg-[#F2F0F2] w-full p-2 text-sm rounded-lg"
                    />
                    <input 
                        required
                        placeholder="Email of the guest"
                        type="email"
                        className="bg-[#F2F0F2] w-full p-2 text-sm rounded-lg"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <CustomHeader header="Payment method"/>
                <select name="" id="" className="p-1 rounded-lg px-4 py-2 text-sm">
                    <option value="" className="text-center px-2 text-sm">Select payment method</option>
                    <option value="card" className="text-center px-2 text-sm">Card</option>
                    <option value="bank-transfer" className="text-center px-2 text-sm">Bank Transfer</option>
                </select>
                <p className="text-sm">By clicking "Book" below, I have read and agreed to the key contract terms, cancellation policy and apartment & building rules, and to pay the total amount shown.</p>
                <div className="flex justify-center gap-x-2 items-center my-3">
                    <CustomButton description="Book" type="submit"/>
                    <CustomButton description="Cancel" onHandleClick={onHandleConfirmAndPay}/>
                </div>
            </div>
            
        </form>
    )
}

export default GuestDetail;