import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');
    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate('Home');
    };

    const resendCode = () => {
        console.warn('resend code');
    };

    const onBackSignIn = () => {
        navigation.navigate('SignIn');
    };

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your Email</Text>
                <CustomInput
                    placeholder="Enter your confirmation code"
                    value={code}
                    setValue={setCode}
                />

                <CustomButton text='Confirm' onPress={onConfirmPressed} />
                
                <CustomButton
                    text="Resend Code"
                    onPress={resendCode}
                    type='SECONDARY'
                />
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

export default ConfirmEmailScreen;