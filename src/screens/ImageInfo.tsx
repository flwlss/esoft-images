import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import store from '../store';

const ImageInfo = () => {
  const {params} = useRoute<any>();
  const [photo, setPhoto] = useState<IPhoto>();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const targetPhoto = store.commonStore.photos?.photos.find(
      x => x.id === params?.photoId,
    );
    if (targetPhoto) {
      setPhoto(targetPhoto);
    }
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Image style={styles.image} source={{uri: photo?.url}} />
      </TouchableOpacity>
      <Modal visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.close}
          />
          <Image source={{uri: photo?.url}} style={styles.fullScreenImage} />
        </View>
      </Modal>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{photo?.title}</Text>
        <Text style={styles.description}>{photo?.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
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
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  fullScreenImage: {
    width: '100%',
    height: 200,
  },
  textWrapper: {
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginVertical: 15,
  },
  description: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
  },
});

export default ImageInfo;
