import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Routes from '../navigation/Routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

interface IFullScreenImageProps {
  url: string;
  id: number;
}

type RootStackParamList = {
  [Routes.IMAGE_INFO]: {
    photoId: number;
  };
};

type Props = StackNavigationProp<RootStackParamList>;

const FullScreenImage = (props: IFullScreenImageProps) => {
  const navigation = useNavigation<Props>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Routes.IMAGE_INFO, {photoId: props.id});
        }}>
        <Image source={{uri: props.url}} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default FullScreenImage;
