import React from "react";
// import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ReactContext from "../context/react.context";

const SignUp = () => {
  const reactCtx = useContext(ReactContext);
  //   const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("testing from SignUp");

    //     fetch("http://localhost:5000/users/register", {
    //       method: "put",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(storeRegisterData),
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         if (!data.status) {
    //           console.log("message:", data.message);
    //           navigate("/landingpage");
    //         }
    //         if (data.status === "error") {
    //           console.log("got error");
    //           dispatch(
    //             getThingsDoneActions.getError({
    //               errorMsg: data.message,
    //             })
    //           );
    //         }
    //       })
    //       .catch((error) => {
    //         console.log("Connection Error", error.message);
    //       });
    //     dispatch(getThingsDoneActions.clearRegisterData());
  };

  return (
    <>
      <div className="selection:bg-teal-300 selection:text-white">
        <div className="flex justify-center items-center">
          <div className="p-8 flex-1">
            <div className="mx-auto overflow-hidden">
              <div className="p-8">
                <h1 className="text-5xl font-bold text-teal-500">
                  Create account
                </h1>

                <form className="mt-12">
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-teal-500"
                      placeholder="Name"
                      value={reactCtx.name}
                      onChange={(e) => reactCtx.setName(e.target.value)}
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Name
                    </label>
                  </div>
                  <div className="mt-10 relative">
                    <input
                      id="registerEmail"
                      name="registerEmail"
                      type="text"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-teal-500"
                      placeholder="john@doe.com"
                      value={reactCtx.password}
                      onChange={(e) => reactCtx.setPasswordReg(e.target.value)}
                    />
                    <label
                      htmlFor="registerEmail"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="mt-10 relative">
                    <input
                      id="registerPassword"
                      type="password"
                      name="registerPassword"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-teal-500"
                      placeholder="registerPassword"
                      value={reactCtx.passwordReg}
                      onChange={(e) => reactCtx.setPasswordReg(e.target.value)}
                    />
                    <label
                      htmlFor="registerPassword"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-10 relative">
                    <input
                      id="registerPassword1"
                      type="password"
                      name="registerPassword1"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-teal-500"
                      placeholder="registerPassword1"
                      value={reactCtx.password2Reg}
                      onChange={(e) => reactCtx.setPassword2Reg(e.target.value)}
                    />
                    <label
                      htmlFor="registerPassword1"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Re-enter Password
                    </label>
                  </div>

                  <button
                    type="button"
                    className="mt-20 px-8 py-4 uppercase rounded-full bg-teal-500 hover:bg-teal-300 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-teal-300 focus:ring-opacity-80 cursor-pointer"
                    onClick={handleSubmit}
                  >
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
