import { useNavigate } from "react-router-dom";

const useSignUp = () => {
    const navigate = useNavigate();

    const onGoToLoginPage = () => {
        navigate("/log-in")
    }

    return{
        onGoToLoginPage
    }
};

export default useSignUp;