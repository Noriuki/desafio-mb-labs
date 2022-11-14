import { atom } from "recoil";
import { IPost } from "../components/types/interfaces";

export const shopCart = atom({
  key: "shopCart",
  default: [] as any[],
});

export const partnerList = atom({
  key: "partnerList",
  default: [
    { name: "UNISO", image: "/images/parceiros/parceiros-uniso.png" },
    { name: "UNIP", image: "/images/parceiros/parceiros-unip.png" },
    { name: "IBM", image: "/images/parceiros/parceiros-ibm.png" },
    { name: "UFSCAR", image: "/images/parceiros/parceiros-ufscar.png" },
    { name: "USP", image: "/images/parceiros/parceiros-usp.png" },
    { name: "GOOGLE", image: "/images/parceiros/parceiros-google.png" },
  ],
});

export const postListGlobal = atom({
  key: "postListGlobal",
  default: [] as IPost[],
});

export const postFilter = atom({
  key: "postFilter",
  default: "",
});
