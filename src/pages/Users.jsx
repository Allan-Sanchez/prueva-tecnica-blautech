import React from "react";
import CardUser from "../components/CardUser";
import { useHistory } from "react-router-dom";

function Users() {
  const history = useHistory();
  const handleNewUser = () => {
    history.push("/user/new");
  };
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-around">
        <h2 className="text-blue-700 text-center text-5xl py-20">
          Lista de Usuarios
        </h2>
        <div>
          <button
            onClick={() => handleNewUser()}
            class="text-2xl px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Crear Usuario
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CardUser data={1} />
        <CardUser data={2} />
        <CardUser data={3} />
        <CardUser data={4} />
        <CardUser data={5} />
        <CardUser data={6} />
      </div>
    </div>
  );
}

export default Users;
