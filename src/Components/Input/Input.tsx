//import liraries
import React, { useState } from 'react';
import { View, TextInput, Text, ActivityIndicator } from 'react-native';
import styles from './InputStyles'
import { TouchableOpacity } from 'react-native-gesture-handler';

type InputProps = {
    password?: boolean,
    inputStyle?: {},
    containerStyle?: {},
    error?: string
}

const Button = (props: InputProps) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View>
            <View style={[styles.container, props.containerStyle]}>
                <TextInput style={[styles.input, props.inputStyle]} secureTextEntry={showPassword} {...props} />
                {
                    props.password ?
                        <Text style={styles.text} onPress={() => setShowPassword(!showPassword)} >
                            {showPassword ? 'show' : 'hide'  }
                        </Text>
                        : null
                }
            </View>
            {
                props.error ?
                    <Text>
                        {props.error}
                    </Text>
               : null
            }
        </View>
    );
};

export default Button;
