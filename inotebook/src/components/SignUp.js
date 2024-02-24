import React ,{useState} from "react";
import { useNavigate } from "react-router";

const SignUp = () => {

    const [credentials, setCredentials] = useState({
        name:"", 
        email:"",
        password:"",
        cpassword:""
    })
    const history = useNavigate()

    const onChange = (e) => {
        setCredentials({...credentials,[e.target.name]:e.target.value});
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        let url = "http://localhost:5000/api/auth/createuser";
        const {name, email, password, cpassword} = credentials;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
            "auth-token": "",
          },
          body: JSON.stringify({ name,email, password }),
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
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name= "name"
            value={credentials.name}
            aria-describedby="emailHelp"
            required
            onChange={onChange}
          />{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name= "email"
            value={credentials.email}
            aria-describedby="emailHelp"
            onChange={onChange}
            required
          />{" "}
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
            required
            minLength={8}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            value={credentials.cpassword}
            onChange={onChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUp;
