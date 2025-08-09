import { useEffect, useState } from "react";
import Loginpage from "./components/LoginPage";
import { MainPage } from "./components/MainPage";
import Navbar from "./components/Navbar";

function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const isRemembered = localStorage.getItem("rememberMe") === "true";
        if (isRemembered) {
            setLoggedIn(false);
        }
    }, []);

    const handleLoginSuccess = (remember: boolean) => {
        setLoggedIn(true);
        if (remember) {
            localStorage.setItem("rememberMe", "true");
        }
    };

    return (
        <div className="container vh-100">
            <Navbar isLoggedIn={loggedIn} />
            {loggedIn ? (
                <MainPage />
            ) : (
                <Loginpage onLoginSuccess={handleLoginSuccess} />
            )}
        </div>
    );
}

export default App;
