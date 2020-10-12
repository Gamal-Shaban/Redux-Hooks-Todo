//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigation from './Navigation'

// create a component
const RootContainer = () => {
    return (
        <View style={styles.container}>
            <Navigation />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default RootContainer;
