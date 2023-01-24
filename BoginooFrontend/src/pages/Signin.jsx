import React from "react";
import logo from "../assets/Boginoo.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import {instance} from "../App"


function Signin(){
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [data, setData] = useState("")
    const createUser = async () => {
      try {
        const res = await instance.post("/users/signin", {
          email: email,
          password: pass,
        });
        setData(res.data.data);
        console.log(res.data.token)
        window.localStorage.setItem("Token", JSON.stringify(res.data.token));
        window.location.replace(`/user/${res.data.data._id}`)
      } catch (error) {
        console.log(error)
      }
      
    };
    return(
        <div className="signinhome">
            <div className="signincont">
            <img className="logo2" src={logo} alt="" />
            <div className="cont2">
                <div className="howitwork">How it Works</div>
                <Link to={".."}>
                <button className="back">Back</button>
                </Link>
                <div className="signin">Sign In</div>
                <div className="email">
                    <div className="email1">Email:</div>
                    <input onChange={(e) => setEmail(e.target.value)} className="email2" placeholder="name@mail.domain" type="text" />
                </div>
                <div className="password">
                    <div className="password1">Password</div>
                    <input onChange={(e) => setPass(e.target.value)} className="password2" placeholder="*********" type="text" />
                </div>
                <button onClick={createUser} className="button2">Enter</button>
                <Link to={"/Signup"}>
                <div className="tosignup">Don't have account?</div>
                </Link>
               

            </div>
            </div>
        </div>
    )
}

export default Signin