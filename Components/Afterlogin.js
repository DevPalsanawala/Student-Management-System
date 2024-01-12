import React from "react";
import { View, Image, Pressable, StyleSheet, Text } from 'react-native';
import { Card } from "react-native-paper";
import Color from "./Colors";


const Afterlogin = ({ onPress, source, text, subtxt }) => {
    return (
        <Card style={styles.cardview} elevation={20}>
            <Card.Content>
                <Pressable
                    onPress={onPress}
                    style={({ pressed }) => {
                        return [pressed ? styles.pressed : styles.notPressed]
                    }}
                >
                    <View style={styles.main}>
                        <Image
                            source={source}
                            style={styles.image}
                        />
                        <View style={{ width: 130, height: 90, justifyContent: "flex-start" }}>
                            <Text style={styles.text}>{text}</Text>
                            <Text style={styles.text}>{subtxt}</Text>

                        </View>
                    </View>
                </Pressable>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    main: {
        width: 250,
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },
    image: {
        height: 85,
        width: 85
    },
    text: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: "600",
        color: Color.text,

    },
    pressed: {
        opacity: 0.8,
    },
    notPressed: {
        opacity: 1
    },
    cardview: {
        backgroundColor: Color.card,
        width: 350,
        margin: 10,
        marginLeft: 10,
        marginRight: 10,
    }
})


export default Afterlogin
