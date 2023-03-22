import { dataType, itemType } from "@/@types/type";
import Item from "@/src/component/Item";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";

const Post = ({ item, name }: any) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title> {item.name} </title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "495" } },
      { params: { id: "488" } },
      { params: { id: "477" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.id;
  const api_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(api_URL);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
