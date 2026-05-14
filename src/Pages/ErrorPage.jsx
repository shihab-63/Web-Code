import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Navbar from "../Components/Shared/Navbar";
import pageNotFaund from "../assets/logos/404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div
      className="flex flex-col h-screen bg-linear-to-r from-[#5ca0e9] to-[#3a7bd53d]"
    >
      <Navbar />
      <div className="flex-1 flex justify-center items-center flex-col gap-4">
        <img
          src={pageNotFaund}
          alt="Page Not Found"
          className="w-80 md:w-130"
        />
        <Link
          to={"/"}
          className="btn btn-primary px-12 text-base md:text-lg group"
        >
          <MdOutlineKeyboardBackspace
            size={22}
            className="group-hover:-translate-x-2 transition-all duration-500"
          />{" "}
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
