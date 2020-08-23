//import liraries
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './InputStyles';

type InputProps = {
    password?: boolean,
    inputStyle?: {},
    containerStyle?: {},
    error?: string
}

const InputComponent = (props: InputProps) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View>
            <View style={[styles.container, props.containerStyle]}>
                <TextInput style={[styles.input, props.inputStyle]} autoCapitalize={false}  secureTextEntry={props.password ? !showPassword : false} {...props} />
                {
                    props.password ?
                        <Text style={styles.text} onPress={() => setShowPassword(!showPassword)} >
                            {showPassword ? 'hide' : 'show'}
                        </Text>
                        : null
                }
            </View>
            {
                props.error ?
                    <Text style={styles.error} >
                        {props.error}
                    </Text>
                    : null
            }
        </View>
    );
};
const Input = React.forwardRef(InputComponent)


export default Input
