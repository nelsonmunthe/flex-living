import { useState } from "react";

const useCheckOut = () => {
    const [confirm, setConfirm] = useState<boolean>(false)

    const onHandleConfirmAndPay = () => {
        console.log('onHandleConfirmAndPay', confirm)
        setConfirm(prev => !prev)
    }

    return{
        onHandleConfirmAndPay,
        confirm
    }
}

export default useCheckOut;
