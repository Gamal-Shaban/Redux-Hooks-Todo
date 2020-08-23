//import liraries
import React, { Component, useRef, Fragment } from 'react';
import { View, TextInput, Image, Text } from 'react-native';
import styles from './HomeStyles'
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
const Home = () => {
    const { navigate } = useNavigation()
    const dispatch = useDispatch()
    const data = useSelector(state => state)
    const userNameRef = useRef<TextInput | null>(null)
    const passwordRef = useRef<TextInput | null>(null)

    const validation = Yup.object({
        username: Yup.string().required('required'),
        password: Yup.string().required('required')

    })

    const onSubmit = (values: {username: string, password: string}) => {
        dispatch(Login(values.username, values.password))
    }

    console.log('data??????', data);

    return (
        <View style={styles.container}>
        <Text>dfsdfs</Text>
        </View>
    );
};


export default Home;
