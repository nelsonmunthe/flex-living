type CustomHeaderProps = {
    header: string,
    subHeader: string
}

const CustomHeader = ({header, subHeader}:CustomHeaderProps) => {
    return(
        <div className="flex flex-col justify-center items-center gap-1 lg:my-4 lg:px[300px]">
            <h2 className="font-semibold text-lg text-center lg:text-2xl">{header}</h2>
            {subHeader &&  <p className="text-sm text-center lg:max-w-[600px]">{subHeader}</p>}
        </div>
    )
}

export default CustomHeader;