import {
  AddIcon,
  BackIcon,
  CancelIcon,
  MinusIcon,
  UserIcon,
} from "@/assets/icons";
import Image from "next/image";
import { useState } from "react";
import { HouseImage, RenterImage } from "../data/images";

const BookingConfirmation = ({
  setShowBookingConfirmation,
}: {
  setShowBookingConfirmation: (_value: boolean) => void;
}) => {
  const [isPart, setIsPart] = useState<boolean>(false);
  const [isOpenBook, setIsOpenBook] = useState(false);
  const [isOpenCancel, setIsOpenCancel] = useState(false);
  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col w-9/12 ">
        <div className="bg-white">
          <div className="text-sm flex justify-between text-white h-50 px-5 py-3 w-full bg-darkColor items-center">
            <h4 className="font-bold text-xl mx-auto">Booking confirmation</h4>
            <button
              className="font-bold text-xl"
              onClick={() => setShowBookingConfirmation(false)}
            >
              <Image src={CancelIcon} alt="" />
            </button>
          </div>
          <div
            style={{ height: "600px" }}
            className="grid gap-4 px-10 text-gray-500"
          >
            <div className="grid grid-cols-10  grid-rows-6  ">
              <div className="grid col-span-6 rows-span-1     ">
                <div className="flex flex-col items-center  ">
                  <div className="items-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 py-3  ">
                      Booking confirmation
                    </h5>
                  </div>
                  <div className="font-bold tracking-tight text-gray-900">
                    Booking Duration
                  </div>{" "}
                  <div className="font-bold py-3">Choose Dates</div>
                  <div className="flex justify-between w-1/2">
                    <div className="flex flex-col items-center p-1">
                      <span>Check in</span>
                      <input className="border p-1 rounded" type="date" />
                    </div>{" "}
                    <div className="flex flex-col items-center p-1">
                      <span>Check out</span>
                      <input className="border p-1 rounded" type="date" />
                    </div>{" "}
                  </div>
                  <div className=" py-3 flex flex-col items-center">
                    <div className="items-center">
                      <input
                        type="radio"
                        onChange={() => setIsPart(false)}
                        name="corenting"
                      />
                      <span className="px-1">Book the whole house</span>
                    </div>
                    <div className="items-center">
                      <div className="flex flex-col">
                        <div className="flex items-center ml-2">
                          <input
                            type="radio"
                            onChange={() => setIsPart(!isPart)}
                            name="corenting"
                          />
                          <span className="px-1">Book part of the house</span>
                        </div>
                        {isPart && (
                          <input
                            className="border p-1 rounded ml-2"
                            type="text"
                            placeholder="Type your part"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="border-b w-full items-center">
                    <button
                      className="flex justify-between items-center w-full bg-gray-100 p-4 text-left"
                      onClick={() => setIsOpenBook(!isOpenBook)}
                    >
                      <span className="font-bold">Booking policy</span>
                      <span>
                        {isOpenBook ? (
                          <Image src={MinusIcon} alt="" />
                        ) : (
                          <Image src={AddIcon} alt="" />
                        )}
                      </span>
                    </button>
                    {isOpenBook && (
                      <div className="p-4">
                        <p>content</p>
                      </div>
                    )}
                  </div>
                  <div className="border-b w-full items-center">
                    <button
                      className="flex justify-between items-center w-full bg-gray-100 p-4 text-left"
                      onClick={() => setIsOpenCancel(!isOpenCancel)}
                    >
                      <span className=" font-bold">Cancellation policy</span>
                      <span>
                        {isOpenCancel ? (
                          <Image src={MinusIcon} alt="" />
                        ) : (
                          <Image src={AddIcon} alt="" />
                        )}
                      </span>
                    </button>
                    {isOpenCancel && (
                      <div className="p-4">
                        <p>content</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid col-span-3 text-gray-700 ml-4 w-full">
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">
                    Amahumbezi house
                  </h5>
                  <div
                    className="w-full text-white focus:ring-4 focus:outline-none   
                        font-medium rounded-lg text-md px-2 py-2.5 text-center  bg-grayOrange "
                  >
                    <div>
                      <Image
                        className="h-auto max-w-full rounded-lg"
                        src={HouseImage}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" justify-center p-4">
                    <div className="grid grid-cols-3 place-content-center gap-4 ">
                      <div className=" h-full items-center flex flex-col">
                        <Image
                          className="h-auto w-full rounded-full "
                          src={UserIcon}
                          alt=""
                        />
                        <span>Peninah</span>
                      </div>
                      <div className=" h-full items-center flex flex-col">
                        <Image
                          className="h-auto w-full rounded-full "
                          src={UserIcon}
                          alt=""
                        />
                        <span>Kalisa</span>
                      </div>
                      <div className=" h-full items-center flex flex-col">
                        <Image
                          className="h-auto w-full rounded-full "
                          src={UserIcon}
                          alt=""
                        />
                        <span>Korode</span>
                      </div>
                    </div>
                  </div>
                  <hr className="bg-grayOrange size-lg" />

                  <button
                    type="submit"
                    className="w-full text-white focus:ring-4 focus:outline-none   
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-darkColor focus:ring-primary-800"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingConfirmation;
