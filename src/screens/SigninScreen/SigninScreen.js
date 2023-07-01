import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/images/ddc_logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native'
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const SigninScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {

        navigation.navigate('Home');
    };

    const onForgotPasswordPressed = () => {

        navigation.navigate('ForgotPassword');
    };

    const onSignupPressed = () => {
        navigation.navigate('SignUp');
    };

    return (
        <ScrollView>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode='contain'
                />
                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />

                <CustomButton text='Sign In' onPress={onSignInPressed} />

                <CustomButton
                    text='Forgot Password'
                    onPress={onForgotPasswordPressed}
                    type='TERTIARY'
                />

                <SocialSignInButtons/>

                <CustomButton
                    text="Don't have an account? Create one "
                    onPress={onSignupPressed}
                    type='TERTIARY'
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SigninScreen