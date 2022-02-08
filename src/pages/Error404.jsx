import React from "react";
import { useHistory } from "react-router-dom";
import Error404Image from "../../assets/error404.jpg";

function Error404() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/users");
  };
  return (
    <div className="positicion-login flex flex-col items-center">
      <h2 className="text-center font-bold text-2xl my-5">Error 404</h2>
      <div>
        <img
          className="w-60 h-60 rounded-full"
          src={Error404Image}
          alt="page not found"
        />
      </div>
      <div
        onClick={() => handleClick()}
        className="bg-red-400 text-white py-5 px-8 rounded-md font-bold cursor-pointer mt-10 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="mx-2">volver a la pagina de inicio</span>
      </div>
    </div>
  );
}

export default Error404;
