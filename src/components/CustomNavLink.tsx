import { NavLink } from "react-router-dom";
import { CustomNavLinkProps } from "../intefrace/common"

const CustomNavLink = ({description, path}:CustomNavLinkProps) => {
    const style = "rounded-md px-3 py-2 text-sm font-medium text-[#181A18] hover:bg-gray-200";
    return(
        <NavLink 
            to={path}
            // className="rounded-md px-3 py-2 text-sm font-medium text-[#181A18] hover:bg-gray-200"
            aria-current="page"
            className={({ isActive, isPending }) =>
                isActive ? `${style} bg-gray-200` : `${style}`
            }
        >
            {description}
        </NavLink>
    )
}

export default CustomNavLink;