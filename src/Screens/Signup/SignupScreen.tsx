//import liraries
import React, { Component, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './SignupStyles'
import Input from '../../Redux/Components/Input';
import Button from '../../Redux/Components/Button';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'


// create a component
const Signup = () => {
    const actionSheetRef = useRef<ActionSheet | null>(null)
    return (
        <View style={styles.container}>
            <Input />
            <Button title={'login'} onPress={() => {
                const actionSheet = actionSheetRef.current
                if (actionSheet) {
                    actionSheet.show()
                }
            }} />
            <ActionSheet
                styles={{
                wrapper: {
                    paddingBottom: 20
                }
                }}
                ref={actionSheetRef}
                title={'Which one do you like ?'}
                options={['Apple', 'Banana', 'cancel']}
                cancelButtonIndex={2}
                destructiveButtonIndex={1}
                onPress={(index) => { /* do something */ }}
            />
        </View>
    );
};


export default Signup;
