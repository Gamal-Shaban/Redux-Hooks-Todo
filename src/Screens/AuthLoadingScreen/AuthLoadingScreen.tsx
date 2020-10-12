//import liraries
import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { useNavigation } from "react-navigation-hooks";
import styles from './AuthLoadingScreenStyles';




// create a component
const AuthLoadingScreen = () => {
    const { navigate } = useNavigation()

    useEffect(() => {
        _bootstrapAsync();

    }, [])

    // Fetch the token from storage then navigate to our appropriate place
    const _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('token');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        navigate(userToken ? 'AppNavigator' : 'AuthNavigator');
    };

    return (
        <View style={styles.container}>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
        </View>
    );
};


export default AuthLoadingScreen;
