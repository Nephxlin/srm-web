import axios from "axios";

type IServiceTypes = "SRM" | "USER";

type ISRMService =
  | "pesquisas"
  | "preço-sugestao"
  | "pesquisadores"
  | "coleta-precos"
  | "unidades-medida"
  | "produto-pesquisado"
  | "produtos"
  | "marcas"
  | "lojas-rest-controller"
  | "concorrentes";

type IUserService = "user";

type IPaths<T> = T extends "SRM"
  ? ISRMService
  : T extends "USER"
  ? IUserService
  : never;

type IMethodsRequest = "get" | "post" | "delete" | "put" | "patch";

const API = axios.create({
  baseURL: "https://instivo.tk/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

type IMakeCallOptions<T extends IServiceTypes> = {
  baseService: T;
  path: IPaths<T>;
  data?: any;
};

function MakeCall<T extends IServiceTypes>({
  baseService,
  path,
  data,
}: IMakeCallOptions<T>) {
  const url = `https://api-url/${baseService}/${path}`;

  const request = async <T>(
    method: IMethodsRequest,
    url: string,
    data?: any,
    headers?: any
  ) => {
    const response = await API({
      method,
      url,
      data,
      headers,
    });
    return response.data as T;
  };

  return {
    get: async (headers?: any) => request("get", url, undefined, headers),
    post: async (data: any, headers?: any) =>
      request("post", url, data, headers),
    put: async (data: any, headers?: any) => request("put", url, data, headers),
    patch: async (data: any, headers?: any) =>
      request("patch", url, data, headers),
    delete: async (headers?: any) => request("delete", url, undefined, headers),
  };
}

// Example usage:
const srmResponse = await MakeCall({
  baseService: "SRM",
  path: "produtos",
}).get();
const userResponse = await MakeCall({
  baseService: "USER",
  path: "user",
}).get();
