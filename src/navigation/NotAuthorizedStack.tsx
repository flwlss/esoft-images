import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Routes from './Routes';
import SignIn from '../screens/SignIn';

const NotAuthorizedStack = createStackNavigator();

export default () => {
  return (
    <>
      <NotAuthorizedStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Routes.SIGN_IN}
      >
        <NotAuthorizedStack.Screen
          name={Routes.SIGN_IN}
          component={SignIn}
        />
      </NotAuthorizedStack.Navigator>
    </>
  );
};
