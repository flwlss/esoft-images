import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface ICustomInputProps {
  onChangeText: (search: string) => void;
  placeholder: string;
  password?: boolean;
}

const CustomInput = (props: ICustomInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        secureTextEntry={props.password && true}
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default CustomInput;
