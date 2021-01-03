import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WelcomePage = ({route, navigation}) => {
  const {setIsWelcomeEnd} = route.params;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWelcomeEnd(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <View style={styles.container}>
      <Text>WelcomePage</Text>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
