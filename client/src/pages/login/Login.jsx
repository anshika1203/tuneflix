import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";
import "./login.css";
import Logo from "../../logo.png";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function Login() {
  const color = "red";
  let [loading, setLoading] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    login({ email, password }, dispatch);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
    <div className="login">
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
              <Link to="/register" className="loginText">
                <p>Sign up</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="section flex-space-around">
          <div className="formTag">
            <div className="form">
              <div className="formTitle">
                <h3>Sign In</h3>
              </div>
              <form onSubmit={handleSubmit}>
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
                    value="Login"
                  />
                </div>
              </form>
              <div className="form-group d-flex flex-column">
                <span className="text-light">
                  Already Registered user ?
                  <Link className="clickHereText" to="/register">
                    Click here
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
