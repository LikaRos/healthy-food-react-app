import { Suspense } from "react";
import { Outlet } from "react-router";
const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
