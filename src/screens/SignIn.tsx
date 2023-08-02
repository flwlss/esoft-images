import React from "react";
import { View, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Routes from "../navigation/Routes";

const SignIn = () => {

  const navigation = useNavigation<StackNavigationProp<{ [Routes.MAIN_SCREEN]: undefined }>>();

  return (
    <View style={styles.container}>
      <CustomInput placeholder="Логин" onChangeText={() => { }} />
      <CustomInput placeholder="Пароль" onChangeText={() => { }} />
      <CustomButton
        action={() => {
          navigation.navigate(Routes.MAIN_SCREEN)
        }}
        title="Войти" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default SignIn