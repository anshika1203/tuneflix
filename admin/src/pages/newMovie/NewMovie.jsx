import React, { useContext } from "react";
import { Layout, Row, Col, Card, Form, Input, Button, Select } from "antd";
import "./newMovie.css";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
const { Option } = Select;

export default function NewMovie() {
  const { dispatch } = useContext(MovieContext);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    createMovie(values, dispatch);
    onReset();
  };

  const onReset = () => {
    form.resetFields();
  };
  return (
    <>
      <div className="newProduct">
        <h1 className="addProductTitle">New Movie</h1>

        <Layout.Content>
          <Row justify="center">
            <Col span={16}>
              <Card>
                <Form
                  form={form}
                  name="newMovies"
                  layout="vertical"
                  onFinish={onFinish}
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
                      </Form.Item>{" "}
                    </Col>
                    <Col span={12}>
                      {" "}
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
                    <Button htmlType="reset">Reset</Button>
                    <Button type="primary" htmlType="submit">
                      Add
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </Layout.Content>
      </div>
    </>
  );
}
