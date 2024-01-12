import React from "react";
import { View, ActivityIndicator } from "react-native";

const Loder = () => {
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <ActivityIndicator color={"blue"} size={60} style={{ alignItems: "center" }} />

        </View>
    )
};
export default Loder;