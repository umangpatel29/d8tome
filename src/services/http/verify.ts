import { ApiResponseType, signInType, signUpType } from "@/types/data";
import http from "./index";

type signInResType = {
    access_token: string;
    token_type: string;
}

let access_token: any;
if (typeof localStorage !== "undefined") {
    access_token = localStorage.getItem("access_token");
}

export const Verify = {
    emailOtp: async () => {
        return http
            .get("/verifyEmail", {
                headers: { Authorization : access_token },
                withCredentials: true
            })
    },
    ValidateEmail: async (data: any) => {
        console.log(data,"data")
        return http
            .post("/validateemail", data, {
                headers: { Authorization: access_token },
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