import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center h-16 px-4 bg-white border-b border-gray-200 shadow-sm">
      <h1 className="text-3xl font-bold text-gray-600">
        <Link to="/">InsureGuard</Link>
      </h1>
      <nav className="flex items-center gap-4 text-lg font-semibold text-gray-600 mr-10">
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
