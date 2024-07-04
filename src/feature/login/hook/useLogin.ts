import { useState } from "react"; 
import { useMutation } from "@tanstack/react-query";
import { handleLoginService } from "../service/loginService";
import Cookies from "js-cookie";

 
const useLogin= () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorStatus, setErrorStatus] = useState<string>('');

  const { mutate, status, data, error } = useMutation(handleLoginService,{
      onSuccess: (data) => {
        Cookies.remove('kaya_token');
        Cookies.remove('kaya_token');
       
        Cookies.set('kaya_token', data?.data.token
        //  {
        //   expires: new Date(
        //     Date.now() + Number(data?.data?.data?.expires_in) * 1000
        //   )
        //   ,
        //   sameSite: 'strict',
        // }
      );
        
        Cookies.set('kaya_token', data?.data?.token, {
          sameSite: 'strict',
        }); 
          window.location.replace('/'); 
        
      },
      onError: (error: {
        response: {
          data: { message: string; status: string };
        };
      }) => {
        setErrorStatus(error.response.data.status);
        setErrorMessage(error.response.data.message);
      },
    }
  );

 

  return {
    data,
    mutate,
    error, 
    status,
    errorMessage,
    errorStatus,
  };
};

export default useLogin;

