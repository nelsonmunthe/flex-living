import { useNavigate } from "react-router-dom"
import CustomButton from "../components/CustomButtont"

const ErrorPage = () => {
    const navigate = useNavigate();

    const onBackToPrevPage = () => {
        navigate(-1)
    }

    return(
        <main className="flex justify-center items-center h-lvh">
            <div className="flex  flex-col justify-center items-center gap-4">
                <h1 className="font-semibold text-3xl">404 Not Found</h1>
                <span className="">Your visited page not found. You may go home page.</span>
                <CustomButton 
                    description="Back to previous page"
                    onHandleClick={onBackToPrevPage}
                />
            </div>

        </main>
    )
}

export default ErrorPage