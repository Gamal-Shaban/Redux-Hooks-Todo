//import liraries
import React, { useState } from 'react';
import { View, TextInput, Text, ActivityIndicator } from 'react-native';
import styles from './ButtonStyles'
import { TouchableOpacity } from 'react-native-gesture-handler';

type ButtonProps = {
    loading?: boolean,
    title: string
}

const Button = (props: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.container} disabled={props.loading} {...props} >
            {
                props.loading ?
                    <ActivityIndicator />
                    :
                    <Text style={styles.title} >
                        {props.title}
                    </Text>
            }
        </TouchableOpacity>
    );
};

export default Button;
