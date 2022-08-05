import { Response } from "../types/Response";
import axios, { AxiosRequestConfig } from "axios";
import { api } from "../services/ApiService";

const sendApiRequest = (
  type: "post" | "get" | "patch" | "delete",
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<any> => {
  switch (type) {
    case "post":
      return api.post(url, data, config);
    case "get":
      return api.get(url, config);
    case "patch":
      return api.patch(url, data, config);
    case "delete":
      return api.delete(url, config);
  }
};

export const sendRequest = async <T>(
  type: "post" | "get" | "patch" | "delete",
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<Response<T>> => {
  try {
    const response = await sendApiRequest(type, url, data, config);
    if (response.data) {
      return { status: response.status, data: response.data, ok: true };
    }

    return { status: response.status, ok: false };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return {
        ok: false,
      };
    } else {
      throw err;
    }
  }
};
