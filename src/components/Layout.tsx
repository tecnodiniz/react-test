import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>Olá</nav>
      <Link to="/">Home</Link>
      <Link to="/about/1">About</Link>

      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Layout;
