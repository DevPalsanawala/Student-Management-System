import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Pressable, Image, Modal, TextInput } from "react-native";
import Loder from '../Components/Activityloder';
import ImageBg from "../Components/Background";
import { Card } from "react-native-paper";
import Color from '../Components/Colors';
import Ionicons from "react-native-vector-icons/Ionicons";
import Updatestudata from './Updatestudata';
import Updateteacher from './Updateteacher';




const Displayteacher = ({ navigation }) => {

    const [Datatech, setDatatech] = useState([]);
    const [show, setshow] = useState(false);
    const [select, setselect] = useState(undefined);
    const [d, setd] = useState("teacher");
    const URL = "http://10.0.2.2:3000/Teachers";

    const getapidata = async () => {
        const url = URL;
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setDatatech(result);
        }
    }
    useEffect(() => {
        getapidata();
    }, []);

    const deletestu = async (id) => {
        const url = URL;
        // console.warn(`${url}/${id}`)
        let result = await fetch(`${url}/${id}`, {
            method: "DELETE",
        });
        result = await result.json();
        if (result) {
            getapidata();
            console.warn("Teacher Deleted")
        }
    }

    const updatedata = (data) => {
        setshow(true);
        setselect(data);
    }

    // props.setpagedata('set', setisUpdate);
    return (
        <View style={{ backgroundColor: Color.primary, flex: 1, }}>
            <ImageBg text={"👨‍🎓 Teacher Data"} />
            {/* <View style={{ justifyContent: "center", height: 150, }}>
                <Text style={styles.title}>Student Data</Text>
            </View> */}


            <View style={styles.main}>
                <View style={{ alignItems: "flex-end", justifyContent: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('AddTeacher')}>
                        <Card style={styles.Cardadd} elevation={10}>
                            <Card.Content>
                                <Text style={styles.txtbtn}>➕</Text>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleview}>
                    <View style={{ flex: 2, alignItems: "center" }}><Text style={{ fontSize: 25, color: Color.titletxt }}>Id</Text></View>
                    <View style={{ flex: 2, alignItems: "center" }}><Text style={{ fontSize: 25, color: Color.titletxt }}>Name</Text></View>
                    <View style={{ flex: 3, alignItems: "center" }}><Text style={{ fontSize: 25, color: Color.titletxt }}>Opretions</Text></View>
                </View>
                <ScrollView >

                    {
                        Datatech.length ?
                            Datatech.map((items, index) => <Card style={styles.cardview} key={index}>
                                <Card.Content>
                                    <View style={styles.itemview} >
                                        <View style={{ flex: 3, flexDirection: "row", justifyContent: "space-around" }}>
                                            <Text style={styles.itemtxt}>{items.id}</Text>
                                            <Text style={styles.itemtxt}>{items.name}</Text>
                                        </View>
                                        <View style={{ marginLeft: 20, flexDirection: "row", justifyContent: "space-around", alignItems: "flex-end", width: 120 }}>
                                            <View style={styles.iconview}>
                                                <Pressable style={({ pressed }) => {
                                                    return [pressed ? styles.pressed : styles.notPressed]
                                                }}
                                                    onPress={() => updatedata(items)}
                                                >
                                                    <Image style={{ height: 30, width: 40, marginRight: 40 }} source={require("../assest/Images/edit.png")} />
                                                </Pressable>
                                                <Pressable style={({ pressed }) => {
                                                    return [pressed ? styles.pressed : styles.notPressed]
                                                }}
                                                    onPress={() => deletestu(items.id)}>
                                                    <Image style={{ height: 30, width: 30 }} source={require("../assest/Images/delete.png")} />
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>
                                </Card.Content>
                            </Card>)
                            :
                            <Loder />
                    }
                </ScrollView >
                <Modal visible={show} transparent={true}>
                    <Updateteacher setshow={setshow} select={select} getapidata={getapidata} d={d} />
                </Modal>
            </View>


        </View>
    )

};





const styles = StyleSheet.create({
    main: {
        // height: 500,
        flex: 1,
        marginTop: "-57%",
        marginBottom: 20,
        // justifyContent: "center",

    },
    titleview: {
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 15,
        shadowOpacity: 0.9,
        shadowColor: 'darkblue',
        elevation: 10,
        backgroundColor: Color.titleview,
        marginBottom: 15,
        marginRight: 10,
        marginLeft: 10,
        padding: 12,
    },
    Cardadd: {
        textAlign: "center",
        textAlignVertical: "center",
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: Color.btn,
        width: 100,
        borderRadius: 5,
    },
    txtbtn: {
        fontSize: 22,
        textAlign: "center",
        color: Color.titletxt,
        fontWeight: '500'
    },
    itemview: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    itemtxt: {
        fontSize: 20,
        color: "black",
    },
    pressed: {
        opacity: 0.3,
    },
    notPressed: {
        opacity: 1
    },
    cardview: {
        backgroundColor: Color.card,
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    iconview: {
        flex: 2,
        justifyContent: "flex-end",
        flexDirection: "row"
    },





})


export default Displayteacher;