type ApiResponseType<ResponseData = any> = {
    data: ResponseData;
    type: 'success' | 'error';
    status: number;
};

export default ApiResponseType;