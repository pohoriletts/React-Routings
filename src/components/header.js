import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="header">
                Galeria
                <div className="navigation">
                 <span><Link to="/">Home</Link></span>
                 <span><Link to="/List">Paintings</Link></span>
                 <span><Link to="/Others">Others</Link></span>
                </div>
            </header>
        </>
    );
}