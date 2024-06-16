import ProfileLayout from "@/common/profileLayout";
import Settings from "@/feature/profile/components/profile/settings";

const Setting = () => {
    return (
      <>
        <ProfileLayout>
          <div className="bg-gray-50 ">
            <Settings/>
          </div>
        </ProfileLayout>
      </>
    );
  };
  export default Setting;
  