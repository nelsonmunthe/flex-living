import { InformationCardProps } from "../intefrace/common";

const InformationCard = ({header, content, image}:InformationCardProps) => {
    return(
        <div className="bg-cardBackground rounded-xl py-4 px-6">
            <img src={image} alt="calender-icon" className="my-2 h-8"/>
            <h5 className="font-semibold text-lg">{header}</h5>
            <p className="text-sm">{content}</p>
        </div>
    )
};

export default InformationCard;