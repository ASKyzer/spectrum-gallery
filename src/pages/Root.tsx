import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <>
      <NavBar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}
