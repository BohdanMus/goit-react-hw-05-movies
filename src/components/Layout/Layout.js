import { Link, Outlet } from 'react-router-dom';
// import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <main>
        {/* <Suspense> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </>
  );
};
