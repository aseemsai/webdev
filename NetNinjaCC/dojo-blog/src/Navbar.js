const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/create">New Blog</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;