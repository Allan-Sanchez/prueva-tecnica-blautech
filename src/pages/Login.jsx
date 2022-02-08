import React from "react";
import { useHistory } from "react-router-dom";
import imgLogo from "../../assets/unnamed.png";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import UseAuth from "../context/user/UseAuth";
//validate form with yup
const validateSchema = yup.object({
  userName: yup
    .string("Escribe tu correo electronico")
    // .email("Escribe un correo valido")
    .required("El carreo electronico es requerido"),
  password: yup
    .string("Escribe tu Contraseña")
    .min(8, "La Contraseña debe de ser al menos de 8 caracteres")
    .required("La Contraseña es requerida"),
});

function Login() {
  const auth = UseAuth();
  const history = useHistory();
  let urlPage = import.meta.env.VITE_URL;
  // initial formik
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: validateSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(`${urlPage}/login`, values);
        console.log(data);
        if (data.status == "success") {
          await auth.login(data.token);

          history.push("/users");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 capitalize text-center">
          Login
        </h2>
        <div className="mt-2">
          <img
            className="w-360 h-36 rounded-full mx-auto"
            src={imgLogo}
            alt="logo de la empresa"
          />
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4">
            <div>
              <label className="text-gray-700" htmlFor="userName">
                Correo Electronico
              </label>
              <input
                name="userName"
                id="userName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.userName}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {formik.touched.userName && formik.errors.userName ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.userName}</p>
                </div>
              ) : null}
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="password">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.password}
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.password}</p>
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
