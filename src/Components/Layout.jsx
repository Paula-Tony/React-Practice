import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-[64px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
