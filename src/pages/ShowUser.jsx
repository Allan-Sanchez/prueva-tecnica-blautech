import React from "react";
import CardUserDetail from "../components/CardUserDetail";
import { useParams } from "react-router-dom";

function ShowUser() {
  const params = useParams();
  console.log(params);
  return (
    <div className="min-h-screen">
      <h2 className="text-blue-700 text-center text-5xl py-20">
        Detalle de Usuario
      </h2>
      <div className="mx-auto">
        <CardUserDetail data={params.id} />
      </div>
    </div>
  );
}

export default ShowUser;
