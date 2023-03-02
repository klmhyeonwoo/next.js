import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // Next.js 페이지들은 마크업 정의를 (html, head, body 태그와 같은)건너뛰기 때문에 html, head, body와 같은 태그를 만들어야할 때는 document 파일을 필수적으로 생성해야한다.
  // document 파일이 있어야 마크업 부분을 수정 및 커스텀할 수가 있다.
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
