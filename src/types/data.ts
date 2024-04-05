export type signUpType = {
    email: string;
    password: string;
    confirmPassword: string;
}
export type signInType = {
    email: string;
    password: string;
}
export type ApiResponseType<ResponseData = any> = {
    data: any;
    // data: ResponseData;
    // type: "success" | "error";
    // status: number;
};