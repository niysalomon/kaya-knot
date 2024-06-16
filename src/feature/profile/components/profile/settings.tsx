import { BudgetIcon, UserIcon } from "@/assets/icons";
import Image from "next/image";
import { useState } from "react";
const Settings = () => {
  const [security, setSecurity] = useState<number>(1);
  return (
    <>
      <div className="p-1 sm:ml-64 h-screen text-gray-900  ">
        <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg bg-white">
          <div className="flex flex-col w-full  ">
            <div className="bg-white  pb-5">
              <div className="text-sm flex justify-between text-white h-50 px-5 py-3 w-full bg-darkColor items-center">
                <h4 className="font-bold text-xl mx-auto">PERSONAL PROFILE</h4>
              </div>
              <div
                style={{ height: "" }}
                className="grid gap-4 px-10 text-gray-500"
              >
                <div className="flex flex-col items-center  ">
                  <Image
                    className="w-40 h-40 rounded-full shadow-lg"
                    src={UserIcon}
                    alt=""
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900  ">
                    Bonnie Green
                  </h5>
                </div>
                <div className="grid grid-cols-10     ">
                  <div className="grid col-span-5 rows-span-1  p-5 border border-gray-200 rounded-lg shadow   ">
                    <form className="max-w-md mx-auto w-full">
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          type="text"
                          name="floating_email"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                          First Name
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          type="text"
                          name="floating_email"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                          Last Name
                        </label>
                      </div>
                      <div className="grid md:grid-cols-2 md:gap-6 items-center  ">
                        <div className="relative z-0 w-full mb-5 group">
                          <div className="mr-3 flex items-center">
                            <input type="radio" name="gender" />
                            <label className="pl-1">Male</label>
                            <input
                              className="ml-2"
                              type="radio"
                              name="gender"
                            />
                            <label className="pl-1">Female</label>
                          </div>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                          <select
                            name="floating_password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            required
                          >
                            <option>Select martial status</option>
                            <option>select</option>
                            <option>select</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 md:gap-6 items-center  ">
                        <div className="relative z-0 w-full mb-5 group">
                          <input
                            type="text"
                            name="floating_last_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Phone Number
                          </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                          <input
                            type="text"
                            name="floating_last_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Email
                          </label>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 md:gap-6 items-center ">
                        <div className="relative z-0 w-full mb-5 group">
                          <div className="mr-3 flex items-center">
                            <select
                              name="floating_password"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              required
                            >
                              <option>Select nationality</option>
                              <option>select</option>
                              <option>select</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 md:gap-6 items-center  ">
                        <div className="relative z-0 w-full mb-5 group">
                          <div className="mr-3 flex items-center">
                            <select
                              name="floating_password"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              required
                            >
                              <option>Select Itentity type</option>
                              <option>select</option>
                              <option>select</option>
                            </select>
                          </div>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                          <input
                            type="text"
                            name="floating_last_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            National Id
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="grid col-span-5 rows-span-1 ml-2 p-5 border border-gray-200 rounded-lg shadow  ">
                    <form className="max-w-md mx-auto w-full">
                      <div className="col-span-full sm:col-auto flex items-center">
                        <label className="block  text-sm font-medium text-gray-900 ">
                          Ready to move 
                        </label>
                        <div className="flex justify-between items-center py-2 px-5 ">
                          <label
                            className={`${
                              security === 1 ? " bg-green-500 " : "bg-gray-200"
                            } cursor-pointer relative w-24 h-8 px-2 rounded-full`}
                          >
                            <input
                              onChange={() => {
                                if (security === 1) {
                                  setSecurity(2);
                                } else {
                                  setSecurity(1);
                                }
                              }}
                              type="checkbox"
                              id="check"
                              className="sr-only peer"
                            />
                            <span className="w-3 h-3/5 bg-white absolute rounded-full p-3 left-1 top-1  peer-checked:left-16 transition-all duration-500 z-10"></span>
                            {security === 1 ? (
                              <span className="absolute left-11 top-1 font-bold text-gray-600">
                                YES
                              </span>
                            ) : (
                              <span className="absolute text-white left-2 top-1 font-bold">
                                NO
                              </span>
                            )}
                          </label>
                        </div>
                      </div>
                      <div className=" flex items-center ">
                        <div className="grid md:grid-cols-2 md:gap-6 items-center w-full ">
                          <div className="relative z-0   mb-5 group">
                            <input
                              type="text"
                              name="floating_last_name"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=" "
                              required
                            />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                              My budget
                            </label>
                          </div>
                          <div className="relative z-0 w-full mb-5 group">
                            <select
                              name="floating_password"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              required
                            >
                              <option>Select Currency</option>
                              <option>select</option>
                              <option>select</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex items-center ">
                        <div className="grid md:grid-cols-2 md:gap-6 items-center w-full  ">
                          <div className="relative z-0 w-full mb-5 group">
                            <select
                              name="floating_password"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              required
                            >
                              <option>Select Noise tolerance</option>
                              <option>select</option>
                              <option>select</option>
                            </select>
                          </div>
                          <div className="relative z-0 w-full mb-5 group">
                            <select
                              name="floating_password"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              required
                            >
                              <option>Select Currency</option>
                              <option>select</option>
                              <option>select</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex items-center ">
                        <div className="grid md:grid-cols-2 md:gap-6 items-center w-full  ">
                          <div className="relative z-0 w-full mb-5 group">
                            <select
                              name="floating_password"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              required
                            >
                              <option>Select Smoking tolerance</option>
                              <option>select</option>
                              <option>select</option>
                            </select>
                          </div>
                          <div className="relative z-0 w-full mb-5 group">
                            <select
                              name="floating_password"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              required
                            >
                              <option>Select Pets tolerance</option>
                              <option>select</option>
                              <option>select</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          type="text"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                          Description
                        </label>
                      </div>
                      <div className="justify-center flex">
                        <div></div>
                        know Myself(photoes attachements)
                      </div>
                    </form>
                  </div>
                </div>

                <div className="justify-center flex">
                  <div></div>
                  <button
                    type="submit"
                    className="text-white w-1/3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg  px-5 py-2  "
                  >
                    SAVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Settings;
