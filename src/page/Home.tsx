import { NavBar } from "../layout/Navbar/Navbar";
import { Banner } from "../layout/banner/Banner";
import "./home.scss"

export const Home = () => {
    return (
        <div className="container" >
            <div className="home_navbar" >
                <NavBar />
            </div>
            <div className="home_banner" >
                <Banner />
            </div>
            <div className="home_skill" ></div>
            <div className="home_project" ></div>
            <div className="home_contact" ></div>
        </div>
    )
}
