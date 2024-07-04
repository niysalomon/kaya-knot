import { useState } from "react";
import useLogin from "./hook/useLogin";

const LoginForm = ({
  isRegister,
  setIsRegister,
}: {
  isRegister: boolean;
  setIsRegister: (_value: boolean) => void;
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { data, mutate, error, status, errorMessage, errorStatus } = useLogin();

  const handleLogin = () => {
    mutate({ password, email });
  };
  return (
    <section className="bg-gray-50 flex flex-col items-center  h-[calc(85vh-186px)] ">
      <div className="flex flex-col">
        <span className="font-bold text-xl py-1">Login</span>
      </div>

      <div className="flex flex-col items-center justify-center  px-6 px-6 py-8 mx-auto  w-full  lg:py-0">
        <div className="w-full bg-white rounded-lg shadow mt-4 my-8 md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="  md:space-y-1 sm:p-8">
            <div className="  md:space-y-6"  >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
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
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                  required
                />
              </div>

              <button
                onClick={() => handleLogin()}
                type="submit"
                className="w-full text-white bg-darkColor hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 ">
                You don't have an account?{" "}
                <span
                  onClick={() => setIsRegister(true)}
                  className="font-medium text-primary-600 cursor-pointer hover:underline "
                >
                  Register here
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
