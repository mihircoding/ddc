import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onRegisterPressed = () => {
        console.warn('Registered');
    };

    const onSignInPressed = () => {
        console.warn('sign up pressed')
    };

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                    
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomInput
                    placeholder="Repeat Password"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry
                />

                <CustomButton text='Register' onPress={onRegisterPressed} />

                <SocialSignInButtons/>

                <CustomButton
                    text="Have an account? Sign in "
                    onPress={onSignInPressed}
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
});

export default SignUpScreen;