import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import Studata from '../Components/Studata';
import Loder from '../Components/Activityloder';
import ImageBg from "../Components/Background";
import Color from '../Components/Colors';
import Teacher from '../Components/Teacher';



const Distech = () => {


    const [Datatech, setDatatech] = useState([]);

    const getapidata = async () => {
        const url = "http://10.0.2.2:3000/Teachers"
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setDatatech(result);
        }
    }
    useEffect(() => {
        getapidata();
    }, []);

    return (
        <View style={{ backgroundColor: Color.primary, flex: 1 }}>
            <ImageBg text={"👨‍🎓 Teacher Data"} />
            {/* <View style={{ justifyContent: "center", height: 150, }}>
                <Text style={styles.title}>Student Data</Text>
            </View> */}


            <View style={styles.main}>
                <View style={styles.titleview}>
                    <View style={{ flex: 1, alignItems: "center" }}><Text style={{ fontSize: 25, color: Color.titletxt }}>Id</Text></View>
                    <View style={{ flex: 2, alignItems: "center" }}><Text style={{ fontSize: 25, color: Color.titletxt }}>Name</Text></View>
                    <View style={{ flex: 3, alignItems: "center" }}><Text style={{ fontSize: 25, color: Color.titletxt }}>Phone</Text></View>
                </View>
                <ScrollView >

                    {
                        Datatech.length ?
                            Datatech.map((items, index) => <Teacher items={items} key={index} />)
                            :
                            <Loder />
                    }
                </ScrollView >
            </View>

        </View>
    )
};


const styles = StyleSheet.create({
    main: {
        // height: 500,
        flex: 1,
        marginTop: "-50%",
        marginBottom: 20,
        // justifyContent: "center",

    },
    titleview: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: 15,
        shadowOpacity: 0.9,
        shadowColor: 'darkblue',
        elevation: 10,
        backgroundColor: Color.titleview,
        marginBottom: 15,
        marginRight: 10,
        marginLeft: 10,
        padding: 13,
    },


})


export default Distech;