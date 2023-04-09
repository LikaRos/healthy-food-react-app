import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div>
        <p>
          Page not found go to the
          <Link to="/http://localhost:3000">Open home page</Link>
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
