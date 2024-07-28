import { useState, useEffect, useRef } from 'react';

import './header.scss';
import Logo from '../../sources/logo.png';
import BackgroundVideo from '../../sources/bg.mp4';

function Header() {

    const [isScroll, setIsScroll] = useState(false);
    const burgerNavRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return (() => {
            window.removeEventListener('scroll', handleScroll);
        });

    }, []);

    const handleOpenNav = () => {
        burgerNavRef.current.classList.toggle('hide');
        setIsScroll(true);
    }
    
    return (
        <>
            <nav className={isScroll ? 'scrolled' : ''}>
                <div className="container">
                    <div className='nav-burger' onClick={handleOpenNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul className='nav-burger__list hide' ref={burgerNavRef}>
                            <li><a href="#home"><img src={Logo} alt="Логотип" /></a></li>
                            <li><a href="#services">Послуги</a></li>
                            <li><a href="#gallery">Галерея</a></li>
                            <li><a href="#advantages">Чому ми</a></li>
                            <li><a href="#reviews">Відгуки</a></li>
                            <li><a href="#contacts">Контакти</a></li>
                        </ul>
                    </div>
                    <ul className='nav'>
                        <li><a href="#home"><img src={Logo} alt="Логотип" /></a></li>
                        <li><a href="#services">Послуги</a></li>
                        <li><a href="#gallery">Галерея</a></li>
                        <li><a href="#advantages">Чому ми</a></li>
                        <li><a href="#reviews">Відгуки</a></li>
                        <li><a href="#contacts">Контакти</a></li>
                    </ul>
                </div>
            </nav>

            <header id="home">
                <video playsInline webkit-playsinline="true" autoPlay loop muted>
                    <source src={BackgroundVideo} type="video/mp4" />
                </video>
                <div className="container">
                    <h1>2K</h1>
                    <p>Автомийка та детейлінг у місті Одеса.</p>
                </div>
            </header>
        </>
    )
}

export default Header;