//import liraries
import React, { useState } from 'react';
import { View, TextInput, Text, ActivityIndicator, TouchableOpacity,  TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native';
import styles from './ButtonStyles'

type ButtonProps = {
    loading?: boolean,
    title: string,
    containerStyle: ViewStyle,
    textStyle: TextStyle
}

const Button = (props: ButtonProps) => {
    return (
        <TouchableOpacity style={[styles.container , props.containerStyle ]} disabled={props.loading} {...props} >
            {
                props.loading ?
                    <ActivityIndicator />
                    :
                    <Text style={[styles.title, props.textStyle]} >
                        {props.title}
                    </Text>
            }
        </TouchableOpacity>
    );
};

export default Button;
