import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Routes from './Routes';
import MainScreen from '../screens/MainScreen';
import SignIn from '../screens/SignIn';
import ImageInfo from '../screens/ImageInfo';

const RootStack = createStackNavigator();

const Navigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.SIGN_IN}
    >
      <RootStack.Screen
        name={Routes.SIGN_IN}
        component={SignIn}
      />
      <RootStack.Screen
        name={Routes.MAIN_SCREEN}
        component={MainScreen}
      />
       <RootStack.Screen
        name={Routes.IMAGE_INFO}
        component={ImageInfo}
      />
    </RootStack.Navigator>
  );
}

export default Navigation
