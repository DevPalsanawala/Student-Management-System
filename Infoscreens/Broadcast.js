import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import Broaddata from '../Components/Broaddata';
import Loder from '../Components/Activityloder';
import ImageBg from '../Components/Background';
import Color from '../Components/Colors';

const Broadcast = () => {

    const [Databcast, setDatabcast] = useState([]);

    const getapidata = async () => {
        const url = "http://10.0.2.2:3000/broadcast"
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setDatabcast(result);
        }
    }
    useEffect(() => {
        getapidata();
    }, []);



    return (
        <View style={styles.main}>
            <ImageBg text={"🎙️Broadcast "} />
            {/* <View style={{ justifyContent: "center", height: 150 }}>
                <Text style={styles.title}>Broadcast</Text>
            </View> */}
            <View style={{ height: 560, marginBottom: 30, marginTop: "-50%", }}>
                <View style={styles.titleview}>
                    <View style={{}}><Text style={{ fontSize: 25, color: Color.titletxt }}>Date</Text></View>
                    <View style={{}}><Text style={{ fontSize: 25, color: Color.titletxt }}>Broadcast</Text></View>
                </View>
                <ScrollView>
                    {
                        Databcast.length ?
                            Databcast.map((bcast, index) => <Broaddata bcast={bcast} key={index} />)
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
        justifyContent: "space-around",
        borderRadius: 15,
        shadowOpacity: 0.9,
        shadowColor: 'darkblue',
        elevation: 10,
        backgroundColor: Color.titleview,
        margin: 10,
        marginBottom: 15,
        marginRight: 10,
        marginLeft: 10,
        padding: 10,
    },

})


export default Broadcast;