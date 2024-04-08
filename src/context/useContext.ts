import { createContext, useContext } from "react";
import { UserProvide } from "./user";

export const UserContext = createContext<UserProvide>({
    signup: () => { },
    loader: null,
    setLoader: () => { },
    getOtp: () => { },
    isEmailVerification: null,
    setIsEmailVerification: () => { },
    token: null,
    password: "",
    email: "",
    confirmPassword: "",
    setPassword: () => { },
    setIsEmail: () => { },
    setConfirmPassword: () => { },
    phoneNumber: "",
    setPhoneNumber: () => { },
    isPhoneNumberCode: null,
    setIsPhoneNumberCode: () => { },
    getPhoneOtp: () => { },
    signin: () => { },
    setToken: () => { },
    isSpinner: null,
    setIsSpinner: () => { },
    isLogin: null,
    setIsLogin: () => { },
    SignInWithGoogle: () => { }
})

export const useUser = () => {
    return useContext(UserContext);
};