import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4 shadow bg-gray-100 dark:bg-gray-900">
        <h1 className="text-xl font-bold">QuickQuotes</h1>
        <div className="flex items-center space-x-4">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
        <ThemeToggle />
      </nav>
    </>
  );
};

export default Navbar;
