import { useState } from "react"
import { Fade as Hamburger } from "hamburger-react";

export default function NavBar() {
    function handlePress() {
        alert("Thanks for donating!")
    }

    const [isOpen, setOpen] = useState(false);
    
    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li><a href="#home" className="isActive">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Parks</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">News</a></li>
                </ul>
                <hr />
            </div>

            <div className="btn-container">
                <div className="hamburger-menu">
                    <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    size={34}
                    direction="right"
                    color="#0d0d0d"
                    label="show menu"
                     />
                </div>

                <button className="donate-btn" onClick={handlePress}>Donate</button>
            </div>
            <hr className="mobile-line" />

            {
                isOpen && 
                <div className="overlay-menu">
                    <a href="#home" className="isActive">Home</a>
                    <a href="#">About</a>
                    <a href="#">Parks</a>
                    <a href="#">Work</a>
                    <a href="#">News</a>
                </div>
            }
        </nav>
    )
}