import React, { useState } from "react";
import { View, StyleSheet, Alert, Text } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Routes from "../navigation/Routes";
import store from "../store";

type RootStackParamList = {
  [Routes.MAIN_SCREEN]: undefined;
};

type Props = StackNavigationProp<RootStackParamList>;

const SignIn = () => {
  const navigation = useNavigation<Props>();
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Авторизация</Text>
      <CustomInput
        placeholder="Логин"
        onChangeText={(login) => {
          setLogin(login)
        }} />
      <CustomInput
        password
        placeholder="Пароль"
        onChangeText={(password) => {
          setPassword(password)
        }} />
      <CustomButton
        action={async () => {
          const signIn = await store.commonStore.signIn(login, password)
          if (signIn) {
            navigation.navigate(Routes.MAIN_SCREEN)
          } else {
            Alert.alert('Неверный логин или пароль!')
          }
        }}
        title="Войти" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
  title: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    marginBottom: 15
  }
})

export default SignIn