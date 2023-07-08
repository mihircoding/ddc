import { Alert,View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import auth from "@react-native-firebase/auth";

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [error,setError] = useState("");
    const [isValid,setValid] = useState(""); 
    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    };

    const validateEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };

    const doSignUp = () => {
    if (!email) {
      setError("Email required *");
      setValid(false);
      return
    } else if (!password && password.trim() && password.length > 6) {
      setError("Weak password, minimum 5 characters");
      setValid(false);
      return
    } else if (!validateEmail(email)) {
      setError("Invalid Email");
      setValid(false);
      return
    }

    doCreateUser(email,password);
}

  const doCreateUser = async (email, password) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password
      )
      if (response && response.user) {
        Alert.alert("Success ✅", "Account created successfully")
        navigation.navigate('ConfirmEmail');
    }
    } catch (e) {
      console.error(e.message)
    }
  }

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
                    error = {isValid}

                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                    error={isValid}
                />
                <CustomInput
                    placeholder="Repeat Password"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry
                />

                <CustomButton text='Register' onPress={doSignUp} />

                <SocialSignInButtons />

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