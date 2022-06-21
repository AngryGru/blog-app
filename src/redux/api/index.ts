import { create } from "apisauce";

type UserType = {
  username: string;
  password: string;
  email: string;
};

const API = create({
  baseURL: "https://studapi.teachmeskills.by/",
});

const getPosts = ({ search = "", limit = 2, offset = 0, order = "date" }) => {
  return API.get("/blog/posts/", { search, limit, offset, order });
};

const getSinglePost = (id: string) => {
  return API.get(`/blog/posts/${id}/`);
};

const registerUserApi = (userData: UserType) => {
  return API.post("/auth/users/", userData);
};

const activateUserApi = (uid: any, token: any) => {
  return API.post("/auth/users/activation/", { uid, token });
};

const loginUserApi = (data: { email: string; password: string }) => {
  return API.post("/auth/jwt/create/", data);
};

const getUserInfoApi = (token: any) => {
  return API.get(
    "/auth/users/me/",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

const verifyToken = (token: string) => {
  return API.post("/auth/jwt/verify/", { token });
};

const getNewAccessToken = (refresh: string) => {
  return API.post("/auth/jwt/refresh/", { refresh });
};

const getMyPostsApi = (token: any) => {
  return API.get(
    "/blog/posts/my_posts/",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

const createPostApi = (token: any, postData: any) => {
  return API.post("/blog/posts/", postData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export {
  getPosts,
  getSinglePost,
  registerUserApi,
  activateUserApi,
  loginUserApi,
  getUserInfoApi,
  verifyToken,
  getNewAccessToken,
  getMyPostsApi,
  createPostApi,
};
