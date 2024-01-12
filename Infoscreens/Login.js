import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar, } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import ImageBg from "../Components/Background";
import Color from "../Components/Colors";

const Login = ({ navigation }) => {



    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");

    const [checkemail, setcheckemail] = useState(false);
    const [checkpass, setcheckpass] = useState(false);

    // const [flag, setflag] = useState(true);

    const loginbtn = async () => {

        { !email ? setcheckemail(true) : setcheckemail(false) }
        { !pass ? setcheckpass(true) : setcheckpass(false) }

        if (!email && !pass) {
            return false;
        }

        const url = "http://10.0.2.2:3000/Students";
        let result = await fetch(url);
        result = await result.json();

        if (result) {
            // console.warn(result)
            let flag = false;
            result.forEach(element => {
                if (element.email == email && element.password == pass) {
                    navigation.navigate('Stulogin', { element });
                    flag = true;
                    console.warn("login successful");
                    // console.warn(element)
                }
            });
            if (!flag) {
                console.warn("login failed");
            }
        }
    };

    const adminlogin = () => {
        if (email == "Admin" && pass == "admin123") {
            console.warn("login successful");
            navigation.navigate("Adminpage");

        }
        else {
            console.warn("You are not Administrator");
        }
    };
    return (
        <View style={styles.main}>
            <StatusBar barStyle={"dark-content"} backgroundColor={Color.statusbar} />
            <ImageBg />
            <View style={styles.containerView}>
                <Text style={styles.text}>Login here</Text>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.inputView}>

                        <View style={styles.inputstyle}>
                            <Ionicons name="mail" size={25} color={Color.btn} />
                            <TextInput
                                style={styles.inputfont}
                                value={email}
                                onChangeText={(text) => setemail(text)}
                                secureTextEntry={false}
                                placeholder="Email"
                                placeholderTextColor="gray"
                                keyboardType="email-address"
                            />
                        </View>


                        <View style={styles.inputstyle}>
                            <Ionicons name="finger-print" size={25} color={Color.btn} />
                            <TextInput
                                style={styles.inputfont}
                                value={pass}
                                onChangeText={(text) => setpass(text)}
                                secureTextEntry={true}
                                placeholder="Password"
                                placeholderTextColor={"gray"}
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.errview}>

                            {checkemail || checkpass ? <Text style={styles.ertext} >Email or Password not empty!</Text> : null}
                        </View>
                    </View>

                    <View style={styles.buttonview}>
                        <TouchableOpacity onPress={adminlogin} >
                            <Text style={styles.loginbtn}>Admin</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={loginbtn} >
                            <Text style={styles.loginbtn}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View >

    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Color.primary,
        alignItems: "center",

    },
    containerView: {
        height: 360,
        width: 330,
        marginTop: "-40%",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: Color.card,
        padding: 10,
        borderRadius: 15,
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowColor: 'black',
        elevation: 20,
    },
    text: {
        fontSize: 38,
        marginTop: 0,
        color: "#0288d1",
        fontWeight: "700",
        textAlign: "center"
    },
    inputstyle: {
        backgroundColor: "#e6ffff",
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 12,
        borderColor: Color.btn,
        borderWidth: 1,
    },
    inputfont: {
        fontSize: 18
    },
    inputView: {
        marginTop: 10,
        marginVertical: 0,
        width: 290,
        height: 150,
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        // backgroundColor: "blue",
    },
    buttonview: {
        flexDirection: "row",
        height: 70,
        width: 300,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        // backgroundColor: "red"
    },
    loginbtn: {
        fontSize: 20,
        color: "white",
        fontWeight: "500",
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: Color.btn,
        height: 50,
        width: 130,
        borderRadius: 10,
    },
    ertext: {
        color: "red",
        fontSize: 15,
        marginLeft: 10,
    },
    errview: {
        // backgroundColor: 'blue',
        width: 290

    }
});

export default Login;


{/* <TextInput         
 placeholder="Email"
 placeholderTextColor={"gray"}
 style={styles.inputstyle}
 keyboardType="email-address"

 />
 <TextInput
 placeholder="Password"
placeholderTextColor={"gray"}
style={styles.inputstyle}
keyboardType="default"

/>
<TextInput
placeholder="Phone"
placeholderTextColor={"gray"}
style={styles.inputstyle}
keyboardType="number-pad"
 /> */}