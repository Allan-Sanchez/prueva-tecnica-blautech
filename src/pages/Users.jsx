import React, { useEffect, useState } from "react";
import CardUser from "../components/CardUser";
import { useHistory } from "react-router-dom";
import UseAuth from "../context/user/UseAuth";
// import axios from "axios";

function Users() {
  const urlPage = import.meta.env.VITE_URL;
  const auth = UseAuth();
  const history = useHistory();
  const [data, setData] = useState();

  // axios.interceptors.request.use(
  //   (config) => {
  //     config.headers.authorization = auth.token;
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );
  // get data
  useEffect(async () => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // const { data } = await axios.get(`${urlPage}/entity/users`);
      const response = await fetch(`${urlPage}/entity/users`, {
        method: "get",
        headers: {
          "Content-type": "application/json",
          Authorization: `${auth.token}`, // notice the Bearer before your token
        },
      });
      const res = await response.json();

      // console.log(res);
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  // methos
  const handleNewUser = () => {
    history.push("/user/new");
  };

  const handleLogout = async () => {
    await auth.logout();
    history.go(0);
  };
  return (
    <div className="min-h-screen w-11/12 mx-auto">
      <button
        onClick={() => handleLogout()}
        className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80 mt-2 absolute right-5"
      >
        Salir
      </button>
      <div className="flex items-center justify-around">
        <h2 className="text-blue-700 text-center text-5xl py-20">
          Lista de Usuarios
        </h2>
        <div>
          <button
            onClick={() => handleNewUser()}
            className="text-2xl px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Crear Usuario
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.map((item) => (
          <CardUser key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Users;
