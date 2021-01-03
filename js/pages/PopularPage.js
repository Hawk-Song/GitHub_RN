import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet, Text, View} from 'react-native';

const Tab = createMaterialTopTabNavigator();
const PopularPage = (props) => {
  const tabNames = ['Java', 'Android', 'iOS', 'React', 'React Native', 'PHP'];
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: styles.tabStyle,
        upperCAseLabel: false,
        scrollEnabled: true,
        style: {
          backgroundColor: '#a67',
        },
        indicatorStyle: styles.indicatorStyle,
        labelStyle: styles.labelStyle,
      }}>
      {tabNames.map((tabName, index) => {
        return (
          <Tab.Screen
            name={tabName}
            component={PopularTab}
            key={`${tabName}${index}`}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const PopularTab = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{route.name}</Text>
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
  tabStyle: {
    minWidth: 50,
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white',
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6,
  },
});

export default PopularPage;
