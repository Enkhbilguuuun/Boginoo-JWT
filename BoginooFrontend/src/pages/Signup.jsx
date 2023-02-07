import React from "react";
import logo from "../assets/Boginoo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { instance } from "../App";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [role, setRole] = useState()
  const navigate = useNavigate()
  const createUser = async () => {
    const res = await instance.post("/users", {
      email: email,
      password: pass,
      role: role
    });
    alert("amjilttai burtguullee");
    navigate("/signin")
  }

  return (
    <div className="signinhome">
      <div className="signincont">
        <img className="logo2" src={logo} alt="" />
        <div className="cont2">
          <div className="howitwork">How it Works</div>
          <Link to={".."}>
            <button className="back">Back</button>
          </Link>
          <div className="signin">Sign up</div>
          <div className="email">
            <div className="email1">Email:</div>
            <input
               onChange={(e) => setEmail(e.target.value)}
              className="email2"
              placeholder="name@mail.domain"
              type="text"
            />
          </div>
          <div className="password">
            <div className="password1">Password</div>
            <input  onChange={(e) => setPass(e.target.value)} className="password2" placeholder="*********" type="text" />
          </div>
          <div>
            <div>role</div>
            <input  onChange={(e) => setRole(e.target.value)} className="password2" placeholder="role" type="text" />
          </div>
          <div className="password4">
            <div className="password1">Password</div>
            <input className="password2" placeholder="*********" type="text" />
          </div>
          <button onClick={createUser} className="button3">Sign Up</button>
        </div>
      </div>
    </div>
  )}


export default Signup;
