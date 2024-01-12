import React from "react";
import { View, Text, StyleSheet, Image, StatusBar, Animated } from 'react-native';
import Logo from "../assest/Images/AppLogo.png";
import Color from "../Components/Colors";
const Splash = () => {

    const val = new Animated.ValueXY({ x: 0, y: -200 })
    Animated.spring(val, {
        toValue: { x: 0, y: 150 },
        duration: 30000,
        bounciness: 25,
        useNativeDriver: false
    }).start()
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={Color.primary} />
            {/* <View></View> */}
            <Animated.View style={{
                transform: [
                    { translateX: val.x },
                    { translateY: val.y },
                ]
            }}>
                <View style={{ alignItems: "center", marginTop: 20, }}>
                    <Image source={Logo}
                        style={styles.Logo}
                    />
                </View>
            </Animated.View>
            <View style={{ marginTop: 120 }}>
                <Text style={styles.text}>Develop By </Text>
                <Text style={styles.text2}>Dev💙</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: Color.primary,
    },
    Logo: {
        height: 200,
        width: 200,
    },
    text: {
        fontSize: 18,
        color: "navy",
        fontWeight: "700",
        textAlign: "left"

    },
    text2: {
        fontSize: 18,
        color: "navy",
        fontWeight: "700",
        marginLeft: 70,

    }
})

export default Splash