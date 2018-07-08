import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { WelcomeScreen } from './screens/welcomeScreen';
import { BuildScreen } from './screens/buildScreen';
import { TestScreen } from './screens/testScreen';
import { DistributeScreen } from './screens/distributeScreen';
import { CrashesScreen } from './screens/crashesScreen';
import { AnalyticsScreen } from './screens/analyticsScreen';
import { PushScreen } from './screens/pushScreen';
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
