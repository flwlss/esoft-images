import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import store from './src/store';


const App = () => {

  useEffect(() => {
    store.commonStore.getPhotos()
  }, [])

  return (
    <SafeAreaView>
      <Text>App</Text>
    </SafeAreaView>
  );
}

export default App;