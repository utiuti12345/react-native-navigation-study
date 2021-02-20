import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
});

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    );
}
