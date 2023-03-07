import { WrapperProps, gnbType } from "@/@types/type";
import { useRouter } from "next/router";
import React from "react";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
  const router = useRouter();
  let activeItem;

  console.log(router);

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  }

  const goLink = (e: any, data: any) => {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    }
  };

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} onClick={goLink} />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={goLink}
      />
    </Menu>
  );
}
