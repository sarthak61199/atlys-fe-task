import logo from "../assets/icons/logo.svg";
import login from "../assets/icons/login.svg";

function Navbar() {
  return (
    <header className="flex justify-between items-center pt-8 pl-10 pr-6">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" />
        <h1 className="font-bold">foo-rum</h1>
      </div>
      <nav>
        <ul className="flex">
          <li className="flex items-center gap-2">
            <span className="text-sm font-semibold">Login</span>
            <img src={login} alt="Login" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
