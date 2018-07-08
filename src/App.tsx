import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { WelcomeScreen } from './screens/welcomeScreen';
import { CodePushScreen } from './screens/codePushScreen';

const RootTabNavigator = TabNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    CodePush: {
      screen: CodePushScreen
    }
  },
  {
    initialRouteName: 'Welcome',
    tabBarOptions: {
      style: {
        backgroundColor: "#252525"
      },
    },
    navigationOptions: {
      tabBarVisible: false,
    },
    lazy: false,
    swipeEnabled: true
  }
);

export default class App extends React.Component {
  render() {
  return <RootTabNavigator />;
  }
}
