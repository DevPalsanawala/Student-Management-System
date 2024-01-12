import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native";
import Color from "../Components/Colors";
import ImageBg from "../Components/Background";
import Ionicons from "react-native-vector-icons/Ionicons";


const AddTeacher = ({ navigation }) => {


    const [pname, setpname] = useState("");
    const [pphone, setpphone] = useState("");
    const [pid, setpid] = useState("");
    const [pemail, setpemail] = useState("");
    const [ppass, setppass] = useState("");
    // props.getpagedata().setisUpdate(false);
    const Submitdata = async () => {
        const url = "http://10.0.2.2:3000/Teachers";
        let result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: pid,
                name: pname,
                phone: pphone,
                email: pemail,
                password: ppass,
            })
        })
        console.warn("Data Added successfully");
    }
    const Cancel = (props) => {
        setpid("");
        setpname("");
        setpphone("");
        setpemail("");
        setppass("");
        navigation.navigate({ name: 'Displayteacher' });

    }
    return (
        <View style={styles.main}>
            <ImageBg />
            <View style={styles.Container}>

                <Text style={styles.text}>➕Add Data</Text>
                <View style={styles.inputstyle}>
                    <Ionicons name="information-outline" size={25} color={Color.btn} />
                    <TextInput
                        style={styles.inputfont}
                        value={pid}
                        onChangeText={(text) => setpid(text)}
                        secureTextEntry={false}
                        placeholder="Id"
                        placeholderTextColor="gray"
                        keyboardType="number-pad"
                    />
                </View>
                <View style={styles.inputstyle}>
                    <Ionicons name="person-outline" size={25} color={Color.btn} />
                    <TextInput
                        style={styles.inputfont}
                        value={pname}
                        onChangeText={(text) => setpname(text)}
                        secureTextEntry={false}
                        placeholder="Name"
                        placeholderTextColor="gray"
                        keyboardType="default"
                    />
                </View>
                <View style={styles.inputstyle}>
                    <Ionicons name="call-outline" size={25} color={Color.btn} />
                    <TextInput
                        style={styles.inputfont}
                        value={pphone}
                        onChangeText={(text) => setpphone(text)}
                        secureTextEntry={false}
                        placeholder="Phone"
                        placeholderTextColor="gray"
                        keyboardType="phone-pad"
                    />
                </View>

                <View style={styles.inputstyle}>
                    <Ionicons name="mail-outline" size={25} color={Color.btn} />
                    <TextInput
                        style={styles.inputfont}
                        value={pemail}
                        onChangeText={(text) => setpemail(text)}
                        secureTextEntry={false}
                        placeholder="Email"
                        placeholderTextColor="gray"
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputstyle}>
                    <Ionicons name="mail-outline" size={25} color={Color.btn} />
                    <TextInput
                        style={styles.inputfont}
                        value={ppass}
                        onChangeText={(text) => setppass(text)}
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor={"gray"}
                        keyboardType="default"
                    />
                </View>
                <View style={styles.buttonview}>
                    <TouchableOpacity onPress={Cancel}  >
                        <Text style={styles.loginbtn}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Submitdata} >
                        <Text style={styles.loginbtn}>Submit</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Color.primary
    },
    Container: {
        height: 550,
        width: 350,
        marginTop: "-68%",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: Color.card,
        padding: 20,
        borderRadius: 15,
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowColor: 'black',
        elevation: 20,

    },
    cardview: {
        backgroundColor: Color.card,
        // margin: 5,
        // marginLeft: 10,
        // marginRight: 10,
    },
    inputstyle: {
        backgroundColor: "#e6ffff",
        borderRadius: 10,
        marginTop: 15,
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
    buttonview: {
        marginTop: 20,
        flexDirection: "row",
        height: 70,
        width: 310,
        justifyContent: "space-around",
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
    text: {
        fontSize: 35,
        marginBottom: 10,
        color: "#0288d1",
        fontWeight: "700",
        textAlign: "center"
    },
})

export default AddTeacher;