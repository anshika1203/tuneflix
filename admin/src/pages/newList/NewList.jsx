import { useContext, useEffect, useState } from "react";
import "./newList.css";
import storage from "../../firebase";
import {
  Layout,
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Select,
  Space,
} from "antd";
import { getMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCalls";
import { useHistory } from "react-router-dom";
const { Option } = Select;
export default function NewList() {
  const [list, setList] = useState(null);
  const history = useHistory();
  const [form] = Form.useForm();
  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    history.push("/lists");
    form.resetFields();
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className="newProduct">
      <Layout.Content>
        <Row justify="center">
          <Col span={16}>
            <Card>
              <Form form={form} name="newMovies" layout="vertical">
                <Row gutter={[40, 20]}>
                  <Col span={24}>
                    <Form.Item name="title" label="Title">
                      <Input
                        type="text"
                        placeholder="Enter Title Name.."
                        name="title"
                        onChange={handleChange}
                      />
                    </Form.Item>
                    <Form.Item
                      name="genre"
                      label="Genre"
                      onChange={handleChange}
                    >
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
                    <Form.Item name="type" label="Type">
                      <Select
                        name="type"
                        placeholder="select type..."
                        onChange={handleChange}
                      >
                        <Option>Type</Option>
                        <Option value="movie">Movie</Option>
                        <Option value="series">Series</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item name="genre" label="Genre">
                      <Select
                        placeholder="Select multiple from given List"
                        mode="multiple"
                        name="content"
                        onChange={handleSelect}
                      >
                        {movies.map((movie) => (
                          <Option key={movie._id} value={movie._id}>
                            {movie.title}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item>
                  <Space>
                    <Button htmlType="reset" onClick={() => onReset()}>
                      Reset
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      onClick={handleSubmit}
                    >
                      Create
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Layout.Content>
    </div>
  );
}
