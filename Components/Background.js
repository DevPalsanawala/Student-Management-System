import React, { useEffect, useState } from "react";
import { View, ImageBackground, Text, StyleSheet, Animated } from "react-native";
import Color from "./Colors";


const ImageBg = ({ text, wtxt }) => {

    const val = new Animated.ValueXY({ x: -500, y: 30 })
    Animated.timing(val, {
        toValue: { x: 0, y: 30 },
        duration: 1300,
        useNativeDriver: false
    }).start()

    return (
        <ImageBackground style={{ width: "100%", height: "50%", }} resizeMode="stretch" source={require('../assest/Images/svg.png')}>
            <Animated.View style={{
                alignItems: "center",
                justifyContent: "center",
                transform: [
                    { translateX: val.x },
                    { translateY: val.y },
                ]
            }}>
                <View style={styles.txtview}>
                    <Text style={styles.txt}>{wtxt}</Text>
                    <Text style={styles.txt}>{text}</Text>
                </View>
            </Animated.View>
        </ImageBackground>
    )
}
export default ImageBg;

const styles = StyleSheet.create({
    txt: {
        fontSize: 34,
        textAlign: "center",
        color: Color.title,
        margin: 5,
        // fontFamily: "VictorMono-Bold"
        fontWeight: "700",
    },
    txtview: {
        marginTop: 0,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",

    }
})
