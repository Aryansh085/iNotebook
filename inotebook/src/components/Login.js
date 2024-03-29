import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [credentials, setCredentials] = useState({email:"",password:""});
  const history = useNavigate()
  const onChange = (e) => {
    setCredentials({...credentials,[e.target.name]:e.target.value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = "http://localhost:5000/api/auth/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
        "auth-token": "",
      },
      body: JSON.stringify({ email: credentials.email, password:credentials.password }),
    });
    const json = await response.json();
    // console.log(json)
    if(json.success){
        localStorage.setItem('token',json.token)
        history("/")
    }   else{
        alert("Invalid credentials")
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
