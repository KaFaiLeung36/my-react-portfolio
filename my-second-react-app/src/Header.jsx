import React from "react";


function Header(){
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header id="Header">
            <div className="Header-container">
                <h1>Kenny Leung</h1>
                <div className="hamburger" onClick={toggleMenu}>☰</div>
                <nav className={`nav-links ${isOpen ? 'open': ''}`}>
                    <ul>
                        <li><a href="#Home" onClick={() => setIsOpen(false)}>Home</a></li>
                        <li><a href="#About" onClick={() => setIsOpen(false)}>About</a></li>
                        <li><a href="#Project" onClick={() => setIsOpen(false)}>Projects</a></li>
                        <li><a href="#Contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    </ul>
                </nav>
                </div>
                
         </header>
       
    );
}

export default Header;