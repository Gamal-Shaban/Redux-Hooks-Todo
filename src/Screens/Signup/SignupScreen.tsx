//import liraries
import React, { Component, useRef, Fragment } from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './SignupStyles'
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigation } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { Signup } from '../../redux/actions/User';


const defaultValues = {
    username: '',
    password: ''
}

// create a component
const SignupScreen = () => {
    const { goBack } = useNavigation()
    const navigation = useNavigation()
    const loading = useSelector(state => state?.loading.loading)
    const dispatch = useDispatch()
    const userNameRef = useRef<TextInput | null>(null)
    const passwordRef = useRef<TextInput | null>(null)

    const validationSchema = Yup.object({
        username: Yup.string().required('required'),
        password: Yup.string().required('required')

    })

    const onSubmit = (values: { username: string, password: string }) => {
        dispatch(Signup(values.username, values.password, navigation))
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../Images/Logo.png')} style={styles.image} resizeMode={'contain'} />

            <Formik
                initialValues={defaultValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
            >
                {({ handleChange, handleSubmit, touched, handleBlur, errors }) => (
                    <Fragment>
                        <Input
                            containerStyle={styles.containerInputStyle}
                            placeholder={'user name'}
                            onChangeText={handleChange('username')}
                            error={errors.username}
                            onSubmitEditing={() => {
                                passwordRef.current && passwordRef.current.focus()
                            }
                            }
                            returnKeyType="next"
                            touched={touched.username}
                        />
                        <Input
                            password
                            containerStyle={[styles.containerInputStyle, { marginTop: 20 }]}
                            placeholder={'password'}
                            onChangeText={handleChange('password')}
                            error={errors.password}
                            ref={passwordRef}
                            onSubmitEditing={() => {
                                handleSubmit()
                            }
                            }
                            returnKeyType="send"
                            touched={touched.password}
                        />

                        <Button title={'signup'} onPress={handleSubmit} loading={loading}  />
                    </Fragment>
                )}
            </Formik>

            <Button title={'login'} containerStyle={styles.signupContainer} textStyle={styles.signupTextStyle}
                onPress={() => goBack()}
            />

        </View>
    );
};


export default SignupScreen;
