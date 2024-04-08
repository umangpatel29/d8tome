export type signUpType = {
    email: string;
    password: string;
    confirmPassword: string;
    closeModal: () => void
}
export type signInType = {
    email: string;
    password: string;
    confirmPassword: string;
    closeModal?: () => void
}

export type loginType = {
    email: string;
    password: string;
    closeModal: () => void
}

export type UserType = {
    email: string;
    password: string;
}

export type ApiResponseType<ResponseData = any> = {
    data: any;
    // data: ResponseData;
    // type: "success" | "error";
    // status: number;
};


export type validOtpType = {
    token: string;
    closeModal: () => void
}