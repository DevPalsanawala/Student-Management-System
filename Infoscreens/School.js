import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import ImageBg from '../Components/Background';
import Color from '../Components/Colors';

const School = () => {
    return (
        <View style={styles.main}>
            <ImageBg wtxt={"🏫 School Info"} />
            <View style={styles.container}>
                <View style={{ marginTop: 30, marginBottom: 20, marginLeft: 20, flexDirection: "row", alignItems: "center", }}>
                    <Image style={{ height: 60, width: 60 }} source={require("../assest/Images/Schoollogo.png")} />
                    <Text style={styles.title}>About us</Text>
                </View>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View style={{ marginRight: 30, marginLeft: 30, flex: 4 }}>
                            <Text style={styles.pera}>We believe every child should have access to quality education.
                                We create schools,programs and global communities around the common goal of education for all.
                                100% of online donations go to PoP programs.</Text>
                        </View>
                        <View style={{ marginRight: 30, marginLeft: 30, marginTop: 10, flex: 4 }}>
                            <Text style={styles.titletxt}>➤ What Makes Us Different!</Text>
                            <Text style={styles.pera}>Transparency is more than a buzzword—it’s one of our core values.
                                It enables us to share results and adjust accordingly. Real-time data informs our strategy.
                                Knowing when something is not achieving the desired results allows us to pivot and build upon successful outcomes.</Text>
                        </View>
                        <View style={{ marginRight: 30, marginLeft: 30, marginTop: 10, flex: 4 }}>
                            <Text style={styles.titletxt}>➤ Our Solution</Text>
                            <Text style={styles.pera}>Our comprehensive model brings together all of the adults in a child’s life,
                                including parents, educators, and medical and mental health providers, starting from a very early age.
                                This multidisciplinary approach helps close the achievement gap, ensuring that children and families living in
                                underserved communities receive the support they need to be well, learn, and thrive.  </Text>
                        </View>
                        <View style={{ marginRight: 30, marginLeft: 30, marginTop: 10, flex: 4 }}>
                            <Text style={styles.titletxt}>➤ Our Vision</Text>
                            <Text style={styles.pera}>Our vision is to build a model that can be effectively implemented in diverse communities
                                and sustained on public funding. Over the long term, we seek to have permanent, large-scale, and transformative
                                impact by influencing the policies and public systems that serve children and families.  </Text>
                        </View>

                    </View>
                </ScrollView>
            </View>
        </View>
    )
};
export default School;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: Color.primary,
    },
    container: {
        height: 580,
        width: 390,
        // alignItems: "center",
        justifyContent: "space-around",
        marginTop: "-55%",
        alignItems: "stretch",
        shadowOpacity: 0.9,
        shadowColor: 'black',
        // elevation: 30,
        borderRadius: 15,
        backgroundColor: "rgba(204,238,255,0.1)",
        // backgroundColor: "red"
    },
    title: {
        fontSize: 40,
        marginLeft: 10,
        textAlign: "left",
        color: "navy",
        fontWeight: "600"

    },
    titletxt: {
        fontSize: 24,
        textAlign: "left",
        color: "black",
        fontWeight: "600"
    },
    pera: {
        padding: 5,
        fontSize: 18,
        color: "black",
    }
})