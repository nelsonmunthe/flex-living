import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const RootLayout = () => {
    return(
        <div className="flex flex-col h-lvh bg-[#FFFFFF]">
            <Navigation />
                <div className="flex-1">
                    <Outlet />
                </div>
            <Footer />
        </div>
    )
}

export default RootLayout;