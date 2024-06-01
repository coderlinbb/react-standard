import { post, get } from "@/http/request";
import {
  LoginRequest,
  reLoginRequest,
  LoginResponse,
  TestResponse,
  TestParams,
} from "@/types/api";

// 定义的接口
export const userLogin = (data?: LoginRequest) => {
  return post<LoginResponse>("/login", data, {
    descrition: "xxxxxx",
  });
};

export const refreshUserInfo = (data?: reLoginRequest) => {
  return post<LoginResponse>("/getUserInfo", data, {
    descrition: "xxxxxx",
  });
};

export const getMockData = (param: TestParams) => {
  return get<TestResponse, TestParams>("/test/success", param, {
    descrition: "xxxxxx",
    isHiddenErrorTip: true,
  });
};
