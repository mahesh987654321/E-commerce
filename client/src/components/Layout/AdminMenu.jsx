import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "./Layout";

const AdminMenu = () => {
  return (
    <div>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>
            <NavLink to={"/dashboard/admin"}>Admin Panel</NavLink>
          </h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action "
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
