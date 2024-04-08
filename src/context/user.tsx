"use client"
import { loginType, signInType, signUpType, validOtpType } from '@/types/data';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { UserContext } from './useContext';
import { Auth } from '@/services/http/auth';
import { Verifyemail } from '@/services/http/verifyEmail';
import { VerifyPhone } from '@/services/http/verifyNumber';

export type UserProvide = {
    signup: (val: signUpType) => void;
    loader: boolean | null;
    setLoader: (val: boolean) => void
    getOtp: (val: string) => void
    getPhoneOtp: (val: any) => void
    isEmailVerification: boolean | null;
    setIsEmailVerification: (val: boolean) => void
    token: string | null
    password: string
    email: string
    confirmPassword: string
    setToken: (val: string) => void
    setIsEmail: (val: string) => void
    setPassword: (val: string) => void
    setConfirmPassword: (val: string) => void
    phoneNumber: string
    setPhoneNumber: (val: string) => void
    isPhoneNumberCode: boolean | null
    setIsPhoneNumberCode: (val: boolean) => void
    signin: (val: loginType) => void
    isSpinner: boolean | null
    setIsSpinner: (val: boolean) => void
    isLogin: boolean | null
    setIsLogin: (val: boolean) => void
    SignInWithGoogle: () => void
};

export type UserProviderProps = {
    children: React.ReactNode;
};

export const USER_AUTH_TOKEN = 'USER_AUTH_TOKEN';

export const UserProvider = ({ children }: UserProviderProps) => {
    const router = useRouter();
    const [loader, setLoader] = useState(false)
    const [isEmailVerification, setIsEmailVerification] = useState(false)
    const [isValidOtp, setIsValidOtp] = useState(false)
    const [email, setIsEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [token, setToken] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem("USER_AUTH_TOKEN") || "";
        } else {
            return ""; // Or any other default value you want
        }
    });
    const [phoneNumber, setPhoneNumber] = useState("")
    const [isPhoneNumberCode, setIsPhoneNumberCode] = useState(false)
    const [isSpinner, setIsSpinner] = useState(false)
    const [isLogin, setIsLogin] = useState(false)

    const getOtp = (access_token: any) => {
        console.log(access_token, "tokennnnnn")
        Verifyemail.emailOtp(access_token).then(() => {
            console.log("heel")
        }).catch((err: any) => {
            console.log(err)
        })
    }

    const SignInWithGoogle = () => {
        Auth.LoginGoogle().then((res) => {
            console.log(res, "res")
        }).catch((err) => {
            console.log(err)
        })
    }

    const getPhoneOtp = ({ token, closeModal }: validOtpType) => {
        setLoader(true)
        const formattedPhoneNumber = "+91" + phoneNumber;
        VerifyPhone.phoneOtp({ phone: formattedPhoneNumber }, token || "").then(() => {
            console.log("heel")
            closeModal()
            setIsPhoneNumberCode(true)
            setLoader(false)
        }).catch((err: any) => {
            console.log(err)
        });
    };

    const signin = ({ email, password, closeModal }: loginType) => {
        setLoader(true)
        Auth.signIn({
            email,
            password
        }).then((res) => {
            setToken(res?.data?.accessToken)
            localStorage.setItem(USER_AUTH_TOKEN, res?.data?.accessToken)
            closeModal()
            setIsLogin(true)
            setLoader(false)
            router.push("/")
            setIsEmail("")
            setPassword("")
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setLoader(false)
        })
    }

    const signup = ({ email, password, confirmPassword, closeModal }: signUpType) => {
        setLoader(true)
        console.log("api calling")
        Auth.signUp({
            email,
            password,
            confirmPassword,
        }).then((res) => {
            console.log(res.data.accessToken, "token")
            localStorage.setItem(USER_AUTH_TOKEN, res?.data?.accessToken)
            setToken(res?.data?.accessToken)
            // setCookie(USER_AUTH_TOKEN, res.access_token, {
            //     maxAge: 60 * 60 * 24 * 36500, // 100 years
            // });
            // router.push("/mydocuments");
            setPassword("")
            setConfirmPassword("")
            setIsEmail("")
            getOtp(res.data.accessToken)
            closeModal()
            setIsEmailVerification(true);
        }).catch((err) => {
            setPassword("")
            setConfirmPassword("")
            setIsEmail("")
        }).finally(() => {
            setLoader(false)
        })
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userToken = localStorage.getItem(USER_AUTH_TOKEN)
            console.log(userToken, "user token")
            setToken(userToken as string)
            if (userToken) {
                router.push('/')
            } else {
                router.push('/')
            }
        }
    }, []);

    return (
        <UserContext.Provider value={{ signup, loader, setLoader, getOtp, isEmailVerification, setIsEmailVerification, token, password, setPassword, email, setIsEmail, confirmPassword, setConfirmPassword, phoneNumber, setPhoneNumber, isPhoneNumberCode, setIsPhoneNumberCode, getPhoneOtp, signin, setToken, isSpinner, setIsSpinner, isLogin, setIsLogin, SignInWithGoogle }}>{children}</UserContext.Provider>
    )
}
