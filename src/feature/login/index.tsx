import Layout from "@/common/layout";
import Image from "next/image";
import { useState } from "react";
import RegistrationForm from "./registrationForm";
import LoginForm from "./login-form";

const Login = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  return (
    <>
      <Layout>
        <>
          {isRegister ? (
            <RegistrationForm
              isRegister={isRegister}
              setIsRegister={setIsRegister}
            />
          ) : (
            <LoginForm isRegister={isRegister} setIsRegister={setIsRegister} />
          )}
        </>
      </Layout>
    </>
  );
};
export default Login;
