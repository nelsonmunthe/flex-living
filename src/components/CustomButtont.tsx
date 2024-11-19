type CustomButtonProps = {
    description: string,
    styling?: string,
    onHandleClick?: () => void,
    type?: "submit" | "reset" | "button"
}

const CustomButton = (
    {
        description, 
        styling,
        onHandleClick,
        type
    } :CustomButtonProps) => {
    
    return(
        <button
            className={styling ? styling : 'text-white bg-buttonBackground py-2 px-4 rounded-2xl text-sm font-semibold'}
            onClick={onHandleClick}
            type={type ?? 'button'}
        >
            {description}
        </button>
    )
}

export default CustomButton;