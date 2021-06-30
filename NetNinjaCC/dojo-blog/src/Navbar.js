import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1><Link to="/">The Dojo Blog</Link></h1>
            <div className="links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create">New Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;