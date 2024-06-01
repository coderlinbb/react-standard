// 后端一般返回的数据结构
export interface BaseResponse<T = any> {
  result: "success" | "failure"; // success 成功，failure 失败
  data?: T; // 成功返回的数据
  error_code?: number | string; // 错误结构状态码
  reason?: string; // 错误原因
}

export interface LoginRequest {
  username: string;
  password: string;
}

// 刷新登录信息需要的参数
export interface reLoginRequest {
  accessToken: string;
}

export interface LoginResponse {
  username: string;
  roles: string[];
  accessToken: string;
}

export interface TestResponse {
  id: number;
  name: string;
  updata_date: string;
}

export interface TestParams {
  name: string;
}
