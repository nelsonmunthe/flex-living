import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const navigate = useNavigate();

    const onGoToSignUpPage = () => {
        navigate('/sign-up')
    }

    return{
        onGoToSignUpPage
    }
}

export default useLogin;