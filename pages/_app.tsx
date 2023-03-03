import Footer from "@/src/component/Footer";
import Top from "@/src/component/Top";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import Head from "next/head";

// 여기에 import 시키면 모든 컴포넌트에서 사용할 수 있다.

// 여기서 props로 넘어온 Component는 현재 페이지를 의미
// pageProps는 데이터 페칭 메소드를 통해 미리 가져온 초기 객체, 이 메소드를 사용하지 않는다면 빈 객체가 전달
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        width: "100%",
        padding: "10%",
        paddingTop: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Top />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
