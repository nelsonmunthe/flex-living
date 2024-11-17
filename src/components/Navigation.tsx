import { useState } from "react"
import logo from "../assets/images/Logo.png"
import navigationMenu from "../assets/images/menu-navigation.png"
import closeMenu from "../assets/images/close-menu.png"
import { NavLink } from "react-router-dom"

const Navigation = () => {
    const [menu, setMenu] = useState<boolean>(false);

    const onChangeMenu = () => {
        setMenu(prev => !prev)
    }

    return(
    <nav className="sticky top-0 z-50 bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <img className="h-8 w-auto"  src={logo} alt="company logo"/>
                </div>
                <div className="flex flex-1 items-center justify-end">
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4 ">
                            <NavLink to="#" className="rounded-md px-3 py-2 text-sm font-medium text-white" aria-current="page">Dashboard</NavLink>
                            <NavLink to="#" className="rounded-md px-3 py-2 text-sm font-medium text-[#181A18] hover:bg-gray-700">Team</NavLink>
                            <NavLink to="#" className="rounded-md px-3 py-2 text-sm font-medium text-[#181A18] hover:bg-gray-700">Projects</NavLink>
                            <NavLink to="#" className="rounded-md px-3 py-2 text-sm font-medium text-[#181A18] hover:bg-gray-700">Calendar</NavLink>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    {/* <!-- Mobile menu button--> */}
                    <button 
                        type="button" 
                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
                        onClick={onChangeMenu}
                    >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        <img  className="h-4 w-auto" src={menu ? closeMenu : navigationMenu} alt="menu-navigation" />
                        {/* <!--
                            Icon when menu is closed.

                            Menu open: "hidden", Menu closed: "block"
                        --> */}
                        {/* <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg> */}
                        {/* <!--
                            Icon when menu is open.

                            Menu open: "block", Menu closed: "hidden"
                        --> */}
                        <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        { menu && <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <NavLink to={""} className="block rounded-md px-3 py-2 text-base font-medium text-[#181A18] hover:bg-gray-50 text-center" aria-current="page">Dashboard</NavLink>
                    <NavLink to="#" className="block rounded-md px-3 py-2 text-base font-medium text-[#181A18] hover:bg-gray-50 text-center ">Team</NavLink>
                    <NavLink to="#" className="block rounded-md px-3 py-2 text-base font-medium text-[#181A18] hover:bg-gray-50 text-center">Projects</NavLink>
                    <NavLink to="#" className="block rounded-md px-3 py-2 text-base font-medium text-[#181A18] hover:bg-gray-50 text-center">Calendar</NavLink>
                </div>
            </div>
        }
            
        </nav>
    )
}

export default Navigation