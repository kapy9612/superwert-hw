import axios, { AxiosResponse, Method } from 'axios';

import { ParamsType } from '@/utils/types';

const request = async <T>(method: Method, url: string, params?: ParamsType) => {
    const response: AxiosResponse<T> = await axios({
        method,
        url: url,
        params,
    });

    return response.data;
};

export const getRequest = async <T>(url: string, params?: ParamsType) => {
    return request<T>('get', url, params);
};
