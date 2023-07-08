import { Alert, View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/images/ddc_logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native'
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import auth from '@react-native-firebase/auth';

const SigninScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState("");
    const [isValid, setValid] = useState(true);
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onForgotPasswordPressed = () => {

        navigation.navigate('ForgotPassword');
    };

    const onSignupPressed = () => {
        navigation.navigate('SignUp');
    };

    const validateEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };

    const doLogin = () => {
        if (!email) {
            setError("Email required *");
            setValid(false);
            return;
        } else if (!password && password.trim() && password.length > 6) {
            setError("Weak password, minimum 5 chars");
            setValid(false);
            return;
        } else if (!validateEmail(email)) {
            setError("Invalid Email");
            setValid(false);
            return;
        }

        onSignInPressed(email, password);
    };

    const onSignInPressed = async (email, password) => {
        try {
            console.log("hello here")
            let response = await auth().signInWithEmailAndPassword(email, password)
            console.log('this is response ');
            if (response && response.user) {
                Alert.alert("Success ✅", "Authenticated successfully");
                navigation.navigate('Home');
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode='contain'
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

                <CustomButton text='Sign In' onPress={doLogin} />

                <CustomButton
                    text='Forgot Password'
                    onPress={onForgotPasswordPressed}
                    type='TERTIARY'
                />

                <SocialSignInButtons />

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
export default SigninScreen;