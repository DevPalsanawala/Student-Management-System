import React from "react";
import { View, Image, Pressable, StyleSheet, Text } from 'react-native';
import { Card } from "react-native-paper";
import Color from "../Components/Colors";


const Imagebtn = ({ onPress, source, text }) => {
    return (
        <Card style={styles.cardview} elevation={20}>
            <Card.Content>
                <Pressable
                    onPress={onPress}
                    style={({ pressed }) => {
                        return [pressed ? styles.pressed : styles.notPressed]
                    }}
                >
                    <Image
                        source={source}
                        style={styles.image}
                    />
                    <Text style={styles.text}>{text}</Text>
                </Pressable>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 85,
        width: 85
    },
    text: {
        marginTop: 10,
        textAlign: "center",
        fontSize: 22,
        fontWeight: "600",
        color: Color.text
    },
    pressed: {
        opacity: 0.8,
    },
    notPressed: {
        opacity: 1
    },
    cardview: {
        backgroundColor: Color.card,
        alignItems: "center",
        width: 150,
        elevation: 50,
        margin: 10,
        marginLeft: 10,
        marginRight: 10,
    }

})


export default Imagebtn
