import React from "react";

const CompanyInfo = ({ data }) => {
  return (
    <div className="container ">
      <h3 style={{"textAlign":"center"}}>{data.name}</h3>
      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>{data.id}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{data.address}</td>
          </tr>
          <tr>
            <td>Phone number</td>
            <td>{data.phoneNumber}</td>
          </tr>
          <tr>
            <td>E-mail address</td>
            <td>{data.emailAddress}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompanyInfo;
