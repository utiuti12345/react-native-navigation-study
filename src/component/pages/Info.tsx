import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {DrawerActions, useNavigation} from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
});

export default function Home() {
    const { dispatch } = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Info</Text>
            <TouchableOpacity onPress={() => dispatch(DrawerActions.openDrawer())}>
                <Text>open drawer</Text>
            </TouchableOpacity>
        </View>
    );
}
