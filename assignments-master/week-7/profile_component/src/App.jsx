import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { likeState, photoState, followState, bgColour } from "./atom";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <h1>dsa</h1>
      <State />
      <BgButton />
    </RecoilRoot>
  );
}

function State() {
  const followCount = useRecoilValue(followState);
  const likeCount = useRecoilValue(likeState);
  const photoCount = useRecoilValue(photoState);
  return (
    <div>
      <h3>followers {followCount}</h3>
      <h3>likes {likeCount}</h3>
      <h3>photos {photoCount}</h3>
    </div>
  );
}
function BgButton() {
  const [bgColourValue, setBgColour] = useRecoilState(bgColour);
  return (
    <>
      <h1 style={{ backgroundColor: bgColourValue }}>hello</h1>
      <button onClick={() => setBgColour("blue")}>blue</button>
    </>
  );
}
export default App;
