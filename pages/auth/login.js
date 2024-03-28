import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    const [theme, setTheme] = useState(false)
    const toggleTheme = () => setTheme(!theme)

    return (
        <>
        <div id="chat-window" className={theme ? 'dark-theme' : 'light'} >
        <div className="flex justify-center items-center min-h-screen ">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
            <div className="wrapper  backdrop-filter backdrop-blur-md border-2 border-white border-opacity-30 rounded-lg shadow-md flex justify-center items-center ">
                <div className="form-box">
                    <ion-icon name="close" className="icon w-8 h-8 bg-black bg-opacity-50 rounded-full absolute top-0 right-0"></ion-icon>
                    <h2 className="text-3xl text-black mb-6 font-extrabold font-sans">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="mail"></ion-icon>
                            </span>
                            <input
                                className="mail w-full h-12 bg-transparent border-b-2 border-black focus:outline-none text-black"
                                id='email'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="lock-closed"></ion-icon>
                            </span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full h-12 bg-transparent border-b-2 border-black focus:outline-none text-black"
                                required
                            />
                            <label>Password</label>
                        </div>
                        <div className="remember">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="mr-2 cursor-pointer"
                                />
                                Remember me
                            </label>
                            <a href="#" className="text-black">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="login-register">
                            <p>Don't have an account yet? <Link href="register" className="register-link text-black font-semibold">Register now.</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default LoginPage;
