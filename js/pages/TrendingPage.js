import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const TrendingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>TrendingPage</Text>
      <Button
        title={'change theme'}
        onPress={() =>
          navigation.setParams({
            theme: {
              tintColor: 'blue',
              updateTime: new Date().getTime(),
            },
          })
        }
      />
    </View>
  );
};
export default TrendingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
