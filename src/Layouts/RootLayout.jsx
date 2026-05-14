import { Outlet } from "react-router";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
