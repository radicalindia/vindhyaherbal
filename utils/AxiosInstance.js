import axios from "axios";
import { retrieveSubdomain, retrieveToken } from "./authStorage";

const IP = "192.168.1.4";

const devUrl = `http://${IP.trim()}:8002/`;
const prodUrl = `https://shippiendev.medorn.com/`;

export const http = axios.create({
  baseURL: devUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  timeout: 3000,
});

http.interceptors.request.use(
  async (config) => {
    // const subdomain = await retrieveSubdomain();
    const token = await retrieveToken();
    const bearerAuth = token ? token : null;
    // if (subdomain) config.headers.origin = `http://${subdomain}.medorn.com`;
    if (bearerAuth) config.headers.Authorization = `bearer ${bearerAuth}`;
    // console.log("config", config.url);
    return config;
  },
  (error) => {
    // console.log("##axiosErr", err);
    return Promise.reject(error);
  },
);
