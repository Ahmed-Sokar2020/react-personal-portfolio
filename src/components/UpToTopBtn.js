import React, { useState, useEffect } from 'react'

export const UpToTopBtn = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 700) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <>
            {showButton && (
                <button
                    className='upToTopBtn'
                    onClick={handleClick}
                >
                    Up
                </button>
            )}
        </>
    )
}
