import { atom } from "recoil";
import { IPost } from "../components/types/interfaces";

export const shopCart = atom({
  key: "shopCart",
  default: [] as any[],
});

export const postListGlobal = atom({
  key: "postListGlobal",
  default: [] as IPost[],
});

export const postFilter = atom({
  key: "postFilter",
  default: "",
});
