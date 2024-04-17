const RegistrationForm=({isRegister,setIsRegister}:{isRegister:boolean; setIsRegister:(_value:boolean)=>void;})=>{
    return(
        <section className="bg-gray-50 flex flex-col items-center ">
          <div className="flex flex-col">
            <span className="font-bold text-xl py-1">
              Let's get you started here
            </span>
            <h5 className="py-1">
              Fill in your details to join kaya community
            </h5>
          </div>

          <div className="flex flex-col items-center justify-center  px-6 px-6 py-8 mx-auto  w-full  lg:py-0">
            <div className="w-full bg-white rounded-lg shadow mt-4 my-8 md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="  md:space-y-1 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Create and account
                </h1>
                <form className="  md:space-y-6" action="#">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Your names
                    </label>
                    <input
                      type="text"
                      name="names"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="Type your names.."
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Confirm password
                    </label>
                    <input
                      type="confirm-password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  "
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-light text-gray-500 ">
                        I accept the{" "}
                        <a
                          className="font-medium text-primary-600 hover:underline "
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-darkColor hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Sign up
                  </button>
                  <p className="text-sm font-light text-gray-500 ">
                    Already have an account?{" "}
                    <span onClick={()=>setIsRegister(false)}
                      className="font-medium text-primary-600 cursor-pointer hover:underline "
                    >
                      Login here
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
    )
}
export default RegistrationForm;