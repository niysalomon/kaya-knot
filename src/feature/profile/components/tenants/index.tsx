import MainHouse from "../mainHouse/mainHouse";

const DisplayTenant=()=>{
    return(
        <>
        <div className="p-4 sm:ml-64 h-screen bg-gray-100  ">
          <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg bg-white">
            <div className="gap-4 mb-4 w-full">             
              <MainHouse />
            </div>
          </div>
        </div>
      </>
    )

}
export default DisplayTenant;