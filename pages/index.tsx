import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "@/src/component/ItemList";
import { Divider, Header } from "semantic-ui-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getDate() {
    axios.get(API_URL).then((res) => {
      setList(res.data);
    });
  }

  useEffect(() => {
    getDate();
  }, []);

  return (
    <>
      <Head>
        <title> 현도리 넥스트 테스트 </title>
      </Head>
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
      <div>Hello!</div>
    </>
  );
}
