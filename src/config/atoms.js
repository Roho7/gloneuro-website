import { atom } from "recoil";

export const CurrentUser = atom({
  key: "CurrentUser",
  default: {
    user: "",
  },
});

export const searchCatagory = atom({
  key: "SearchCatagory",
  default: {
    catagory: "",
  },
});

export const activeBlog = atom({
  key: "ActiveBlog",
  default: {
    id: "",
    title: "",
    author: "",
    date: "",
    img: "",
    content: "",
    cat1: "",
    cat2: "",
  },
});
