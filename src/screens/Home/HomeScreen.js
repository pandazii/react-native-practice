import React from 'react'

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView
}
    from 'react-native'

export default function HomeScreen() {
    return (
        <SafeAreaView style={HomeScreenStyles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 2, height: 'auto' }} horizontal>
                <View style={HomeScreenStyles.item}>
                    <Text>
                        Test
                </Text>
                </View>
                <View style={HomeScreenStyles.item}>
                    <Text>
                        Test
                </Text>
                </View>
                <View style={HomeScreenStyles.item}>
                    <Text>
                        Test
                </Text>
                </View>
                <View style={HomeScreenStyles.item}>
                    <Text>
                        Test
                </Text>
                </View>
                <View style={HomeScreenStyles.item}>
                    <Text>
                        Test
                </Text>
                </View>
                <View style={HomeScreenStyles.item}>
                    <Text>
                        Test
                     </Text>
                </View>
                <View style={HomeScreenStyles.item}>
                    <Text>
                        Test
                 </Text>
                </View>
                <View style={HomeScreenStyles.item}>
                    <Text>
                        Test
                 </Text>
                </View>
                <View style={HomeScreenStyles.item}>
                    <Text>
                        Test
                 </Text>
                </View>
            </ScrollView>
            <ScrollView contentContainerStyle={{ flexGrow: 5 }} horizontal>
                <View style={{ flex: 10, backgroundColor: 'green' }} />
            </ScrollView>
        </SafeAreaView>
    )
}

const HomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey'
    },

    item: {
        paddingVertical: 8,
        borderWidth: 0,
        borderColor: "red",
        borderRadius: 6,
        backgroundColor: "white",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        margin: 15,
        height: 100
    }
})

