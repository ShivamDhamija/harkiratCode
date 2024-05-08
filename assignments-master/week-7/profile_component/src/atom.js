import { atom } from "recoil";

export const followState = atom({
  key: "followState",
  default: 0,
});
export const likeState = atom({
  key: "likeState",
  default: 10,
});
export const photoState = atom({
  key: "photoState",
  default: 0,
});

export const bgColour = atom({
  key: "bgColour",
  default: "red",
});
