import {View, Text, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import PopularPage from '../pages/PopularPage';
import TrendingPage from '../pages/TrendingPage';
import FavoritePage from '../pages/FavoritePage';
import MyPage from '../pages/MyPage';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
        // tabBar={(props) => <MyTabBar {...props} />}
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

class TabBarComponent extends Component {
  constructor(props) {
    super(props);
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime(),
    };
  }

  render() {
    const {routes, index} = this.props.navigation.state;
    if (routes[index].params) {
      const {theme} = routes[index].params;
      if (theme && theme.updateTime > this.theme.updateTime) {
        this.theme = theme;
      }
      return undefined;
    }
  }
}

function MyTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Text style={{color: isFocused ? 'tomato' : '#gray'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default DynamicTabNavigator;
