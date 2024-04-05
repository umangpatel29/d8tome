import { ApiResponseType, signInType, signUpType } from "@/types/data";
import http from "./index";

type signInResType = {
    access_token: string;
    token_type: string;
}

export const Auth = {
    signUp: async (data: signUpType) => {
        return http
            .post<ApiResponseType>("/register", data)
            .then((res) => res.data);
    }
    //   signIn: async (data: signInType) => {
    //     return http
    //       .post<signInResType>("/login", data, { withCredentials: true })
    //       .then((res) => res.data);
    //   },
    //   logout: async () => {
    //     return http
    //       .get<ApiResponseType>("/logout")
    //       .then((res) => res.data);
    //   },
};