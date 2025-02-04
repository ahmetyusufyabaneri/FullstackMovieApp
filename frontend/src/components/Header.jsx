import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="flex items-center justify-between px-5 md:px-10 border-b 
    shadow-sm"
    >
      <Link to={"/"} className="flex items-center">
        <img src="/movie-logo.png" width={80} height={80} />
        <h2 className="text-2xl font-bold max-sm:hidden">Movies</h2>
      </Link>
      <Link
        to={"/create"}
        className="border rounded-full py-1 px-4 duration-200 hover:bg-black
      hover:text-white"
      >
        Create Movie
      </Link>
    </header>
  );
};

export default Header;
