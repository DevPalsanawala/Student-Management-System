import React from 'react';
import { View, StyleSheet, Text, ScrollView } from "react-native";
import stuimg from "../assest/Images/student.png";
import timeimg from "../assest/Images/Timetable.png";
import eventimg from "../assest/Images/events.png";
import broadcastimg from "../assest/Images/broadcast.png";
import Fee from "../assest/Images/Fee.png";
import atd from "../assest/Images/atd.png";
import Teacher from "../assest/Images/Teacher.png";
import Imagebtn from "../Components/Imagebtn";
import ImageBg from '../Components/Background';
import Color from '../Components/Colors';

const Adminpage = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <ImageBg wtxt={"👨‍🏫 Welcome"} text={"Admin"} />
            {/* <View style={styles.textview}>
                <Text style={styles.weltxt}>Welcome Admin</Text>
            </View> */}

            <View style={styles.container}>
                {/* <ScrollView style={{ backgroundColor: Color.primary }} > */}
                <View style={styles.InfoContainer}>
                    <Imagebtn
                        onPress={() => navigation.navigate('Displaystu')}
                        source={stuimg}
                        text="Students"
                    />
                    <Imagebtn
                        onPress={() => navigation.navigate('Displayteacher')}
                        source={Teacher}
                        text="Teachers"
                    />

                </View>
                <View style={styles.InfoContainer}>
                    <Imagebtn
                        // onPress={() => navigation.navigate('Event')}
                        source={eventimg}
                        text="Events"
                    />
                    <Imagebtn
                        onPress={() => navigation.navigate('Displaybcast')}
                        source={broadcastimg}
                        text="broadcast"
                    />
                </View>
                <View style={styles.InfoContainer}>
                    <Imagebtn
                        // onPress={() => navigation.navigate('Event')}
                        source={atd}
                        text="Attendance"
                    />
                    <Imagebtn
                        // onPress={() => navigation.navigate('Broadcast')}
                        source={Fee}
                        text="Fees"
                    />
                </View>
                {/* </ScrollView> */}
            </View>


        </View>
    )
};



const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Color.primary,
    },
    textview: {
        marginRight: 115,
        height: 130,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        height: 580,
        width: 400,
        backgroundColor: Color.primary,
        paddingBottom: 25,
        marginTop: "-50%",
        alignItems: "stretch",
        // shadowOpacity: 0.9,
        // shadowColor: 'black',
        // elevation: 20,
        borderRadius: 20,
        // backgroundColor: "#cceeff",
        // backgroundColor: "red",
        justifyContent: "space-around",
        // marginTop: 70,
        flexDirection: "column",

    },
    InfoContainer: {
        // backgroundColor: "red",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: 5,
        flexDirection: "row"
    },
})

export default Adminpage