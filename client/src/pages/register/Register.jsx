import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./register.scss";
import "./register.css";
import { Link } from "react-router-dom";
import Logo from "../../logo.png";
import ScaleLoader from "react-spinners/ScaleLoader";
export default function Register() {
  const color = "red";
  let [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("auth/register", { username, email, password });
      setLoading(false);
      history.push("/login");
    } catch (err) {
      console.log(err.message);
    }
  };
  return loading ? (
    <div className="loader">
      <ScaleLoader
        color={color}
        loading={loading}
        height={90}
        margin={10}
        width={10}
        radius={10}
      />
    </div>
  ) : (
    <div className="registerRoot">
      <div className="register">
        <div className="container">
          <div className="top">
            <div className="wrapper">
              <img
                className="logo"
                onClick={() => history.push("/")}
                src={Logo}
                alt=""
              />
              <div className="loginButton">
                <Link to="/login" className="loginText">
                  <p>Sign In</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="section flex-space-around">
            <div className="formTag">
              <div className="form">
                <div className="formTitle text-light">
                  <h3>Register</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group d-flex flex-column">
                    <input
                      type="text"
                      className="inputElement"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="username"
                      required="true"
                    />
                  </div>
                  <div className="form-group d-flex flex-column">
                    <input
                      type="email"
                      className="inputElement"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="form-group d-flex flex-column">
                    <input
                      type="password"
                      className="inputElement"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="password"
                    />
                  </div>
                  <div className="form-group d-flex flex-column">
                    <input
                      type="submit"
                      className="submitButton"
                      value="Get Started"
                    />
                  </div>
                </form>
                <div className="form-group d-flex flex-column">
                  <span className="text-light">
                    Already Registered user ?
                    <Link className="clickHereText" to="/login">
                      Click here
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="tagLine">
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h1>Unlimited movies, TV shows, and more.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
