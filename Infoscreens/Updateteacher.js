import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from "react-native";
import Color from "../Components/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";


const Updateteacher = (props) => {


    const [uname, setuname] = useState(undefined);
    const [uphone, setuphone] = useState("");
    const [uid, setuid] = useState("");
    const [uemail, setuemail] = useState(undefined);
    const [upass, setupass] = useState(undefined);

    let d = props.d;
    const URl = "http://10.0.2.2:3000/Teachers";
    // if (d == "teacher") {
    //     const URl = "http://10.0.2.2:3000/Teachers";
    // }
    // else {
    //     const URl = "http://10.0.2.2:3000/Students";

    // }


    useEffect(() => {
        if (props.select) {
            setuid(props.select.id.toString());
            setuname(props.select.name);
            setuemail(props.select.email);
            setupass(props.select.password);
            setuphone(props.select.phone.toString());
        }
    }, [props.select])

    const updatestu = async () => {
        const url = "http://10.0.2.2:3000/Teachers";
        // console.warn(url);
        const id = props.select.id;
        // console.warn(`${url}/${id}`);
        let result = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: uname,
                phone: uphone,
                email: uemail,
                password: upass,
            })
        });
        result = await result.json();
        if (result) {
            console.warn("Data Updated");
            props.getapidata();
            props.setshow(false);
        }
    }
    return (

        <View style={styles.modalview}>
            <View style={styles.itemcontainer}>
                <Text style={styles.text}>Update TData</Text>

                <View style={styles.inputstyle}>
                    <Ionicons name="information-outline" size={25} color={Color.btn} />
                    <TextInput
                        style={styles.inputfont}
                        value={uid}
                        onChangeText={(text) => setuid(text)}
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
                        value={uname}
                        onChangeText={(text) => setuname(text)}
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
                        value={uphone}
                        onChangeText={(text) => setuphone(text)}
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
                        value={uemail}
                        onChangeText={(text) => setuemail(text)}
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
                        value={upass}
                        onChangeText={(text) => setupass(text)}
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor={"gray"}
                        keyboardType="default"
                    />
                </View>
                <View style={styles.buttonview}>
                    <TouchableOpacity onPress={() => props.setshow(false)}  >
                        <Text style={styles.loginbtn}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={updatestu}>
                        <Text style={styles.loginbtn}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        width: 300,
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
        width: 350,
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
    itemcontainer: {
        width: 360,
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
    modalview: {
        flex: 1,
        backgroundColor: Color.darkbg,
        alignItems: "center",
        justifyContent: "center",
    },
})

export default Updateteacher;