import React from 'react';

const Raw = () => {
  return (
    <>
      <div className="h-screen relative flex flex-col justify-center">
        <div className="flex w-screen h-screen overflow-y-hidden bg-white">
          <div
            className="w-[40%] flex flex-col justify-center !bg-bottom !bg-contain !bg-no-repeat"
            style={{
              background: '#eff2f6',
              backgroundImage: 'url(/images/modal-bottom.b7365c4c.png)',
            }}
          >
            <div className="px-10">
              <h6
                className="my-6 text-2xl font-semibold"
                style={{ lineHeight: '1.875rem' }}
              >
                Welcome Back
              </h6>
              <p
                className="mb-4 text-sm"
                style={{ color: '#788699', marginTop: '.7rem' }}
              >
                Login to continue.
              </p>
            </div>
          </div>
          <div className="w-[60%] self-center pt-24 pb-16 h-screen 2xl:h-[800px] 2xl:my-auto md:px-20 overflow-y-auto">
            <div className="pt-8 text-[#141820] w-full max-w-xl">
              <div className="w-full max-w-xl">
                <button
                  type="button"
                  className="md:font-semibold w-full flex justify-center items-center border border-signup-blue rounded-sm mt-4 px-3 py-2.5 text-sm text-signup-blue"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png?20210618182606"
                    alt="google signin"
                    className="h-4 mr-3"
                  ></img>
                  <p className="text-[15px]">Continue with Google</p>
                </button>
                <div className="flex justify-between mb-3.8 mt-[1.1625rem]">
                  <hr className="w-full my-4 bg-[#dfe3eb]"></hr>
                  <p className="mx-2.5 mb-4 text-base antialiased">or</p>
                  <hr className="w-full my-4 bg-[#dfe3eb]"></hr>
                </div>
                <form>
                  <div className="relative flex flex-col h-[92px]">
                    <label className="my-2 font-semibold leading-relaxed block text-sm text-[#201e27]">
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      name="email"
                      value=""
                      className="leading-[1.15] rounded-md mb-0.5 border w-full text-sm p-2.5 transition-all border-gray-300 duration-300 ease-in focus:ring-0 focus:border-2 outline-none focus:border-focus-cyan"
                    ></input>
                  </div>
                  <label className="my-2.5 font-semibold leading-relaxed block text-sm text-[#201e27]">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value=""
                    required=""
                    className="leading-[1.15] rounded-md mb-2.5 border w-full text-sm p-2.5 transition-all border-gray-300 duration-300 ease-in focus:ring-0 focus:border-2 outline-none focus:border-focus-cyan"
                  ></input>
                  <button
                    className="opacity-70 inline-block -mb-1 cursor-pointer -ml-8"
                    type="button"
                  >
                    <img
                      alt="Password toggle"
                      src="/svg/password-eye.svg"
                      width="20"
                      height="20"
                    ></img>
                  </button>
                  <button
                    type="submit"
                    disabled=""
                    className="bg-signup-blue mt-[1.55rem] mx-auto mb-12 w-36 disabled:cursor-default disabled:bg-opacity-50  text-sm block text-white px-3 py-2.5 rounded-md transition-all duration-200 ease-in font-bold"
                  >
                    Login
                  </button>
                </form>
              </div>
              <div className="my-0 mx-[10%]">
                <hr className="my-5 mx-auto bg-[#ebedf1]"></hr>
                <p className="mt-5 mb-4 text-center text-[15px] text-[#788699]">
                  Don't have an account? &apos;
                  <span
                    className="text-signup-blue font-semibold cursor-pointer"
                    href="/signup"
                  >
                    Sign Up
                  </span>
                </p>
                <p className="mt-5 mb-4 text-center text-[15px] text-[#788699]">
                  Forgot your password? &apos;
                  <button
                    type="button"
                    className="text-signup-blue font-semibold"
                  >
                    Recover password
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Raw;
