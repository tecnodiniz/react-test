import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>

        <Link to="/about/1">About</Link>
      </nav>

      <div className="grid">
        <Outlet />
      </div>
    </>
  );
}
export default Layout;
