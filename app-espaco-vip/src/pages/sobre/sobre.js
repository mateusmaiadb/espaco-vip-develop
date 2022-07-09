import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Mais sobre nós!</Text>
            {/* <Text style={styles.cardSubtitle}>Nome:</Text> */}
            

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
        color: 'white',
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