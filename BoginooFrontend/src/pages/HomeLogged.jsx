import logo from "../assets/Boginoo.png";
import React from "react";
import { useState } from "react";
import Result from "./Result";
import { instance } from "../App";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function HomeLogged() {
  const [user, setUser] = useState();
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [history, setHistory] = useState()
  const { id } = useParams();

  const getData = async () => {
    const res = await instance.post("/links", {
      Longlink: data2,
      token: JSON.parse(localStorage.getItem("Token"))

    });
    setData(res.data.data.Shortlink);
  };
  const getUser = async () => {
    const ros = await instance.get(`/users/${id}`);
    setUser(ros.data.data);
  };
  const getHistory = async () => {
    const ras = await instance.get(`/links`);
    setHistory(ras)
  };
  useEffect(() => {
   getUser()
   getHistory()
  },[]);
console.log(history)
  return (
    <div>
     {user && <button className="login">{user.email}</button>}
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

export default HomeLogged;