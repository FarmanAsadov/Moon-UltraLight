import { Outlet } from "react-router-dom";
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
