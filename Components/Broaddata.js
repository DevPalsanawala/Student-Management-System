import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Card } from 'react-native-paper';
import Color from "./Colors";

const Broaddata = (props) => {
    const bcast = props.bcast;
    return (
        <View style={styles.container}>
            <Card style={styles.cardview} elevation={10}>
                <Card.Content>
                    <View style={styles.itemview}>
                        <Text style={styles.itemtxt}>{bcast.Date}</Text>
                        <Text style={styles.itemtxt}>{bcast.Dis}</Text>
                    </View>
                </Card.Content>
            </Card>
        </View >
    )
};
export default Broaddata;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemview: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    itemtxt: {
        color: "black",
        fontSize: 18,
        fontWeight: "600"
    },
    cardview: {
        backgroundColor: Color.card,
        height: 60,
        justifyContent: "center",
        margin: 6,
        marginLeft: 10,
        marginRight: 10,
    }
})