import ProfileLayout from "@/common/profileLayout";
import HouseSearches from "@/feature/profile/components/profile/houseSearches";

const HouseSearch = () => {
    return (
      <>
        <ProfileLayout>
          <div className="bg-gray-50 ">
            <HouseSearches/>
          </div>
        </ProfileLayout>
      </>
    );
  };
  export default HouseSearch;
  