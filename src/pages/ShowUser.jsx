import React, { useState, useEffect } from "react";
import CardUserDetail from "../components/CardUserDetail";
import { useParams } from "react-router-dom";
import axios from "axios";

const token = localStorage.getItem("token");

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function ShowUser() {
  // const urlPage = import.meta.env.VITE_URL;
  const urlPage = "http://34.204.23.3:7777";
  const params = useParams();
  const [userInfo, setUserInfo] = useState();

  // get data
  useEffect(async () => {
    try {
      const { data } = await axios.get(`${urlPage}/custom/users/${params.id}`);
      console.log(data);
      setUserInfo(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <h2 className="text-blue-700 text-center text-5xl py-20">
        Detalle de Usuario
      </h2>
      <div className="mx-auto">
        {userInfo ? <CardUserDetail userInfo={userInfo} /> : <h2>no hay data</h2>}
      </div>
    </div>
  );
}

export default ShowUser;
