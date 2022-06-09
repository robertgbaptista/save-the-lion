
export default function NavBar() {
    function handlePress() {
        alert("Thanks for donating!")
    }
    
    return (
        <nav>
            <div className="nav-container">
                <ul className="mobile-menu">
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
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </div>

                <button className="donate-btn" onClick={handlePress}>Donate</button>
            </div>

            <hr className="mobile-line" />
        </nav>
    )
}