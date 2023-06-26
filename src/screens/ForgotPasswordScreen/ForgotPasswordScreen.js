import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const onSendPressed = () => {
        console.warn('sendPass');
    };

    const resendCode = () => {
        console.warn('resend code');
    };

    const onBackSignIn = () => {
        console.warn('sign back')
    };

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInput
                    placeholder="Enter your confirmation code"
                    value={username}
                    setValue={setUsername}
                />

                <CustomButton text='Send' onPress={onSendPressed} />
                <CustomButton
                    text="Back to Sign in"
                    onPress={onBackSignIn}
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

export default ForgotPasswordScreen;