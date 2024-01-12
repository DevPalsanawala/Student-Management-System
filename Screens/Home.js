import React from "react";
import { View, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import imgLogin from "../assest/Images/Login.png";
import stuimg from "../assest/Images/student.png";
import timeimg from "../assest/Images/Timetable.png";
import eventimg from "../assest/Images/events.png";
import broadcastimg from "../assest/Images/broadcast.png";
import Imagebtn from "../Components/Imagebtn";
import schoolimg from "../assest/Images/Schoollogo.png";
import ImageBg from "../Components/Background";
import Color from "../Components/Colors";


const Home = ({ navigation }) => {
    return (
        <View style={styles.main}>
            {/* <ImageBackground style={{ width: "100%", height: "70%" }} resizeMode="stretch" source={require('../assest/Images/svg.png')}>

            </ImageBackground> */}
            <ImageBg text={"Home"} wtxt={"🏠"} />
            <StatusBar barStyle={"dark-content"} backgroundColor={Color.statusbar} />
            <View style={styles.container}>
                <View style={styles.InfoContainer}>

                    <Imagebtn
                        onPress={() => navigation.navigate('Students')}
                        source={stuimg}
                        text="Students"
                    />
                    <Imagebtn
                        onPress={() => navigation.navigate('Timetable')}
                        source={timeimg}
                        text="Timetable"
                    />
                </View>
                <View style={styles.InfoContainer}>

                    <Imagebtn
                        onPress={() => navigation.navigate('Event')}
                        source={eventimg}
                        text="Events"
                    />


                    <Imagebtn
                        onPress={() => navigation.navigate('Broadcast')}
                        source={broadcastimg}
                        text="broadcast"
                    />

                </View>
                <View style={styles.InfoContainer}>

                    <Imagebtn
                        onPress={() => navigation.navigate('School')}
                        source={schoolimg}
                        text="School"
                    />


                    <Imagebtn
                        onPress={() => navigation.navigate('Login')}
                        source={imgLogin}
                        text="Login"
                    />

                </View>
                <View style={styles.InfoContainer}></View>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: Color.primary,
    },
    container: {
        height: 570,
        width: 400,
        // alignItems: "center",
        justifyContent: "space-around",
        marginTop: "-54%",
        alignItems: "stretch",
        shadowOpacity: 0.9,
        shadowColor: 'black',
        // elevation: 30,
        borderRadius: 15,
        backgroundColor: Color.primary,
        // backgroundColor: "red"
        // backgroundColor: "#cceeff",
    },
    InfoContainer: {
        // backgroundColor: "red",
        justifyContent: "space-around",
        alignItems: "center",
        margin: 10,
        marginTop: 20,
        flexDirection: "row"
    },
})
export default Home