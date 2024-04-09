import { ApiResponseType, UserType, loginType, signInType, signUpType } from "@/types/data";
import http from "./index";
import { headers } from "next/headers";

type signInResType = {
    access_token: string;
    token_type: string;
}

export const Auth = {
    signUp: async (data: signInType) => {
        return http
            .post<ApiResponseType>("/user/register", data)
            .then((res) => res.data);
    },

    signIn: async (data: UserType) => {
        return http
            .post<ApiResponseType>("/user/login", data)
            .then((res) => res.data);
    },
    LoginGoogle: async () => {
        return http
            .get<signInResType>("/google/callback", {
                withCredentials: true
            })
            .then((res) => res.data);
    },
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