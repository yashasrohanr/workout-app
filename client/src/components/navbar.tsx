import Lottie from "lottie-react";
import LottieAnimation from "../static/main_animation.json";
import loginImage from "../static/icons/login-icon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

interface NavbarProps {
    isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    {isLoggedIn ? (
                        <Lottie
                            animationData={LottieAnimation}
                            loop={true}
                            style={{ height: "40px" }}
                        ></Lottie>
                    ) : (
                        <img
                            src={loginImage}
                            style={{ maxHeight: "40px" }}
                        ></img>
                    )}
                </a>
                <span className="ms-2 fw-bold">Workout App</span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Link
                            </a>
                        </li>
                    </ul>
                    {isLoggedIn && (
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
