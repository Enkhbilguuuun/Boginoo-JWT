import logo from "../assets/Boginoo.png";
import React from "react";
import { useState } from "react";
import Result from "./Result";
import { instance } from "../App";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState();
  const [data2, setData2] = useState();

  const getData = async () => {
    const res = await instance.post("/links", {
      Longlink: data2,
    });
    setData(res.data.data.Shortlink);
  };

  return (
    <div>
        <div className="tutorial">How it works</div>
        <Link to={"/signin"}>
        <button className="login">Sign In</button>
        </Link>
      <div className="Home">
        <div className="cont">
          <img className="logo" src={logo} alt="" />
          <div>
            <input
              onChange={(e) => setData2(e.target.value)}
              className="input"
              placeholder="enter link"
              type="text"
            />
            <button onClick={getData} className="button">
              Shorten
            </button>
          </div>
        </div>
      </div>
      <div>{data2 && <Result longLink={data2} shortLink={data} />}</div>
    </div>
  );
}

export default Home;
