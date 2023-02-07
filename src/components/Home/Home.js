import React, { Component } from "react";
import { Table } from "antd";
import TableComp from "../Table/TableComp";
const dataSource = [
  {
    key: "11",
    name: "puja",
    age: 19,
    address: "hosur road",
  },
  {
    key: "12",
    name: "sandeep",
    age: 21,
    address: "btm layout",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
export class Home extends Component {
  render() {
    return (
      <div>
        {/* <Table dataSource={dataSource} columns={columns} />;
        <TableComp /> */}
      </div>
    );
  }
}

export default Home;
