import { Link, useLocation } from "react-router";
import login from "../assets/icons/login.svg";
import logo from "../assets/icons/logo.svg";

function Navbar() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/sign-in" || location.pathname === "/sign-up";

  return (
    <header className="flex justify-between items-center pt-8 pl-10 pr-6">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" />
        <h1 className="font-bold">foo-rum</h1>
      </div>
      <nav>
        <ul className="flex">
          {!isAuthPage ? (
            <li>
              <Link to="/sign-in" className="flex items-center gap-2">
                <span className="text-sm font-semibold">Login</span>
                <img src={login} alt="Login" />
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/" className="flex items-center gap-2">
                <span className="text-sm font-semibold">Back to home</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
