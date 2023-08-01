import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Modal, StyleSheet, Text } from 'react-native';

interface IFullScreenImageProps {
  url: string;
  title: string;
  description: string;
}

const FullScreenImage = (props: IFullScreenImageProps) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={{ uri: props.url }} style={styles.image} />
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.close} />
          <Text style={styles.title}>{props.title}</Text>
          <Image source={{ uri: props.url }} style={styles.fullScreenImage} />
          <Text style={styles.description}>{props.description}</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  close: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    position: 'absolute',
    top: 20,
    left: 20
  },
  title: {
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
    paddingHorizontal: 20
  },
  fullScreenImage: {
    width: '100%',
    height: 200,
  },
  description: {
    color: '#fff',
    marginTop: 15,
    textAlign: 'center',
    paddingHorizontal: 20
  }
});

export default FullScreenImage;