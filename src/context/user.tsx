"use client"
import { loginType, signUpType, validOtpType } from '@/types/data';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { UserContext } from './useContext';
import { Auth } from '@/services/http/auth';
import { Verifyemail } from '@/services/http/verifyEmail';
import { VerifyPhone } from '@/services/http/verifyNumber';
import { ToastContainer, toast } from 'react-toastify';

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
    setPhoneNumber: (val: any) => void
    isPhoneNumberCode: boolean | null
    setIsPhoneNumberCode: (val: boolean) => void
    signin: (val: loginType) => void
    isSpinner: boolean | null
    setIsSpinner: (val: boolean) => void
    isLogin: boolean | null
    setIsLogin: (val: boolean) => void
    SignInWithGoogle: () => void
    activeIndex: number | null
    setActiveIndex: (val: number) => void
    activeDiv: number | null
    setActiveDiv: (val: number | null) => void
    isAccountCreated: boolean | null
    setIsAccountCreated: (val: boolean) => void
    isSignIn: boolean | null
    setIsSignIn: (val: boolean) => void
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
    const [isSignIn, setIsSignIn] = useState(false);
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
    const [activeIndex, setActiveIndex] = useState(0)
    const [activeDiv, setActiveDiv] = useState<number | null>(null);
    const [isAccountCreated, setIsAccountCreated] = useState(false);

    const getOtp = (access_token: any) => {
        console.log(access_token, "tokennnnnn")
        Verifyemail.emailOtp(access_token).then(() => {
            console.log("heel")
        }).catch((err: any) => {
            console.log(err)
        }).finally(() => setLoader(false))
    }

    const SignInWithGoogle = () => {
        Auth.LoginGoogle().then((res) => {
            console.log(res, "res")
        }).catch((err) => {
            console.log(err)
        })
    }

    console.log(phoneNumber, "phone number")

    const getPhoneOtp = ({ token, closeModal }: validOtpType) => {
        setLoader(true)
        let phonenumber = localStorage.getItem('phoneNumber')
        if (!phonenumber) localStorage.setItem('phoneNumber', phoneNumber)
        VerifyPhone.phoneOtp({ phone: localStorage.getItem('phoneNumber') }, token || "").then(() => {
            console.log("heel")
            closeModal()
            setIsPhoneNumberCode(true)
            setPhoneNumber("")
        }).catch((err: any) => {
            console.log(err)
            setPhoneNumber("")
        }).finally(() => setLoader(false))
    };

    const signin = ({ email, password, closeModal }: loginType) => {
        setLoader(true)
        Auth.signIn({
            email,
            password
        }).then((res) => {
            setToken(res?.data?.accessToken)
            localStorage.setItem("accountCreated", "true")
            closeModal()
            // setIsLogin(true)
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
            localStorage.setItem(USER_AUTH_TOKEN, res?.data?.accessToken)
            localStorage.setItem("email", email)
            setToken(res?.data?.accessToken)
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
        <>
            <UserContext.Provider value={{ signup, isSignIn, setIsSignIn, loader, setLoader, getOtp, isEmailVerification, setIsEmailVerification, token, password, setPassword, email, setIsEmail, confirmPassword, setConfirmPassword, phoneNumber, setPhoneNumber, isPhoneNumberCode, setIsPhoneNumberCode, getPhoneOtp, signin, setToken, isSpinner, setIsSpinner, isLogin, setIsLogin, SignInWithGoogle, activeIndex, setActiveIndex, activeDiv, setActiveDiv, isAccountCreated, setIsAccountCreated }}>{children}</UserContext.Provider>
        </>
    )
}
