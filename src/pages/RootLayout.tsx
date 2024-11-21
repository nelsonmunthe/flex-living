import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const RootLayout = () => {
    return(
        <div className="flex flex-col h-lvh bg-[#FFFFFF]">
            <Navigation />
                <main className="flex-1 mt-20">
                    <Outlet />
                </main>
            <Footer />
        </div>
    )
}

export default RootLayout;