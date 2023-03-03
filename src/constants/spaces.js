import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const spaces = { 
    widthSix: width * .6,
    heightHalf: height / 2,
    width,
    "p-normal": "p-4"
}

export default spaces