import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import Routes from './Routes';
import MainScreen from '../screens/MainScreen';
import ImageInfo from '../screens/ImageInfo';

const RootStack = createStackNavigator();

export default () => {
  return (
    <>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Routes.MAIN_SCREEN}>
        <RootStack.Screen name={Routes.MAIN_SCREEN} component={MainScreen} />
        <RootStack.Screen name={Routes.IMAGE_INFO} component={ImageInfo} />
      </RootStack.Navigator>
    </>
  );
};
