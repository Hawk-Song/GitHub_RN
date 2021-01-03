import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet, Text, View} from 'react-native';

const Tab = createMaterialTopTabNavigator();
const PopularPage = (props) => {
  const tabNames = ['Java', 'Android', 'iOS', 'React', 'React Native', 'PHP'];
  const tabs = {};
  tabNames.forEach((item, index) => {
    tabs[`tab${index}`] = {
      screen: (props) => <PopularPage {...props} tabLabel={item} />,
    };
  });
  return (
    <Tab.Navigator>
      <Tab.Screen name="Popular" component={PopularTab} />
      <Tab.Screen name="Popular2" component={PopularTab2} />
    </Tab.Navigator>
  );
};

const PopularTab = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>PopularTab</Text>
    </View>
  );
};

const PopularTab2 = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>PopularTab2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default PopularPage;
