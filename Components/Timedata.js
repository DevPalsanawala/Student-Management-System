import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Card } from 'react-native-paper';
import Color from "./Colors";


const Timedata = (props) => {
    const item = props.item;
    return (
        <View style={styles.container}>
            <Card style={styles.cardview} elevation={10}>
                <View style={styles.itemview}>
                    <View style={styles.mainviewtime}>
                        <View>
                            <Text key={item.Day} style={styles.itemtxt}>{item.Day}</Text>
                        </View>
                        <View>
                            <Text style={styles.itemtxt}>{item.Sub}</Text>
                        </View>
                    </View>
                </View>
            </Card>

        </View>
    )
};
export default Timedata;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemview: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    mainviewtime: {
        width: 270,
        height: 38,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    itemtxt: {
        fontSize: 22,
        color: "black",
    },
    cardview: {
        backgroundColor: Color.card,
        padding: 10,
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
    }
})