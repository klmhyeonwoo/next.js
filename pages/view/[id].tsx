import { dataType, itemType } from "@/@types/type";
import Item from "@/src/component/Item";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<[] | Array<dataType>>([]);
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res);
      setData(res.data);
    });
  }

  useEffect(() => {
    if (id) {
      getData();
    }
  }, []);

  return <Item item={data} />;
};

export default Post;
