import axios, { AxiosResponse } from "axios";
import { LoginInterface } from "../interface/login";
import { axiosConfig } from "@/common/config/axiosConfig";

// export const handleLoginService = ({
//   email,
//   password,
// }: {
//   password: string;
//   email: string;
// }) => {
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//   return axios.post<LoginInterface>(
//     `${apiUrl}/login`,
//     {
//       password,
//       email,
//     },
//     axiosConfig
//   );
// };

export const handleLoginService = ({
  email,
  password,
}: {
  password: string;
  email: string;
}): Promise<AxiosResponse<LoginInterface>> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Perform the GET request, passing parameters in the URL
  return axios.get<LoginInterface>(`${apiUrl}/login`, {
    params: {
      email,
      password,
    },
    ...axiosConfig,
  });
};
