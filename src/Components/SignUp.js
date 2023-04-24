import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  const [loginData, setloginData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword:"",
  });
  const onChange = (e) => {
    setloginData({ ...loginData, [e.target.title]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(loginData.password===loginData.cpassword){
       const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
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
        console.log(data);
    }
}
else{
    alert("password doesnt match")
}
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group my-3 col-sm-4">
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputname"
            placeholder="Enter name"
            title="name"
            onChange={onChange}
            value={loginData.name}
            minLength={2} required

          />
        </div>
        <div className="form-group my-3 col-sm-4">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            title="email"
            onChange={onChange}
            value={loginData.email} 
          />
        </div>
        <div className="form-group my-2 col-sm-4">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            title="password"
            onChange={onChange}
            value={loginData.password}
            minLength={5} required

          />
        </div>
        <div className="form-group my-2 col-sm-4">
          <label htmlFor="exampleInputPassword2">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Password"
            title="cpassword"
            onChange={onChange}
            value={loginData.cpassword}
            minLength={5} required  
          />
        </div>

        <button type="submit" className="btn btn-primary my-3">
          SignUp
        </button>
      </form>
    </div>
  );
}
