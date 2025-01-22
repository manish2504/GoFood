import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [credentials, setcredentials] = useState({
      email: "",
      password: "",
    });
    let navigate= useNavigate()
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }));
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log('json',json);
      if (!json.Success) {
        alert("Invalid Credentials");
      }
      if(json.Success){
        navigate("/");
      }
    };
  
    const change = (e) => {
      setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  return (
    <>
      <Navbar/>
      <div className="container">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={credentials.email}
                    onChange={change}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={credentials.password}
                    onChange={change}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <Link to="/createuser" className="m-3 btn btn-danger">
                  I'm a new user
                </Link>
              </form>
            </div>
      <Footer/>
    </>
  )
}

export default Login