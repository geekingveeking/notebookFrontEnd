import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setloginData] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setloginData({ ...loginData, [e.target.title]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const data = await response.json();
    if (data.authToken) {
      localStorage.setItem("token", data.authToken);
      navigate("/");
      setloginData({name:"",email: "", password: ""});

    }
    else{
        alert("invalid email or password. Try again")
        setloginData({email: "", password: ""});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group my-3 col-sm-4">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          value={loginData.email}
          type="email"
          
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          title="email"
          onChange={onChange}
        />
      </div>
      <div className="form-group my-3 col-sm-4">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          title="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={loginData.password}
          onChange={onChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}
