<<<<<<< Updated upstream
import React, { useContext } from "react";
import { Layout, Row, Col, Card, Form, Input, Button, Select,Modal } from "antd";
=======
import { useContext, useEffect, useState } from "react";
import { Layout, Row, Col, Card, Form, Input, Button, Select } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
>>>>>>> Stashed changes
import "./newMovie.css";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
const { Option } = Select;

export default function NewMovie() {
<<<<<<< Updated upstream
  const { dispatch } = useContext(MovieContext);
  const [form] = Form.useForm();
=======
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const { dispatch } = useContext(MovieContext);
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
>>>>>>> Stashed changes

  const onFinish = (values) => {
    createMovie(values, dispatch);
    success();
    onReset();
  };

  const success=()=> {
    Modal.success({
      content: 'Data Added Successfully...',
    });
  }
  const onReset = () => {
    form.resetFields();
  };
<<<<<<< Updated upstream
=======
  useEffect(() => {
    setUploaded(uploaded);
  }, [uploaded]);

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(movie);
    debugger;
    createMovie(movie, dispatch);
  };

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const onFinish = (values) => {
    console.log("===============", values);
  };
>>>>>>> Stashed changes
  return (
    <>
      <div className="newProduct">
        <h1 className="addProductTitle">New Movie</h1>
<<<<<<< Updated upstream

=======
        {/* <form className="addProductForm">
          <div className="addProductItem">
            <label>Image</label>
            <input
              type="file"
              id="img"
              name="img"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Title image</label>
            <input
              type="file"
              id="imgTitle"
              name="imgTitle"
              onChange={(e) => setImgTitle(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Thumbnail image</label>
            <input
              type="file"
              id="imgSm"
              name="imgSm"
              onChange={(e) => setImgSm(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="John Wick"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <input
              type="text"
              placeholder="description"
              name="desc"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Year</label>
            <input
              type="text"
              placeholder="Year"
              name="year"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input
              type="text"
              placeholder="Genre"
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Duration</label>
            <input
              type="text"
              placeholder="Duration"
              name="duration"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Limit</label>
            <input
              type="text"
              placeholder="limit"
              name="limit"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Is Series?</label>
            <select name="isSeries" id="isSeries" onChange={handleChange}>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          <div className="addProductItem">
            <label>Trailer</label>
            <input
              type="file"
              name="trailer"
              onChange={(e) => setTrailer(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Video</label>
            <input
              type="file"
              name="video"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </div>

          {uploaded === 5 ? (
            <button className="addProductButton" onClick={handleSubmit}>
              Create
            </button>
          ) : (
            <button className="addProductButton" onClick={handleUpload}>
              Upload
            </button>
          )}
        </form> */}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                      <Form.Item
                        name="imgTitle"
                        label="Video Name Poster Image"
                      >
=======
                      <Form.Item name="imgTitle" label="Video Name Poster Image">
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
                     
                    </Col>
                    <Col span={12}> <Form.Item name="genre" label="Genre">
                        <Select defaultValue="genre">
                          <option value="genre">Genre</option>
                          <option value="adventure">Adventure</option>
                          <option value="action">Action</option>
                          <option value="comedy">Comedy</option>
                          <option value="crime">Crime</option>
                          <option value="fantasy">Fantasy</option>
                          <option value="historical">Historical</option>
                          <option value="horror">Horror</option>
                          <option value="romance">Romance</option>
                          <option value="sci-fi">Sci-fi</option>
                          <option value="thriller">Thriller</option>
                          <option value="games">Games</option>
                          <option value="western">Western</option>
                          <option value="animation">Animation</option>
                          <option value="drama">Drama</option>
                          <option value="documentary">Documentary</option>
>>>>>>> Stashed changes
                        </Select>
                      </Form.Item>
                      <Form.Item name="duration" label="Duration">
                        <Input placeholder="Enter Size of video.." />
                      </Form.Item>
<<<<<<< Updated upstream
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
=======

                      <Form.Item name="limit" label="Age Limit">
                        <Input placeholder="Enter Age Limit.." />
                      </Form.Item>

                      <Form.Item name="isSeries" label="isSeries">
                        <Select defaultValue="select">

                          <option value="" disabled>Select </option>
                          <option value="false">No</option>
                          <option value="true">Yes</option>
                        </Select>
                      </Form.Item>

                      <Form.Item name="trailer" label="Trailer Link">
                        <Input placeholder="Enter Trailer Link.." />
                      </Form.Item>

>>>>>>> Stashed changes
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
