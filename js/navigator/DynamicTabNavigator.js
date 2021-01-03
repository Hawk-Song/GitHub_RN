import {View, Text, TouchableOpacity} from 'react-native';
import React, {Component, useState} from 'react';
import PopularPage from '../pages/PopularPage';
import TrendingPage from '../pages/TrendingPage';
import FavoritePage from '../pages/FavoritePage';
import MyPage from '../pages/MyPage';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
const TABS = {
  PopularPage: {
    name: 'Hottest',
    component: PopularPage,
    iconName: 'whatshot',
    iconType: MaterialIcons,
  },
  TrendingPage: {
    name: 'Trending',
    component: TrendingPage,
    iconName: 'md-trending-up',
    iconType: Ionicons,
  },
  FavoritePage: {
    name: 'Favorite',
    component: FavoritePage,
    iconName: 'favorite',
    iconType: MaterialIcons,
  },
  MyPage: {
    name: 'My',
    component: MyPage,
    iconName: 'user',
    iconType: Entypo,
  },
};

class DynamicTabNavigator extends Component {
  constructor(props) {
    super(props);
    this.activeTintColor = 'tomato';
    this.inactiveTintColor = 'gray';
    this.updateTime = new Date().getTime();
  }

  render() {
    const Tab = createBottomTabNavigator();
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
    const tabs = [PopularPage, TrendingPage, FavoritePage, MyPage];
    PopularPage.name = 'Hottest1';
    return (
      <Tab.Navigator
        tabBar={(props) => (
          <TabBarComponent theme={this.props.theme} {...props} />
        )}
        tabBarOptions={{
          activeTintColor: this.activeTintColor,
          inactiveTintColor: this.inactiveTintColor,
        }}>
        {tabs.map((route) => (
          <Tab.Screen
            name={route.name}
            key={route.name}
            component={route.component}
            options={{
              tabBarIcon: ({color, size}) => (
                <route.iconType
                  name={route.iconName}
                  size={26}
                  style={{color: color}}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    );
  }
}

const TabBarComponent = (props) => {
  // console.log('state: ', props.state);
  const {routes, index} = props.state;
  let theme;
  if (routes[index].params) {
    theme = routes[index].params.theme;
  }
  const newTintColor = theme ? theme.tintColor : props.activeTintColor;
  return <BottomTabBar {...props} activeTintColor={newTintColor} />;
};

export default DynamicTabNavigator;
