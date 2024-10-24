import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/NavBar";

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
