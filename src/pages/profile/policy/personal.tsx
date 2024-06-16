import ProfileLayout from "@/common/profileLayout";
import DashBoard from "@/feature/profile";
import PersonalPolicies from "@/feature/profile/components/policy/personalPolicies";

export const PersonalPolicy=()=>{
    return(
        <>
        <ProfileLayout> 
            <PersonalPolicies/>

        </ProfileLayout>
        
        </>
    )
}
export default PersonalPolicy;