import React, {Component} from 'react';
import PopularPage from '../pages/PopularPage';
import TrendingPage from '../pages/TrendingPage';
import FavoritePage from '../pages/FavoritePage';
import MyPage from '../pages/MyPage';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const TABS = [
  {
    name: 'Hottest',
    component: PopularPage,
    iconName: 'whatshot',
    iconType: MaterialIcons,
  },
  {
    name: 'Trending',
    component: TrendingPage,
    iconName: 'md-trending-up',
    iconType: Ionicons,
  },
  {
    name: 'Favorite',
    component: FavoritePage,
    iconName: 'favorite',
    iconType: MaterialIcons,
  },
  {
    name: 'My',
    component: MyPage,
    iconName: 'user',
    iconType: Entypo,
  },
];

class DynamicTabNavigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        {TABS.map((route) => (
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

export default DynamicTabNavigator;
