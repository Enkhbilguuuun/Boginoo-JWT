import React from "react";
import { instance } from "../App";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const Link = () => {
  const params = useParams();
  const getData = async () => {
    const res = await instance.get(`/links/${params.Shortlink}`);
    console.log(res)
    window.location.replace(res.data.data.Longlink);
  };
  useEffect(() => {
    getData();
  }, []);
  return <></>;
};

export default Link;