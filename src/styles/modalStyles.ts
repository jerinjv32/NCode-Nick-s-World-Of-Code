import { StyleSheet } from "react-native";
import { transparent } from "./colors";

const modalStyles = StyleSheet.create({
        overlay: {
            position: 'absolute',
            backgroundColor: transparent,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
});

export default modalStyles;
