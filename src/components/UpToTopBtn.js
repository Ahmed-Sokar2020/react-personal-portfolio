import React, { useState, useEffect } from 'react'

export const UpToTopBtn = () => {
    const [showButton, setShowButton] = useState(false);

    let style = {
        display: 'block',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #fff',
        borderRadius: '10px',
        background: '#5630B5',
        color: '#fff',
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
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
            <button
            className='upToTopBtn' 
            onClick={handleClick}
            {...showButton ? style={style} : '' }
            > Up
            </button>
        </>
    )
}
