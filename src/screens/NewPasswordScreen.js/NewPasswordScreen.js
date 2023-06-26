import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const onSubmitPressed = () => {
        console.warn('submitted');
    };

    const onBackSignIn = () => {
        console.warn('sign back')
    };

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInput
                    placeholder="Code"
                    value={code}
                    setValue={setCode}
                />

                <CustomInput
                 placeholder='Enter your new password'
                  value={newPassword}
                  setValue={setNewPassword} />

                <CustomButton
                    text="Submit"
                    onPress={onSubmitPressed}
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

export default NewPasswordScreen;