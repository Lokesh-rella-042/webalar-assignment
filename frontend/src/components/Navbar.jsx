import "../App.css";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');  // 🔐 Clear auth token
    alert("Logged out successfully!");
    window.location.href = '/login';   // 🔁 Redirect
  };

  return (
    <nav className="navbar">
      <div className="logo">Webalar</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <button onClick={handleLogout} className="cta">Logout</button>
    </nav>
  );
};

export default Navbar;
