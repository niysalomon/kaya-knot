import ProfileLayout from "@/common/profileLayout"; 
import SystemPolicies from "@/feature/profile/components/policy/SystemPolicies";

export const SystemPolicy=()=>{
    return(
        <>
        <ProfileLayout> 
            <SystemPolicies/>

        </ProfileLayout>
        
        </>
    )
}
export default SystemPolicy;