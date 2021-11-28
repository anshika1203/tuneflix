import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout, Row, Col, Card, Form, Input, Button, Select,Space } from "antd";
import "./editmovie.css";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import axios from "axios";
const { Option } = Select;

export default function EditMovie() {
  const { movieId } = useParams();
  const { dispatch } = useContext(MovieContext);
  const [form] = Form.useForm();
  const [movieData, setMovieData] = useState();

  const  updateMovie = async(values) => {
    const response = await axios.put(`/movies/update/${movieId}`, values
    //  {
    //   headers: {
    //     token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
    //   },
    //   params: {...values}
    // }
    );
    console.log(response)
  }
  const onFinish = (values) => {
    //createMovie(values, dispatch);
    updateMovie(values);
    //window.location.back();
  };

  const onReset = () => {
    form.resetFields();
  };

  const getMovieData = async () => {
    const response = await axios.get(`/movies/find/${movieId}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    console.log("--->", response);
    setMovieData(response?.data);
  };
  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <>
      <div className="newProduct">
        <h1 className="addProductTitle">New Movie</h1>

        <Layout.Content>
          <Row justify="center">
            <Col span={16}>
              <Card>
                {movieData && (
                  <Form
                    form={form}
                    name="newMovies"
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{
                      img: `${movieData?.img}`,
                      imgTitle: `${movieData?.imgTitle}`,
                      imgSm: `${movieData?.imgSm}`,
                      title: `${movieData?.title}`,
                      desc: `${movieData?.desc}`,
                      year: `${movieData?.year}`,
                      genre: `${movieData?.genre}`,
                      duration: `${movieData?.duration}`,
                      limit: `${movieData?.limit}`,
                      isSeries: `${movieData?.isSeries}`,
                      trailer: `${movieData?.trailer}`,
                      video: `${movieData?.video}`,
                    }}
                  >
                    <Row gutter={[40, 20]}>
                      <Col span={12}>
                        <Form.Item name="img" label="Main Poster Image">
                          <Input placeholder="Enter Main Poster URL.." />
                        </Form.Item>
                        <Form.Item
                          name="imgTitle"
                          label="Video Name Poster Image"
                        >
                          <Input placeholder="Enter Main Poster URL.." />
                        </Form.Item>
                        <Form.Item name="imgSm" label="Thumbnail Image">
                          <Input placeholder="Enter Thumbnail Image URL.." />
                        </Form.Item>
                        <Form.Item name="title" label="Title">
                          <Input placeholder="Enter Title Name.." />
                        </Form.Item>
                        <Form.Item name="desc" label="Description">
                          <Input placeholder="Enter Description.." />
                        </Form.Item>
                        <Form.Item name="year" label="Released Year">
                          <Input placeholder="Enter Released Year.." />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item name="genre" label="Genre">
                          <Select defaultValue="genre">
                            <Option value="genre">Genre</Option>
                            <Option value="adventure">Adventure</Option>
                            <Option value="action">Action</Option>
                            <Option value="comedy">Comedy</Option>
                            <Option value="crime">Crime</Option>
                            <Option value="fantasy">Fantasy</Option>
                            <Option value="historical">Historical</Option>
                            <Option value="horror">Horror</Option>
                            <Option value="romance">Romance</Option>
                            <Option value="sci-fi">Sci-fi</Option>
                            <Option value="thriller">Thriller</Option>
                            <Option value="games">Games</Option>
                            <Option value="western">Western</Option>
                            <Option value="animation">Animation</Option>
                            <Option value="drama">Drama</Option>
                            <Option value="documentary">Documentary</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item name="duration" label="Duration">
                          <Input placeholder="Enter Size of video.." />
                        </Form.Item>
                        <Form.Item name="limit" label="Age Limit">
                          <Input placeholder="Enter Age Limit.." />
                        </Form.Item>
                        <Form.Item name="isSeries" label="isSeries">
                          <Select defaultValue="select">
                            <Option value="" disabled>
                              Select{" "}
                            </Option>
                            <Option value="false">No</Option>
                            <Option value="true">Yes</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item name="trailer" label="Trailer Link">
                          <Input placeholder="Enter Trailer Link.." />
                        </Form.Item>
                        <Form.Item name="video" label="Video Link">
                          <Input placeholder="Enter video Link.." />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item>
                      <Space direction="horizontal" size="large">
                        <Button htmlType="reset">Reset</Button>
                        <Button type="primary" htmlType="submit">
                          Add
                        </Button>
                      </Space>
                    </Form.Item>
                  </Form>
                )}
              </Card>
            </Col>
          </Row>
        </Layout.Content>
      </div>
    </>
  );
}
