import { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../../assets/images/logo-bmw-m.svg';
import { VscSearch } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showSearch, setShowSearch] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1300);
    const [isSidebar, setIsSidebar] = useState(window.innerWidth <= 800);
    const [sidebarVisible, setSidebarVisible] = useState(false);


    // Toggle mobile menu
    const toggleMenu = () => {
        if (!menuOpen) {
            setMenuOpen(true);
            // Delay adding animation class to allow transition
            setTimeout(() => setSidebarVisible(true), 10);
        } else {
            setSidebarVisible(false);
            // Let animation finish before removing sidebar from DOM
            setTimeout(() => setMenuOpen(false), 300); // match CSS duration
        }
    };

    const toggleDropdown = (menuName) => {
        setOpenDropdown(prev => (prev === menuName ? null : menuName));
    };


    const handleMenuItemClick = () => {
        if (isSidebar || isMobile) {
            setMenuOpen(false);
            setOpenDropdown(null);
        }
    };

    // Responsive check on resize
    useEffect(() => {
        const handleResize = () => {
            const isNowMobile = window.innerWidth <= 1300;
            const isNowSidebar = window.innerWidth <= 800;

            setIsMobile(isNowMobile);
            setIsSidebar(isNowSidebar);

            // 🔐 Close sidebar if screen grows beyond 800px
            if (!isNowSidebar) {
                setMenuOpen(false);
                setOpenDropdown(null);
            }
        };


        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    // Hide/show navbar on scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (Math.abs(currentScrollY - lastScrollY) < 30) return;
            setShowNavbar(currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <>
            <div className={`navbar-container ${showNavbar ? 'show' : 'hide'}`}>
                <div className="navbar-row">
                    {/* Left side logo */}
                    <div className="left-nav">
                        <div className="logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className="divider" />
                        <div className="title-txt">
                            <p>The <strong>Ultimate</strong><br />Driving Machine</p>
                        </div>
                    </div>

                    {/* Right side nav */}
                    <div className="right-nav">
                        {!isMobile && !showSearch && (
                            <div className="nav-links">
                                <ul>
                                    <li>Home</li>
                                    <li>Magazine</li>
                                    <li>Models</li>

                                    <li className="dropdown">
                                        <div className="dropdown-wrapper">
                                            <span className="dropdown-title">
                                                M Motorsport <IoIosArrowDown className="arrow-icon" />
                                            </span>
                                            <ul className="dropdown-menu">
                                                <li>Overview</li>
                                                <li>News & Stories</li>
                                                <li>Race Cars</li>
                                                <li>Works Drivers</li>
                                                <li>Racing Series</li>
                                                <li>Racing Calendar 2025</li>
                                                <li>M Sports Trophy</li>
                                                <li>M Racing Academy</li>
                                                <li>Automotive Gaming</li>
                                                <li>Behind the scenes – Documentary</li>
                                                <li>Wallpaper</li>
                                                <li>Partners</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="dropdown">
                                        <div className="dropdown-wrapper">
                                            <span className="dropdown-title">
                                                M Driving Experience <IoIosArrowDown className="arrow-icon" />
                                            </span>
                                            <ul className="dropdown-menu">
                                                <li>Track Experience</li>
                                                <li>Drift Training</li>
                                                <li>Off-road</li>
                                                <li>Driver Safety</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="dropdown">
                                        <div className="dropdown-wrapper">
                                            <span className="dropdown-title">
                                                More <IoIosArrowDown className="arrow-icon" />
                                            </span>
                                            <ul className="dropdown-menu">
                                                <li>BMW Group</li>
                                                <li>BMW Connected</li>
                                                <li>Events</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {showSearch && (
                            <div className="search-bar">
                                <input type="text" placeholder="Search..." />
                            </div>
                        )}

                        <div className="nav-searcher" onClick={() => setShowSearch(!showSearch)}>
                            <VscSearch style={{ fontSize: '21px' }} />
                        </div>

                        {isMobile && (
                            <div className="hamburger-icon" onClick={toggleMenu}>
                                {menuOpen ? <MdClose size={30} /> : <RxHamburgerMenu size={30} />}
                            </div>
                        )}

                    </div>
                </div>

                {/* Mobile Sidebar */}
                {!isSidebar && isMobile && menuOpen && (
                    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

                        <ul>
                            <div className="mobile-search-bar">
                                <input type="text" placeholder="Search" className="mobile-search-input" />
                                <div className="mobile-search-icon">
                                    <VscSearch style={{ fontSize: '20px', color: 'black' }} />
                                </div>
                            </div>

                            <li onClick={handleMenuItemClick}>Home</li>
                            <li onClick={handleMenuItemClick}>Magazine</li>
                            <li onClick={handleMenuItemClick}>Models</li>

                            <li onClick={() => toggleDropdown('motorsport')}>
                                M Motorsport <IoIosArrowDown className={`arrow-icon ${openDropdown === 'motorsport' ? 'rotate' : ''}`} />
                            </li>
                            {openDropdown === 'motorsport' && (
                                <ul className={`mobile-submenu ${openDropdown === 'motorsport' ? 'show' : ''}`}>
                                    <li onClick={handleMenuItemClick}>Overview</li>
                                    <li onClick={handleMenuItemClick}>News & Stories</li>
                                    <li onClick={handleMenuItemClick}>Race Cars</li>
                                    <li onClick={handleMenuItemClick}>Works Drivers</li>
                                    <li onClick={handleMenuItemClick}>Racing Series</li>
                                    <li onClick={handleMenuItemClick}>Racing Calendar 2025</li>
                                    <li onClick={handleMenuItemClick}>M Sports Trophy</li>
                                    <li onClick={handleMenuItemClick}>M Racing Academy</li>
                                    <li onClick={handleMenuItemClick}>Automotive Gaming</li>
                                    <li onClick={handleMenuItemClick}>Behind the scenes – Documentary</li>
                                    <li onClick={handleMenuItemClick}>Wallpaper</li>
                                    <li onClick={handleMenuItemClick}>Partners</li>
                                </ul>
                            )}

                            <li onClick={() => toggleDropdown('experience')}>
                                M Driving Experience <IoIosArrowDown className={`arrow-icon ${openDropdown === 'experience' ? 'rotate' : ''}`} />
                            </li>
                            {openDropdown === 'experience' && (
                                <ul className="mobile-submenu">
                                    <li onClick={handleMenuItemClick}>Track Experience</li>
                                    <li onClick={handleMenuItemClick}>Drift Training</li>
                                    <li onClick={handleMenuItemClick}>Off-road</li>
                                    <li onClick={handleMenuItemClick}>Driver Safety</li>
                                </ul>
                            )}


                            <li onClick={() => toggleDropdown('more')}>
                                More <IoIosArrowDown className={`arrow-icon ${openDropdown === 'more' ? 'rotate' : ''}`} />
                            </li>
                            {openDropdown === 'more' && (
                                <ul className="mobile-submenu">
                                    <li onClick={handleMenuItemClick}>BMW Group</li>
                                    <li onClick={handleMenuItemClick}>BMW Connected</li>
                                    <li onClick={handleMenuItemClick}>Events</li>
                                </ul>
                            )}

                        </ul>
                    </div>
                )}
            </div>

            {/* Sidebar only for <=800px */}
            {isSidebar && menuOpen && (
                <>
                    <div className={`sidebar-overlay ${sidebarVisible ? 'show' : ''}`} onClick={toggleMenu} />
                    <div className={`sidebar-container ${sidebarVisible ? 'open' : ''}`}>
                        <div className="sidebar-wrapper">
                            <div className="sidebar-title">
                                <p>The <strong>Ultimate</strong><br />Driving Machine</p>
                            </div>
                            <div className="sidebar-close-icon" onClick={toggleMenu}>
                                <AiOutlineClose size={30} />
                            </div>
                        </div>
                        <ul className="sidebar-menu">
                            <div className="sidebar-search-bar">
                                <div className="sidebar-search-box">
                                    <input type="text" placeholder="Search" className="sidebar-search-input" />
                                </div>
                                <div className="sidebar-search-icon">
                                    <VscSearch style={{ fontSize: '20px', color: 'black' }} />
                                </div>
                            </div>



                            <li onClick={handleMenuItemClick}>Home</li>
                            <li onClick={handleMenuItemClick}>Magazine</li>
                            <li onClick={handleMenuItemClick}>Models</li>

                            <li onClick={() => toggleDropdown('motorsport')}>
                                M Motorsport <IoIosArrowDown className={`arrow-icon ${openDropdown === 'motorsport' ? 'rotate' : ''}`} />
                            </li>
                            {openDropdown === 'motorsport' && (
                                <ul className="sidebar-submenu">
                                    <li onClick={handleMenuItemClick}>Overview</li>
                                    <li onClick={handleMenuItemClick}>News & Stories</li>
                                    <li onClick={handleMenuItemClick}>Race Cars</li>
                                    <li onClick={handleMenuItemClick}>Works Drivers</li>
                                    <li onClick={handleMenuItemClick}>Racing Series</li>
                                    <li onClick={handleMenuItemClick}>Racing Calendar 2025</li>
                                    <li onClick={handleMenuItemClick}>M Sports Trophy</li>
                                    <li onClick={handleMenuItemClick}>M Racing Academy</li>
                                    <li onClick={handleMenuItemClick}>Automotive Gaming</li>
                                    <li onClick={handleMenuItemClick}>Behind the scenes – Documentary</li>
                                    <li onClick={handleMenuItemClick}>Wallpaper</li>
                                    <li onClick={handleMenuItemClick}>Partners</li>
                                </ul>
                            )}

                            <li onClick={() => toggleDropdown('experience')}>
                                M Driving Experience <IoIosArrowDown className={`arrow-icon ${openDropdown === 'experience' ? 'rotate' : ''}`} />
                            </li>
                            {openDropdown === 'experience' && (
                                <ul className="sidebar-submenu">
                                    <li onClick={handleMenuItemClick}>Track Experience</li>
                                    <li onClick={handleMenuItemClick}>Drift Training</li>
                                    <li onClick={handleMenuItemClick}>Off-road</li>
                                    <li onClick={handleMenuItemClick}>Driver Safety</li>
                                </ul>
                            )}

                            <li onClick={() => toggleDropdown('more')}>
                                More <IoIosArrowDown className={`arrow-icon ${openDropdown === 'more' ? 'rotate' : ''}`} />
                            </li>
                            {openDropdown === 'more' && (
                                <ul className="sidebar-submenu">
                                    <li onClick={handleMenuItemClick}>BMW Group</li>
                                    <li onClick={handleMenuItemClick}>BMW Connected</li>
                                    <li onClick={handleMenuItemClick}>Events</li>
                                </ul>
                            )}
                        </ul>
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;
