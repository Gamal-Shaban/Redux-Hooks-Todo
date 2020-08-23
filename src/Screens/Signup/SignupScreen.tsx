//import liraries
import React, { Component, useRef, Fragment } from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './SignupStyles'
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigation } from 'react-navigation-hooks';


const defaultValues = {
    userName: '',
    password: ''
}

// create a component
const Signup = () => {
    const { goBack } = useNavigation()
    const userNameRef = useRef<TextInput | null>(null)
    const passwordRef = useRef<TextInput | null>(null)

    const validationSchema = Yup.object({
        userName: Yup.string().required('required'),
        password: Yup.string().required('required')

    })

    const onSubmit = (values) => {
        alert('dssf')
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
                            onChangeText={handleChange('userName')}
                            errorText={errors.userName}
                            onSubmitEditing={() => {
                                passwordRef.current && passwordRef.current.focus()
                            }
                            }
                            onBlur={handleBlur('userName')}
                            returnKeyType="next"
                            touched={touched.userName}
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
                        />

                        <Button title={'signup'} onPress={handleSubmit}  />
                    </Fragment>
                )}
            </Formik>

            <Button title={'login'} containerStyle={styles.signupContainer}  textStyle={styles.signupTextStyle}
            onPress={()=> goBack()}
            />

        </View>
    );
};


export default Signup;
