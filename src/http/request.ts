import { message } from "antd";
import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
} from "axios";

import { BaseResponse } from "@/types/api";

type ExtraConfig = {
  descrition: string; // 接口的描述
  isHiddenErrorTip?: boolean; // 是否隐藏错误提示
};

import { getMessageInfo } from "./status";

const service: AxiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_APP_BASE_API,
  baseURL: "/mock-api/m1/3962903-0-default",
  // withCredentials: true,  // 跨域携带cookie
  timeout: 15000,
});

// axios实例拦截请求
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 可以做请求头的相关处理
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// axios实例拦截响应
service.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    if (response.status === 200) {
      return response;
    }
    response.config.isHiddenErrorTip || message.error(getMessageInfo(response.status));
    return Promise.reject(response);
  },
  // 请求失败
  (error: any) => {
    const { response } = error;
    if (response) {
      response.config.isHiddenErrorTip || message.error(getMessageInfo(response.status));
      return Promise.reject(error);
    }
    response.config.isHiddenErrorTip ||
      message.error(getMessageInfo("网络连接异常,请稍后再试!"));
    return Promise.reject(error);
  }
);

// 二次响应拦截
// 为响应数据进行定制化处理
const requestInstance = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  return new Promise((resolve, reject) => {
    service
      .request<any, AxiosResponse<BaseResponse>>(config)
      .then((response: AxiosResponse<BaseResponse>) => {
        const { data } = response;
        resolve(data as T);
        // 失败提示错误
        if (data.error_code) {
          response.config.isHiddenErrorTip ||
            message.error(getMessageInfo(data.error_code || "500"));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export function get<T = any, U = any>(
  url: string,
  params?: U,
  config: AxiosRequestConfig | ExtraConfig = {}
): Promise<BaseResponse<T>> {
  return requestInstance({ method: "GET", url, params, ...config });
}

export function post<T = any, U = any>(
  url: string,
  data?: U,
  config: AxiosRequestConfig | ExtraConfig = {}
): Promise<BaseResponse<T>> {
  return requestInstance({ method: "POST", url, data, ...config });
}

export function put<T = any, U = any>(
  url: string,
  data?: U,
  config: AxiosRequestConfig | ExtraConfig = {}
): Promise<BaseResponse<T>> {
  return requestInstance({ method: "PUT", url, data, ...config });
}

export function del<T = any, U = any>(
  url: string,
  data?: U,
  config: AxiosRequestConfig | ExtraConfig = {}
): Promise<BaseResponse<T>> {
  return requestInstance({ method: "DELETE", url, data, ...config });
}
