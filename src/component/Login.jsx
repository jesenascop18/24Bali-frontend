import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser, reset } from "../features/authSlice";

const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/Homepage");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(loginUser({ Username, Password }));
  };

  return (
    <div class="login-container bg-white">
      <form class="login-form" onSubmit={Auth}>
        <h2>Login</h2>
        <label for="user-id">ID</label>
        <input
          type="text"
          id="user-id"
          name="user-id"
          placeholder="Input your ID here"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Input your Password here"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-between item-center mt-2">
          <a href="#" class="text-[#FF9800]">
            Forgot Password?
          </a>
          <Link className="text-[#FF9800]" to={"/register"}>
            Register
          </Link>
        </div>
        <button type="submit"> {isLoading ? "Loading..." : "Login"}</button>
        {isError && (
          <div className="flex justify-center">
            <p className="bg-red-500 text-white px-2 py-1 text-sm">{message}</p>
          </div>
        )}
      </form>
    </div>
  );
};
export default Login;
