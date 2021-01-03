import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import WelcomePage from '../pages/WelcomPage';

const Stack = createStackNavigator();

function AppNavigators() {
  const [isWelcomed, setIsWelcomeEnd] = useState(false);
  return (
    <NavigationContainer>
      {!isWelcomed && (
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomePage}
            initialParams={{setIsWelcomeEnd: setIsWelcomeEnd}}
          />
        </Stack.Navigator>
      )}
      {isWelcomed && (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppNavigators;
