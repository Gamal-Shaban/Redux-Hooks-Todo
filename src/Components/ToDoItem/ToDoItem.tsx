//import liraries
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './ToDoItemStyles'
import { SwipeItem, SwipeButtonsContainer } from 'react-native-swipe-item'

type ToDOItemProps = {

}

const ToDoItem = (props: ToDOItemProps) => {
    const leftButton = (
        <SwipeButtonsContainer
            style={{
                alignSelf: 'center',
                aspectRatio: 1,
                // flexDirection: 'column',
                padding: 10,
                backgroundColor: 'red',
                borderRadius: 10,
            }}
            
        >
            <TouchableOpacity
                onPress={() => console.log('left button clicked')}
            >
                <Text>remove</Text>
            </TouchableOpacity>
        </SwipeButtonsContainer>
    );
    const rightButton = (
        <SwipeButtonsContainer
            style={{
                alignSelf: 'center',
                flexDirection: 'column',
                
                backgroundColor: 'green',
                borderRadius: 10,
            }}
            
        >
            <TouchableOpacity
                onPress={() => console.log('left button clicked')}
                style={{padding: 10,}}
            >
                <Text>done</Text>
            </TouchableOpacity>
        </SwipeButtonsContainer>
    );
    return (
        <SwipeItem
        style={styles.button}
        swipeContainerStyle={styles.swipeContentContainerStyle}
        leftButtons={leftButton}
        rightButtons={rightButton}
    >
         <Text>
             sfdsfsdf
         </Text>
         </SwipeItem>
    );
};

export default ToDoItem;
