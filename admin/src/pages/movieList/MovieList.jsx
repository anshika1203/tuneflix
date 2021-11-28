import "./movieList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";
import { Row, Col, Table } from "antd";
import axios from "axios";
export default function MovieList() {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  const columns = [
    {
      title: "id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Title Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "limit",
      dataIndex: "limit",
      key: "limit",
    },
    {
      title: "Relase year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/movie/" + params.row._id, movie: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  console.log(movies);
  return (
    <div className="productList">
      {/* <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      /> */}
      <Row>
        <Col span={24}>
          <Table dataSource={movies} columns={columns} />
        </Col>
      </Row>
    </div>
  );
}
