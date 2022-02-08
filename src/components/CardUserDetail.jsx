import React from "react";
import { useHistory } from "react-router-dom";

function CardUserDetail({ userInfo }) {
  console.log(userInfo);
  const history = useHistory();

  const handleUpdateUser = () => {
    history.push({ pathname: `/user/update/${userInfo._id}` });
  };

  return (
    <div className="w-full max-w-sm px-4 py-3 mx-auto bg-white rounded-md shadow-md 0">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-800">blautech</span>
        <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
          {`ID ${userInfo._id}`}
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
          {`${userInfo.name} - ${userInfo.lastName}`}
        </h1>
        <div className="flex">
          <div className="text-gray-400 font-bold mr-4">username:</div>
          <div>{userInfo.username}</div>
        </div>
        <div className="flex">
          <div className="text-gray-400 font-bold mr-4">role:</div>
          <div>{userInfo.role}</div>
        </div>
        <div className="flex">
          <div className="text-gray-400 font-bold mr-4">phone:</div>
          <div>{userInfo.phone}</div>
        </div>
        <div className="flex">
          <div className="text-gray-400 font-bold mr-4">Ext:</div>
          <div>{userInfo.ext}</div>
        </div>
        <div className="flex">
          <div className="text-gray-400 font-bold mr-4">Area:</div>
          <div>{userInfo.area}</div>
        </div>
      </div>

      <div className="flex items-center justify-around mt-4">
        <div
          onClick={() => handleUpdateUser()}
          className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CardUserDetail;
