import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "@/src/component/ItemList";
import { Divider, Header, Loader } from "semantic-ui-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const API_URL: any = process.env.NEXT_PUBLIC_API_URL;

  function getDate() {
    axios.get(API_URL).then((res) => {
      setList(res.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    getDate();
  }, []);

  return (
    <>
      <Head>
        <title> 현도리 넥스트 테스트 </title>
        <meta name="description" content="코딩 앙마 홈 입니다."></meta>
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
    </>
  );
}
