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

export const Loading = atom({
  key: "Loading",
  default: { isLoading: false },
});
