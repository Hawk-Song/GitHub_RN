import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomePage from '../pages/WelcomPage';
import HomePage from '../pages/HomePage';

const Stack = createStackNavigator();

function AppNavigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Welcome" component={WelcomePage} />*/}
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigators;
