import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Barbeiro() {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Barbeiros</Text>
            <Text style={styles.cardSubtitle}>Nome:</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 4,
        marginVertical:7
    },

    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',

    },
    cardSubtitle: {
        color: '#999',
        fontSize: 19
    },

});