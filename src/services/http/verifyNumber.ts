"use client"
import { ApiResponseType, signInType, signUpType } from "@/types/data";
import http from "./index";
import { useEffect } from "react";

type signInResType = {
    access_token: string;
    token_type: string;
}

export const VerifyPhone = {
    phoneOtp: async (data: any, token: string) => {
        return http
            .post<any>("/v1/user/verifyPhoneNumber", data, {
                headers: { Authorization: token },
                withCredentials: true
            })
    },
    ValidatePhone: async (data: any, token: string) => {
        console.log(data, "data")
        return http
            .post("/v1/user/isPhoneNumberValid", data, {
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