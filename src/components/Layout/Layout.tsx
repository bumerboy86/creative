import Header from "../Header/Header.tsx";
import bg from "../../assets/apple-splash.png";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.tsx";


const Layout = () => {
    const style = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    return (
        <main className="min-h-screen min-w-screen" style={style}>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Layout;