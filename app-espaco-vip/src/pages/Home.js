import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

import { useNavigation } from "@react-navigation/native";


export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Seja Bem vido(a)!</Text>
            {/* <Text style={styles.cardSubtitle}>Nome:</Text> */}

            <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#414141',
        padding: 12,
        borderRadius: 4,
        marginVertical: 7
    },

    cardTitle: {
        color:'white',
        fontSize: 24,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    cardSubtitle: {
        color: '#999',
        fontSize: 19
    },

});