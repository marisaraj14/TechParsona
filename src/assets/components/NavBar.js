import Logo from "../media/logo.png";

export const NavBar = () => {
  return (
    <div className="nav-container">
      <img src={Logo} alt="Logo" className="nav-logo"/>
      <div>
        <a className="nav-button" href="mailto:admin@techparsona.com">Reach Us</a>
      </div>
    </div>
  );
};
