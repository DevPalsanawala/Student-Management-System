import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import Timedata from '../Components/Timedata';
import Loder from '../Components/Activityloder';
import ImageBg from '../Components/Background';
import Color from '../Components/Colors';

const Timetable = () => {

    const [Datatime, setDatatime] = useState([]);

    const getapidata = async () => {
        const url = "http://10.0.2.2:3000/Timetable"
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setDatatime(result);
        }
    }
    useEffect(() => {
        getapidata();
    }, []);


    return (
        <View style={styles.main}>
            <ImageBg text={"⏳ Timetable"} />
            {/* <View style={{ justifyContent: "center", height: 150 }}>
                <Text style={styles.title}>Timetable</Text>
            </View> */}

            <View style={{ height: 560, marginBottom: 20, marginTop: "-50%", marginBottom: 20, }}>
                <View style={styles.titleview}>
                    <View style={{ flex: 2, alignItems: "center" }}><Text style={{ fontSize: 25, color: Color.titletxt }}>Day</Text></View>

                    <View style={{ flex: 2, alignItems: "center" }}><Text style={{ fontSize: 25, color: Color.titletxt }}>Subject</Text></View>
                </View>
                <ScrollView>
                    {
                        Datatime.length ?
                            Datatime.map((item, index) => <Timedata item={item} key={index} />)
                            :
                            <Loder />
                    }
                </ScrollView>

            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Color.primary,
    },
    titleview: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 15,
        shadowOpacity: 0.9,
        shadowColor: 'darkblue',
        elevation: 10,
        backgroundColor: Color.titleview,
        margin: 10,
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 10,
        padding: 10,
    },

})
export default Timetable;