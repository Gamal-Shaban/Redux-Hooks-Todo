//import liraries
import React, { Component, useRef } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import styles from './SignupStyles'
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'
import ToDoItem from '../../Components/ToDoItem';

// create a component
const Signup = () => {
    const actionSheetRef = useRef<ActionSheet | null>(null)

    const _renderItem = () => {
       return <ToDoItem />
    }
    return (
        <View style={styles.container}>
            <Input password />
            <Button title={'login'} onPress={() => {
                const actionSheet = actionSheetRef.current
                if (actionSheet) {
                    actionSheet.show()
                }
            }} />

            <FlatList
                renderItem={_renderItem}
                data={[1, 2, 3]}
            />
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
