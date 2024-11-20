import CustomButton from "../../../components/CustomButtont"
import CustomHeader from "../../../components/CustomHeader"
import useSignUp from "./useSignUp"

const SignUp = () => {
    const {
        onGoToLoginPage
    } = useSignUp()

    return(
        <main  className="flex justify-center items-center p-2 h-lvh">
            <form 
                className="flex flex-col items-center gap-6 sm:gap-8"
                onSubmit={(event) => {
                    event.preventDefault()
                }}
            >
                <CustomHeader 
                    header="Create your account"
                    subHeader="or sign in with Email Gmail Facebook"
                />
                <div className="flex flex-col gap-3 w-full">
                    <input 
                        required
                        placeholder="First Name"
                        type="text"
                        className="bg-[#F2F0F2] w-full px-2 py-1 text-sm rounded-lg"
                    />
                    <input 
                        required
                        placeholder="Last Name"
                        type="text"
                        className="bg-[#F2F0F2] w-full px-2 py-1 text-sm rounded-lg"
                    />
                    <input 
                        required
                        placeholder="Email"
                        type="email"
                        className="bg-[#F2F0F2] w-full px-2 py-1 text-sm rounded-lg"
                    />
                    <input 
                        required
                        placeholder="Password"
                        type="password"
                        className="bg-[#F2F0F2] w-full px-2 py-1 text-sm rounded-lg"
                    />
                </div>
                <div className="flex gap-2">
                    <input 
                        type="checkbox"
                        className="bg-[#F2F0F2] text-[10px]"
                    />
                    <label htmlFor="checkbox" className="text-sm">I want to receive updates about offers, news, city launches, and exclusive deals</label>
                </div>
                <div className="flex justify-center items-center">
                    <CustomButton 
                        description="Create account"
                        type="submit"
                    />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <h6 className="font-semibold">Already have an account?</h6>
                    <span 
                        className="font-semibold hover:cursor-pointer"
                        onClick={onGoToLoginPage}
                    >
                        Log in
                    </span>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm text-center">By creating an account you agree to our</p>
                    <p className="text-sm text-center">Terms of Service and Privacy Policy</p>
                </div>

            </form>
            
        </main>
    )
}

export default SignUp