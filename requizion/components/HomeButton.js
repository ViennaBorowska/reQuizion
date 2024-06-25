import React from "react";
import { Image } from "react-native";

const HomeButton = () => {
  return (
    <Image
      style={{ height: 50, width: 50, resizeMode: "contain" }}
      source={require("../images/REQUIZION-LOGO.png")}
    />
  );
};

export default HomeButton;
