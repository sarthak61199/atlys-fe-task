import { Outlet } from "react-router";
import Navbar from "../components/navbar";

function MainLayout() {
  return (
    <div className="flex h-svh flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
