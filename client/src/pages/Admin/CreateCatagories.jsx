import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";

const CreateCatagories = () => {
  return (
    <Layout title={"Admin Create Catagories"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">users</div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCatagories;
