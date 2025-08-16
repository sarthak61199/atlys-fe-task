import { Link, useLocation } from "react-router";
import login from "../assets/icons/login.svg";
import logo from "../assets/icons/logo.svg";

function Navbar() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/sign-in" || location.pathname === "/sign-up";

  return (
    <header className="flex justify-between items-center pt-4 md:pt-8 px-4 md:pl-10 md:pr-6">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-6 h-6 md:w-auto md:h-auto" />
        <h1 className="font-bold text-sm md:text-base">foo-rum</h1>
      </div>
      <nav>
        <ul className="flex">
          {!isAuthPage ? (
            <li>
              <Link to="/sign-in" className="flex items-center gap-2">
                <span className="text-xs md:text-sm font-semibold">Login</span>
                <img src={login} alt="Login" className="w-4 h-4 md:w-auto md:h-auto" />
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/" className="flex items-center gap-2">
                <span className="text-xs md:text-sm font-semibold">Back to home</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
