import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import FavoritePage from './FavoritePage';
import MyPage from './MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
export default class HomePage extends Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Hottest"
          component={PopularPage}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons
                name={'whatshot'}
                size={26}
                style={{color: color}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Trending"
          component={TrendingPage}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons
                name={'md-trending-up'}
                size={26}
                style={{color: color}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoritePage}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons
                name={'favorite'}
                size={26}
                style={{color: color}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="My"
          component={MyPage}
          options={{
            tabBarIcon: ({color, size}) => (
              <Entypo name={'user'} size={26} style={{color: color}} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
