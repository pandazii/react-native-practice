import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button
} from 'react-native';

export default function GridScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* Row */}
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'red' }} />
                {/* Row */}
                <View style={{ flex: 2, flexDirection: 'row', backgroundColor: 'skyblue' }} />
                {/* Row */}
                <View style={{ flex: 2, flexDirection: 'row', backgroundColor: 'steelblue' }}>
                    {/* Col */}
                    <View style={{ flex: 3, flexDirection: 'column', backgroundColor: 'brown' }}>
                        {/* Row */}
                        <View style={{ flex: 0, height: 'auto', flexDirection: 'row', backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{ color: "white" }}>
                                Tony</Text>
                        </View>
                        {/* Row */}
                        <View style={{ flex: 0, height: 'auto', flexDirection: 'row', backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{ color: "white" }}>
                                Tony</Text>
                        </View>
                        {/* Row */}
                        <View style={{ flex: 0, height: 'auto', flexDirection: 'row', backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{ color: "white" }}>
                                Tony</Text>
                        </View>
                    </View>
                    {/* Col */}
                    <View style={{ flex: 2, flexDirection: 'column', backgroundColor: 'red' }}>
                        {/* Row */}
                        <View style={{ flex: 0, height: 'auto', flexDirection: 'row', backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{ color: "white" }}>
                                Tony</Text>
                        </View>
                        {/* Row */}
                        <View style={{ flex: 0, height: 'auto', flexDirection: 'row', backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{ color: "white" }}>
                                Tony</Text>
                        </View>
                        {/* Row */}
                        <View style={{ flex: 0, height: 'auto', flexDirection: 'row', backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{ color: "white" }}>
                                Tony</Text>
                        </View>
                    </View>
                    {/* Col */}
                    <View style={{ flex: 2, flexDirection: 'column', backgroundColor: 'brown' }}>
                        {/* Row */}
                        <View style={{ flex: 0, height: 'auto', flexDirection: 'row', backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{ color: "white" }}>
                                Tony</Text>
                        </View>
                        {/* Row */}
                        <View style={{ flex: 0, height: 'auto', flexDirection: 'row', backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{ color: "white" }}>
                                Tony</Text>
                        </View>
                        {/* Row */}
                        <View style={{ flex: 0, height: 'auto', flexDirection: 'row', backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{ color: "white" }}>
                                Tony</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    style: {

    }
});

