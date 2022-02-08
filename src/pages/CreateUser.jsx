import React from "react";

function CreateUser() {
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

          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              {/* nombre */}
              <div>
                <label className="text-gray-700" htmlFor="emailAddress">
                  Nombre
                </label>
                <input
                  name="email"
                  id="email"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.email}
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {/* {formik.touched.email && formik.errors.email ? (
            <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
              <p className="font-bold">Error</p>
              <p>{formik.errors.email}</p>
            </div>
          ) : null} */}
              </div>
              {/* apellidos */}

              <div>
                <label className="text-gray-700" htmlFor="emailAddress">
                  Apellidos
                </label>
                <input
                  name="email"
                  id="email"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.email}
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {/* {formik.touched.email && formik.errors.email ? (
            <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
              <p className="font-bold">Error</p>
              <p>{formik.errors.email}</p>
            </div>
          ) : null} */}
              </div>
              {/* username */}
              <div>
                <label className="text-gray-700" htmlFor="emailAddress">
                  Nombre de Usuario
                </label>
                <input
                  name="email"
                  id="email"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.email}
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {/* {formik.touched.email && formik.errors.email ? (
            <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
              <p className="font-bold">Error</p>
              <p>{formik.errors.email}</p>
            </div>
          ) : null} */}
              </div>
              {/* are */}
              <div>
                <label className="text-gray-700" htmlFor="emailAddress">
                  Area
                </label>
                <input
                  name="email"
                  id="email"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.email}
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {/* {formik.touched.email && formik.errors.email ? (
            <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
              <p className="font-bold">Error</p>
              <p>{formik.errors.email}</p>
            </div>
          ) : null} */}
              </div>
              {/* password */}
              <div>
                <label className="text-gray-700" htmlFor="emailAddress">
                  Contraseña
                </label>
                <input
                  name="email"
                  id="email"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.email}
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {/* {formik.touched.email && formik.errors.email ? (
            <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
              <p className="font-bold">Error</p>
              <p>{formik.errors.email}</p>
            </div>
          ) : null} */}
              </div>
              {/* confirm password */}
              <div>
                <label className="text-gray-700" htmlFor="emailAddress">
                  Contraseña
                </label>
                <input
                  name="email"
                  id="email"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.email}
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {/* {formik.touched.email && formik.errors.email ? (
            <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
              <p className="font-bold">Error</p>
              <p>{formik.errors.email}</p>
            </div>
          ) : null} */}
              </div>
              {/* phone */}
              <div>
                <label className="text-gray-700 " htmlFor="password">
                  Phone
                </label>
                <input
                  id="password"
                  name="password"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.password}
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {/* {formik.touched.password && formik.errors.password ? (
            <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
              <p className="font-bold">Error</p>
              <p>{formik.errors.password}</p>
            </div>
          ) : null} */}
              </div>

              {/* role */}
              <div>
                <label className="text-gray-700 " htmlFor="password">
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
                <label className="text-gray-700 " htmlFor="password">
                  Ext
                </label>
                <input
                  id="password"
                  name="password"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.password}
                  type="password"
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
                <label className="text-gray-700 " htmlFor="password">
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
                Actualizar
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default CreateUser;
