import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "@/src/component/ItemList";
import { Divider, Header, Loader } from "semantic-ui-react";
import { listType } from "@/@types/type";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ list }: listType) {
  // const [list, setList] = useState([]);
  // const [isLoading, setLoading] = useState(true);
  // const API_URL: any = process.env.NEXT_PUBLIC_API_URL;

  // function getDate() {
  //   axios.get(API_URL).then((res) => {
  //     setList(res.data);
  //     setLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   getDate();
  // }, []);

  return (
    <>
      <Head>
        <title> 현도리 넥스트 테스트 </title>
        <meta name="description" content="코딩 앙마 홈 입니다."></meta>
      </Head>
      {/* {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )} */}
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
    </>
  );
}

export async function getStaticProps() {
  const API_URL: any = process.env.API_URL;
  const res = await axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
