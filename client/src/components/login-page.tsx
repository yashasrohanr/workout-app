import React, { FormEvent, useState } from "react";
import loginIcon from "../static/icons/login-icon.png";

interface LoginResponse {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export interface LoginPageProps {
    onLoginSuccess: (rememberMe: boolean) => void;
}

export const delay = (timeInMillis: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, timeInMillis));
};

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            /*const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data: LoginResponse | { error: string } =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    (data as { error: string }).error || "Login failed"
                );
            }

            const { token } = data as LoginResponse;
            */
            const token = "123";
            localStorage.setItem("token", token);
            alert("Login successful!");
            onLoginSuccess(rememberMe);
        } catch (error) {
            if (error instanceof Error) setError(error.message);
            else setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100 bg-light">
            <form
                className="w-100"
                style={{ maxWidth: "330px" }}
                onSubmit={handleFormSubmit}
            >
                <div className="text-center mb-4">
                    <img
                        className="mb-2"
                        src={loginIcon}
                        alt="logo"
                        width="100"
                        height="100"
                    />
                    <h1 className="h3 mb-3 fw-normal">Sign in</h1>
                </div>

                <div className="form-floating mb-2">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="mb-3">
                    <div className="form-check text-start">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value="remember-me"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => {
                                setRememberMe(e.target.checked);
                            }}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                        >
                            Remember me
                        </label>
                    </div>
                </div>
                {error && (
                    <div
                        className="alert alert-danger py-1 text-center"
                        role="alert"
                    >
                        {error}
                    </div>
                )}
                <button
                    className="btn btn-primary w-100 py-2"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Signing you in" : "Sign in"}
                </button>
                <p className="mt-5 mb-3 text-muted text-center">&copy; 2025</p>
            </form>
        </div>
    );
};

export default LoginPage;
