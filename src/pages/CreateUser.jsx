import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

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

//validate form with yup
const validateSchema = yup.object({
  name: yup
    .string("Escribe un nombre")
    .min(4, "EL nombre debe de tener al menos 4 letras")
    .required("El nombre es requerido"),
  lastName: yup
    .string("Escribe al menos un apellido")
    .min(2, "EL apellizo debe de tener al menos 2 letras")
    .required("El apellido es requerido"),
  username: yup
    .string("Escribe el nombre de usuario")
    .min(6, "EL nombre debe de tener al menos 6 letras")
    .required("El nombre de usuario es requerido"), //obligatorio
  password: yup
    .string("Escribe tu Contraseña")
    .min(8, "La Contraseña debe de ser al menos de 8 caracteres")
    .required("La Contraseña es requerida"),
  confirmPassword: yup
    .string("Escribe tu Contraseña")
    .min(8, "La Contraseña debe de ser al menos de 8 caracteres")
    .required("La Contraseña es requerida"), //obliatorio
  // role: string,
  area: yup
    .string("Escribe el are")
    .min(3, "EL area debe de tener al menos 3 numeros"),
  ext: yup
    .number("Escribe una ext")
    .min(3, "la ext debe de tener al menos 3 numeros"),
  phone: yup
    .number("Escribe una numero de telefono")
    .min(8, "EL numero debe de tener al menos 8 numeros"),
  // active: boolean,
});

function CreateUser() {
  const urlPage = import.meta.env.VITE_URL;
  const history = useHistory();

  // initial formik
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      username: "", //obligatorio
      password: "",
      confirmPassword: "", //obliatorio
      area: "",
      ext: "", //number
      phone: "",
      active: true,
      // role: string,
      // active: boolean,
    },
    validationSchema: validateSchema,
    onSubmit: async (values) => {
      console.log(values);
      const { password, confirmPassword } = values;

      if (password === confirmPassword) {
        delete values.confirmPassword;
        try {
          const response = await axios.post(`${urlPage}/custom/users`, values);
          // console.log(response);
          history.push("/users");
        } catch (error) {
          console.log(error);
        }
      }
    },
  });
  return (
    <div className="min-h-screen">
      <h2 className="text-blue-700 text-center text-5xl py-20">
        Crear Usuario
      </h2>
      <div className="flex flex-col">
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 capitalize text-center">
            formulario
          </h2>

          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              {/* nombre */}
              <div>
                <label className="text-gray-700" htmlFor="emailAddress">
                  Nombre
                </label>
                <input
                  name="name"
                  id="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.name}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.name}</p>
                  </div>
                ) : null}
              </div>
              {/* apellidos */}

              <div>
                <label className="text-gray-700" htmlFor="emailAddress">
                  Apellidos
                </label>
                <input
                  name="lastName"
                  id="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.lastName}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.lastName}</p>
                  </div>
                ) : null}
              </div>
              {/* username */}
              <div>
                <label className="text-gray-700" htmlFor="emailAddress">
                  Nombre de Usuario
                </label>
                <input
                  name="username"
                  id="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.username}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.username}</p>
                  </div>
                ) : null}
              </div>
              {/* are */}
              <div>
                <label className="text-gray-700" htmlFor="emailAddress">
                  Area
                </label>
                <input
                  name="area"
                  id="area"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.area}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {formik.touched.area && formik.errors.area ? (
                  <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.area}</p>
                  </div>
                ) : null}
              </div>
              {/* password */}
              <div>
                <label className="text-gray-700" htmlFor="emailAddress">
                  Contraseña
                </label>
                <input
                  name="password"
                  id="password"
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
              {/* confirm password */}
              <div>
                <label className="text-gray-700" htmlFor="emailAddress">
                  Confirmar Contraseña
                </label>
                <input
                  name="confirmPassword"
                  id="ConfirmPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.confirmPassword}
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.confirmPassword}</p>
                  </div>
                ) : null}
              </div>
              {/* phone */}
              <div>
                <label className="text-gray-700 " htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.phone}
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.phone}</p>
                  </div>
                ) : null}
              </div>

              {/* role */}
              <div>
                <label className="text-gray-700 " htmlFor="role">
                  Role
                </label>
                <select
                  className="form-select appearance-none
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding bg-no-repeat
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  defaultValue={"admin"}
                >
                  {/* <option selected>Selecciona un role</option> */}
                  <option value="admin">Admin</option>
                  <option value="no">Sin rol</option>
                </select>
                {/* {formik.touched.password && formik.errors.password ? (
            <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
              <p className="font-bold">Error</p>
              <p>{formik.errors.password}</p>
            </div>
          ) : null} */}
              </div>
              {/* exten */}
              <div>
                <label className="text-gray-700 " htmlFor="Ext">
                  Ext
                </label>
                <input
                  id="ext"
                  name="ext"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.ext}
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {/* {formik.touched.password && formik.errors.password ? (
            <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
              <p className="font-bold">Error</p>
              <p>{formik.errors.password}</p>
            </div>
          ) : null} */}
              </div>
              {/* exten */}
              <div>
                <label className="text-gray-700 " htmlFor="active">
                  Usuario Activo
                </label>
                <select
                  className="form-select appearance-none
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding bg-no-repeat
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  defaultValue="1"
                >
                  <option value="0">NO</option>
                  <option value="1">SI</option>
                </select>
                {/* {formik.touched.password && formik.errors.password ? (
            <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
              <p className="font-bold">Error</p>
              <p>{formik.errors.password}</p>
            </div>
          ) : null} */}
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Guardar
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default CreateUser;
