import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="nav-link text-success">
              Create Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/categories" className="nav-link text-success">
              Manage Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/product" className="nav-link text-success">
              Create Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="nav-link text-success">
              Manage Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/orders" className="nav-link text-success">
              Manage Order
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge bg-success mr-2">Name:</span> {name}
          </li>
          <li className="list-group-item">
            <span className="badge bg-success mr-2">Email:</span> {email}
          </li>
          <li className="list-group-item">
            <span className="badge bg-danger mr-2">Admin Area</span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Base
      className="container bg-success p-3"
      title="AdminDashBoard page"
      description="Manage all of your products here"
    >
      <div className="row">
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
