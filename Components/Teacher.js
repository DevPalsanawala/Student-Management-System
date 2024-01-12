import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import { Avatar, Button, Card } from 'react-native-paper';
import Color from "./Colors";

const Teacher = (props) => {
    const items = props.items;
    return (
        <View style={styles.container}  >
            <View style={{ backgroundColor: Color.primary, }}>
                <Card style={styles.cardview} elevation={10}>
                    <Card.Content>
                        <View style={styles.itemview} >
                            <Text style={styles.itemtxt}>{items.id}</Text>
                            <Text style={styles.itemtxt}>{items.name}</Text>
                            <Text style={styles.itemtxt}>{items.phone}</Text>
                        </View>
                    </Card.Content>
                </Card>
            </View>

        </View>
    )
};
export default Teacher;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e6ffff",
    },
    itemview: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    itemtxt: {
        fontSize: 22,
        color: "black",
        fontFamily: "VictorMono-Bold",
    },
    cardview: {
        backgroundColor: Color.card,
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
    }
})