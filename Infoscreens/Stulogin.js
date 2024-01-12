import React from "react";
import { StyleSheet, View, Text } from "react-native";
import atd from "../assest/Images/atd.png";
import Teacher from "../assest/Images/Teacher.png";
import Fee from "../assest/Images/Fee.png";
import pro from "../assest/Images/pro.png";
import Afterlogin from "../Components/Afterlogin";
import ImageBg from "../Components/Background";
import Color from "../Components/Colors";



const Stulogin = ({ navigation, route }) => {
    const { element } = route.params;
    // console.log("Received 'element' data:", element)
    const { name, email, id, phone, } = element;
    return (
        <View style={styles.main} >
            <ImageBg wtxt={"👨‍🎓 Welcome"} text={name} />
            <View style={styles.container}>
                <Afterlogin
                    // onPress={}
                    source={atd}
                    text="My"
                    subtxt="Attendance"
                />
                <Afterlogin
                    // onPress={}
                    source={Fee}
                    text="My"
                    subtxt="Fees"
                />
                <Afterlogin
                    onPress={() => navigation.navigate('Distech', { element })}
                    source={Teacher}
                    text="Over"
                    subtxt="Teachers"
                />
                <Afterlogin
                    onPress={() => navigation.navigate('Profile', { element })}
                    source={pro}
                    text="My"
                    subtxt="Profile"
                />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Color.primary
    },
    container: {
        height: 550,
        width: 400,
        backgroundColor: Color.primary,
        marginTop: "-50%",
        // backgroundColor: "#cceeff",
        justifyContent: "space-between",
        alignItems: "center",
        // marginTop: 70,
        flexDirection: "column",

    }
})
export default Stulogin;