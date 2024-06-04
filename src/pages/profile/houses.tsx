import ProfileLayout from "@/common/profileLayout"; 
import HousesPage from "@/feature/profile/components/house";

const Houses = () => {
  return (
    <>
      <ProfileLayout>
        <div className="bg-gray-50 ">
          <HousesPage />
        </div>
      </ProfileLayout>
    </>
  );
};
export default Houses;
