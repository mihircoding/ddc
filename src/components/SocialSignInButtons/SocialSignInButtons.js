import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {
    const onSignInGoogle = () => {
        console.warn('Google sign in')
    };

    return (
        <CustomButton
            text="Sign In with Google"
            onPress={onSignInGoogle}
            bgColor='#FAE9EA'
            fgColor='#DD4D44'
        />
    )
}

export default SocialSignInButtons