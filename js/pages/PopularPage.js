import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet, Text, View} from 'react-native';

const Tab = createMaterialTopTabNavigator();
class PopularPage extends Component {
  constructor(props) {
    super(props);
    this.tabNames = ['Java', 'Android', 'iOS', 'React', 'React Native', 'PHP'];
  }
  _genTabs() {
    const tabs = {};
    this.tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        screen: props => <PopularPage {...this.props} tabLabel={item}/>
      }
    })
  }
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Popular" component={PopularTab} />
        <Tab.Screen name="Popular2" component={PopularTab2} />
      </Tab.Navigator>
    );
  }
}

class PopularTab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>PopularTab</Text>
      </View>
    );
  }
}

class PopularTab2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>PopularTab2</Text>
      </View>
    );
  }
}

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
