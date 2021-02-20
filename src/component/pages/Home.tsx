import React from "react";
import { useNavigation,DrawerActions } from "@react-navigation/native";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
});

export default function Home() {
    const { navigate } = useNavigation();
    const { dispatch } = useNavigation();
    const gotoPage2 = React.useCallback(() => {
        navigate("Detail");
    }, [navigate]);
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity onPress={gotoPage2}>
                <Text>goto Detail</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(DrawerActions.openDrawer())}>
                <Text>open drawer</Text>
            </TouchableOpacity>
        </View>
    );
}
