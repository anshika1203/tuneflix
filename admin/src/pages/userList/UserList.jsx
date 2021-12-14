import "./userList.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Table } from "antd";
export default function UserList() {
  const [data, setData] = useState([]);
  const getUserList = async () => {
    const response = await axios.get(`/users/`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    setData(response?.data);
    console.log(data, "users");
  };
  useEffect(() => {
    getUserList();
  }, []);

  const columns = [
    {
      title: "userName",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "subscribed",
      dataIndex: "subscribed",
      key: "subscribed",
    },   
  ];

  return (
    <div className="userList">
      <Row>
        <Col span={24}>
          <Table dataSource={data} columns={columns} />
        </Col>
      </Row>
    </div>
  );
}
