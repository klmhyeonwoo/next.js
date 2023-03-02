import React from "react";
import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <img
          style={{ width: "200px" }}
          src="/images/face.png"
          alt="로고 얼굴"
        />
        <Header as={"h1"}>프론트엔드 김현우</Header>
      </div>
      <Gnb />
    </div>
  );
}
