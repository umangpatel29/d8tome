"use client"
import { ApiResponseType, signInType, signUpType } from "@/types/data";
import http from "./index";
import { CreateAccountType } from "@/types/createaccounttype/createaccounttype";

export interface UserProfile {
    firstname: string;
    lastname: string;
    email: string;
    DOB: string;
    profilephotos: string[];
    lookingfor: string;
    show_me: string;
    show_gender: boolean;
    gender: string;
    passion?: string[];
    sexualorientation?: string[];
}

export const UserProfile = {
    createUser: async (userProfile: any, access_token: string) => {
        return http
            .post<any>("/v2/userprofile/createuser", userProfile, {
                headers: { Authorization: access_token },
                withCredentials: true
            })
    },
};