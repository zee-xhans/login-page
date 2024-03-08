import logo from "../bq.png";

function Login() {
  return (
    <>
      <div className="justify-center flex h-screen w-screen items-center ">
        <div className=" bg-white h-[23em] w-[19em] rounded-lg pt-4">
          <div className="justify-center items-center flex p-5">
            <img className="w-36" src={logo} />
          </div>

          <div className="justify-center pt-1">
            <div class="relative flex items-center">
              <div class="flex-grow border-t border-gray-400 mx-4"></div>
              <span class="flex-shrink  text-gray-500">Login</span>
              <div class="flex-grow border-t border-gray-400 mx-4"></div>
            </div>
          </div>

          <div className="justify-center flex pt-7">
            <div class="relative w-64 h-10">
              <input
                className=" peer w-full h-full   font-sans font-normal outline outline-0 focus:outline-0  disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-700 placeholder-shown:border-t-blue-gray-700 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=""
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                Username
              </label>
            </div>
          </div>

          <div className="justify-center flex pt-4">
            <div class="relative w-64 h-10">
              <input
                className=" peer w-full h-full font-sans font-normal outline outline-0 focus:outline-0  disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-700 placeholder-shown:border-t-blue-gray-700 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=""
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                Password
              </label>
            </div>
          </div>

          <div className="justify-center flex">
            <button className="bg-slate-700 text-white font-bold shadow-lg shadow-blue-500/50 w-64 text-center rounded-md py-2 mt-8">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
