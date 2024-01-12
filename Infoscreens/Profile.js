import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import ImageBg from "../Components/Background";
import Color from "../Components/Colors";
import bb from "../assest/Images/Profile.png";
import { Card } from "react-native-paper";

const Profile = ({ route }) => {
    const { element } = route.params;
    const { name, email, id, phone, } = element;
    return (
        <View style={styles.main}>
            <ImageBg text={"📑 Profile"} />
            <View style={styles.containerView}>
                <View style={styles.Img}>
                    <Image
                        source={bb}
                        style={styles.image}
                    />
                    {/* <Text>Hello</Text> */}
                </View>

                <View style={styles.dataview}>
                    <View style={styles.cardview}>
                        <Text style={styles.txt}>ID : {element.id}</Text>
                    </View>
                    <View style={styles.cardview}>
                        <Text style={styles.txt}>Name : {element.name}</Text>
                    </View>
                    <View style={styles.cardview}>
                        <Text style={styles.txt}>Email : {element.email}</Text>
                    </View>
                    <View style={styles.cardview}>
                        <Text style={styles.txt}>Ph : 91+  {element.phone}</Text>
                    </View>

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Color.primary,
        alignItems: "center",

    },
    containerView: {
        height: 500,
        width: 350,

        marginTop: "-45%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Color.card,
        padding: 5,
        borderRadius: 15,
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowColor: 'black',
        elevation: 20,
    },
    Img: {
        backgroundColor: Color.statusbar,
        height: 120,
        width: 120,
        marginTop: 10,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 20,
        shadowColor: 'black',
        shadowRadius: 30,
        shadowOpacity: 1,
    },
    dataview: {
        height: 320,
        width: 300,
        justifyContent: 'center',
        padding: 10,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: "lightgrey",
        marginBottom: 20,
        // backgroundColor: "red"
    },
    image: {
        height: 90,
        width: 90
    },
    cardview: {
        backgroundColor: "#cae9ff",
        // width: 350,
        borderRadius: 15,
        shadowOpacity: 0.6,
        shadowRadius: 5,
        shadowColor: 'black',
        elevation: 20,
        alignItems: "center",
        padding: 10,
        margin: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    txt: {
        fontSize: 20,
        color: Color.text
    }
})

export default Profile;