import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Color from '../Components/Colors';
import ImageBg from '../Components/Background';
import Afterlogin from "../Components/Afterlogin";
import ind from "../assest/Images/ind.png";
import fd from "../assest/Images/fd.png";
import bb from "../assest/Images/bb.png";
import bg from "../assest/Images/bg.png";
import rl from "../assest/Images/rl.png";

const Event = () => {
    return (
        <View style={styles.main}>
            <ImageBg wtxt={"🎉 Events"} />
            <ScrollView style={{ backgroundColor: Color.primary, marginTop: "-50%" }}>
                <View style={styles.container}>

                    <Afterlogin
                        // onPress={}
                        source={ind}
                        text="Independent Day"
                    />
                    <Afterlogin
                        // onPress={}
                        source={fd}
                        text="Field Day"
                        subtxt="Play Fun"
                    />
                    <Afterlogin
                        onPress={() => navigation.navigate('Distech', { element })}
                        source={bb}
                        text="Book Fair"
                    />
                    <Afterlogin
                        // onPress={}
                        source={bg}
                        text="Board Game Night"
                    />
                    <Afterlogin
                        // onPress={}
                        source={rl}
                        text="Relay Day"
                    />

                </View>
            </ScrollView>
        </View >
    )
};
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Color.primary,
    },
    container: {
        flex: 1,
        marginTop: "5%",
        marginBottom: 20,
        // backgroundColor: "red"
    },
})
export default Event;