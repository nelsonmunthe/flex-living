import iconFlag from "../../assets/images/emojione_flag-for-liberia.png"
import CustomButton from "../../components/CustomButtont";

const Contact = () => {
    return(
        <article className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16 lg:gap-24 p-2 lg:px-[200px]">
            <form className="flex flex-col gap-2">
                <h1 className="font-semibold text-xl text-center sm:text-start lg:text-3xl">Please tell us a little about you</h1>
                <div className="flex flex-col gap-2 my-3">
                    <h2 className="font-semibold text-center text-md sm:text-start">What would you like to contact us about?</h2>
                    <div className="flex justify-center sm:justify-start items-center">
                        <div className="flex flex-col">
                            <div className="flex justify-start gap-2 w-full">
                                <input type="radio" name="contact"/>
                                <label htmlFor="I'm a Customer">I'm a Customer</label>
                            </div>
                            <div className="flex justify-start  gap-2 w-full">
                                <input type="radio" name="contact"/>
                                <label htmlFor="I'm a Customer">I'm a Landlord</label>
                            </div>
                            <div className="flex justify-start gap-2 w-full">
                                <input type="radio" name="contact"/>
                                <label htmlFor="I'm a Customer">Something else</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <input 
                        required
                        placeholder="Name"
                        name="name"
                        type="text"
                        className="bg-[#F2F0F2] w-full p-2 text-sm rounded-lg"
                    />
                    <input 
                        required
                        placeholder="Email"
                        name="email"
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
                            name="phone_number"
                            className="bg-[#F2F0F2] flex-1 px-2 py-1 rounded-lg"
                        />
                    </div>
                    <textarea 
                        className="bg-[#F2F0F2] w-full p-2 text-sm rounded-lg"
                        placeholder="Message"
                        name="message"
                        rows={3}
                    />
                </div>
                <div className="flex justify-center items-center my-3">
                    <CustomButton description="Submit contact" type="submit"/>
                </div>
            </form>
            <section className="flex flex-col gap-2 justify-center sm:justify-start ">
                <div className="flex flex-col sm:flex-row gap-2 sm:grid sm:grid-cols-2">
                    <h2 className="font-semibold text-center sm:col-span-1 sm:text-start">Reservations:</h2>
                    <div className="flex flex-col sm:col-span-1">
                        <p className="text-[10px] text-center sm:text-start sm:text-lg">reservations@theflexliving.com</p>
                        <p className="text-sm text-center sm:text-start sm:text-lg">0203 307 4477</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:grid sm:grid-cols-2">
                    <h2 className="font-semibold text-center sm:col-span-1 sm:text-start">For Landlords:</h2>
                    <div className="flex flex-col sm:col-span-1">
                        <p className="text-[10px] text-center sm:text-start sm:text-lg">supply@theflexliving.com</p>
                        <p className="text-sm text-center sm:text-start sm:text-lg">0203 307 4477</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:grid sm:grid-cols-2">
                    <h2 className="font-semibold text-center sm:col-span-1 sm:text-start">For Maintenance:</h2>
                    <div className="flex flex-col sm:col-span-1">
                        <p className="text-[10px] text-center sm:text-start sm:text-lg">maintenance@theflexliving.com</p>
                        <p className="text-sm text-center sm:text-start sm:text-lg">0203 307 4477</p>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Contact;