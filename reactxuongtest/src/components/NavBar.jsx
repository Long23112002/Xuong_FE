import { Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";

const NavBar = () => {
  return (
    <div className="container d-flex  " style={{ margin: "10px 0 " }}>
      <div style={{ marginRight: "10px" }}>
        <label>Name</label>
        <Input placeholder="Name" />
      </div>

      <div style={{ marginRight: "10px" }}>
        <label>Price</label>
        <Input placeholder="Price" />
      </div>

      <div style={{ marginRight: "10px" }}>
        <div>Brand</div>
        <Select placeholder="Select brand">
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
        </Select>
      </div>

      <div style={{ marginRight: "10px" }}>
        <div>Category</div>
        <Select placeholder="Select Category">
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
        </Select>
      </div>

      <div style={{ marginRight: "10px" }}>
        <div>Status</div>
        <Select placeholder="Select Status">
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
        </Select>
      </div>

      <div className="btn btn-primary">Tim Kiem</div>
    </div>
  );
};

export default NavBar;
