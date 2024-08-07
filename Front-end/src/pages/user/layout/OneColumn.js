import { Link, Outlet } from "react-router-dom";
import '../../../assets/css/user/app.css';
import '../../../assets/css/user/home.css'
import Footer from "../../../components/user/footer/Footer";
import Header from "../../../components/user/Header";

export default function OneColumn() {
    return (
        <>
            <div className="n_skeletal">
                <Header />
                <div id="main-content" class="container" role="main">
                    <Outlet></Outlet>
                </div>
                <Footer />
            </div>
        </>
    )
}