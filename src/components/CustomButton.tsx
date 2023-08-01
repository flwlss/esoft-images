import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ICustomButtonProps {
  title: string;
  action: () => void
}

const CustomButton = (props: ICustomButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={props.action}>
        <Text style={styles.text}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10
  },
  button: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#000'
  }
})

export default CustomButton