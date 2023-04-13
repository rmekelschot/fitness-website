import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div
      className="flex align-items"
      style={{ height: "100vh", justifyContent: "center" }}
    >
      <div className="text-center">
        <h1>404</h1>
        <p style={{ marginBottom: "20px" }}>Page not found</p>
        <Link className="btn btn-block" to={"/"}>
          &larr; Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default NoPage;
