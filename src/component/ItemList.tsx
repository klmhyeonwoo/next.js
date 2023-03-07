import { dataType, listType } from "@/@types/type";
import React from "react";
import { Grid } from "semantic-ui-react";
import styles from "./ItemList.module.css";
import Link from "next/link";

export default function ItemList({ list }: listType) {
  console.log(list);
  return (
    <>
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map((item: dataType) => {
            return (
              <>
                <Grid.Column>
                  <Link href={`view/${item.id}`}>
                    <div className={styles.wrap}>
                      <picture>
                        <img
                          src={item.image_link}
                          loading="lazy"
                          alt="API 호출 이미지"
                          className={styles.img_item}
                        />
                      </picture>
                      <strong className={styles.tit_item}>{item.name}</strong>
                      <span className={styles.txt_info}>
                        {item.category} {item.product_type}
                      </span>
                      <strong className={styles.num_price}>
                        ${item.price}
                      </strong>
                    </div>
                  </Link>
                </Grid.Column>
              </>
            );
          })}
        </Grid.Row>
      </Grid>
    </>
  );
}
