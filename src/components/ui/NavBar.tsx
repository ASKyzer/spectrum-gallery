import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center h-16 px-4 bg-white border-b border-[--neutral-40] shadow-sm">
      <h1 className="text-3xl font-bold text-[--secondary-90]">
        <Link to="/">InsureGuard</Link>
      </h1>
      <nav className="flex items-center gap-4 text-lg font-semibold text-[--primary-80] mr-10">
        <ul className="flex items-center gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-[--primary-50] ${
                  isActive ? "text-[--primary-50]" : "text-[--primary-80]"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                `hover:text-[--primary-50] ${
                  isActive ? "text-[--primary-50]" : "text-[--primary-80]"
                }`
              }
            >
              Support
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
