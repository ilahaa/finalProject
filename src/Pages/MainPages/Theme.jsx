import React, { useState, useEffect } from 'react'
const Theme = () => {
    const [darkMode, setDarkMode] = useState(false);
    const ActiveMode = async () => {
        setDarkMode(!darkMode);
        if (darkMode === true) {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
            await localStorage.setItem('Theme', 'light');
        }
        if (darkMode === false) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
            await localStorage.setItem('Theme', 'dark');
        }
    };

    useEffect(() => {
        if (localStorage.getItem('Theme') === 'light') {
            document.body.classList.add('light');

        } else if (localStorage.getItem('Theme') === 'dark') {
            document.body.classList.add('dark');
            setDarkMode(!darkMode);
        }

    }, []);

    return (
        <button onClick={ActiveMode} className='mode ms-3'>
 
        </button>
    )
}

export default Theme