import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title> 현도리 넥스트 테스트 </title>
      </Head>
      <div>Hello!</div>
    </>
  );
}
