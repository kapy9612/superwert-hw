import axios, { AxiosResponse, Method } from 'axios';

const request = async <T>(
    method: Method,
    url: string,
    params?: any,
    body?: any,
) => {
    const response: AxiosResponse<T> = await axios({
        method,
        url: url,
        params,
        data: body,
    });

    return response.data;
};

export const getRequest = async <T>(url: string, params?: any) => {
    return request<T>('get', url, params);
};
