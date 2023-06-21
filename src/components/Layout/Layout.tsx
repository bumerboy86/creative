import Header from "../Header/Header.tsx";
import bg from "../../assets/apple-splash.png";
import { Outlet } from "react-router-dom";


const Layout = () => {
    const style = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    return (
        <main className="h-screen w-screen" style={style}>
            <Header />
            <Outlet />
        </main>
    )
}

export default Layout;