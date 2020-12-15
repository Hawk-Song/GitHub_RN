import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

export default class WelcomePage extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      //router to first page
      NavigationUtil.resetToHomePage(this.props);
    }, 200);
  }

  componentWillUnmount() {
    //when page is destroyed, clean timer
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>WelcomePage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
