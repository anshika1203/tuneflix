import "./listList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteList, getLists } from "../../context/listContext/apiCalls";

import { Row, Col, Table } from "antd";
export default function ListList() {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (params) => {
        return (
          <DeleteOutline
            className="productListDelete"
            onClick={() => handleDelete(params.row._id)}
          />
        );
      },
    },
  ];

  return (
    <div className="productList">
      <Row justify="center">
        <Col span={20}>
          <Table columns={columns} dataSource={lists} />
        </Col>
      </Row>
    </div>
  );
}
