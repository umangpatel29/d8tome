"use client"
import { ApiResponseType, signInType, signUpType } from "@/types/data";
import http from "./index";
import { useEffect } from "react";

type signInResType = {
    access_token: string;
    token_type: string;
}

export const Verifyemail = {
    emailOtp: async (access_token: string) => {
        return http
            .get<any>("/user/verifyEmail", {
                headers: { Authorization: access_token },
                withCredentials: true
            })
    },
    ValidateEmail: async (data: any, token: string) => {
        console.log(data, "data")
        return http
            .post("/user/validateemail", data, {
                headers: { Authorization: token },
                withCredentials: true
            })
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