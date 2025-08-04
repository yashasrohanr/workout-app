import { useEffect, useState } from "react";
import Loginpage from "./components/login-page";
import { MainPage } from "./components/main-page";

function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(true);

    useEffect(() => {
        const isRemembered = localStorage.getItem("rememberMe") === "true";
        if (isRemembered) {
            setLoggedIn(true);
        }
    }, []);

    const handleLoginSuccess = (remember: boolean) => {
        setLoggedIn(true);
        if (remember) {
            localStorage.setItem("rememberMe", "true");
        }
    };

    return (
        <div className="container mt-5">
            {loggedIn ? (
                <MainPage />
            ) : (
                <Loginpage onLoginSuccess={handleLoginSuccess} />
            )}
        </div>
    );
}

export default App;
