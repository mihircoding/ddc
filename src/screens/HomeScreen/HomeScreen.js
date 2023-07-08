import { View, Text, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import auth from '@react-native-firebase/auth'
import CustomButton from '../../components/CustomButton/CustomButton'
import Navigation from '../../navigation';
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();

  const signOut = () => {
    auth().signOut().then(() => Alert.alert('Logged Out!'));
    navigation.navigate('SignIn');
  };

  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>
        Welcome 
      </Text>

      <CustomButton
        text='Log Out'
        onPress={signOut}
      />
    </View>
  )
}

export default HomeScreen