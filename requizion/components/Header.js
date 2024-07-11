import React from "react";
import { Image } from "react-native";

const Header = () => {
  return (
    <Image
      style={{ height: 300, width: "100%", resizeMode: "contain" }}
      source={require("../images/REQUIZION.jpg")}
    />
  );
};

export default Header;
