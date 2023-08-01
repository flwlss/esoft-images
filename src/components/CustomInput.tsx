import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface ICustomInputProps {
  onChangeText: (search: string) => void;
}

const CustomInput = (props: ICustomInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Введите заголовок"
        onChangeText={props.onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 10
  }
})

export default CustomInput