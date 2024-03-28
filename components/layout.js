// components/Layout.js
import { useState } from 'react';
import Navbar from 'Navbar';

export default function Layout({ children }) {
    const [theme, setTheme] = useState(false);
    const toggleTheme = () => setTheme(!theme);

    return (
        <div id="layout" className={theme ? 'light' : 'dark-theme'}>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <div className="content">{children}</div>
        </div>
    );
}
