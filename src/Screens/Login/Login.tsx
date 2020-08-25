//import liraries
import React, { Component, useRef, Fragment } from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './LoginStyles'
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigation } from "react-navigation-hooks";
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../redux/actions/User';



const defaultValues = {
    userName: '',
    password: ''
}

// create a component
const LoginScreen = () => {
    const { navigate } = useNavigation()
    const dispatch = useDispatch()
    const loading = useSelector(state => state?.loading.loading)
    const token = useSelector(state => state)
    const userNameRef = useRef<TextInput | null>(null)
    const passwordRef = useRef<TextInput | null>(null)

    const validation = Yup.object({
        username: Yup.string().required('required'),
        password: Yup.string().required('required')

    })

    const onSubmit = (values: {username: string, password: string}) => {
        dispatch(Login(values.username, values.password, navigate))
    }
    console.log('token>>>', token);

    return (
        <View style={styles.container}>
            <Image source={require('../../Images/Logo.png')} style={styles.image} resizeMode={'contain'} />

            <Formik
                initialValues={defaultValues}
                validationSchema={validation}
                onSubmit={onSubmit}
                enableReinitialize
            >
                {({ handleChange, handleSubmit, touched, handleBlur, errors }) => (
                    <Fragment>
                        <Input
                            containerStyle={styles.containerInputStyle}
                            placeholder={'user name'}
                            onChangeText={handleChange('username')}
                            errorText={errors.userName}
                            onSubmitEditing={() => {
                                passwordRef.current && passwordRef.current.focus()
                            }
                            }
                            onBlur={handleBlur('username')}
                            returnKeyType="next"
                            touched={touched.userName}
                            error={errors.userName}
                        />
                        <Input
                            password
                            containerStyle={[styles.containerInputStyle, { marginTop: 20 }]}
                            placeholder={'password'}
                            onChangeText={handleChange('password')}
                            errorText={errors.password}
                            ref={passwordRef}
                            onSubmitEditing={() => {
                                handleSubmit()
                            }
                            }
                            onBlur={handleBlur('password')}
                            returnKeyType="send"
                            touched={touched.password}
                            error={errors.password}
                        />

                        <Button title={'login'} onPress={handleSubmit} loading={loading}  />
                    </Fragment>
                )}
            </Formik>

            <Button 
                title={'signUp'} 
                containerStyle={styles.signupContainer} 
                textStyle={styles.signupTextStyle} 
                onPress={()=>navigate('Signup')}
                />

        </View>
    );
};


export default LoginScreen;
