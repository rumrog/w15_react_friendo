import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import Search from '../components/Search';
import Profile from '../components/Profile';
import Friends from '../components/Friends';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class HomePageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
       <NavigationContainer independent={true}>
            <Tab.Navigator initialRouteName="Home" >
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Friends" component={Friends} />
            </Tab.Navigator>
        </NavigationContainer>
        </>
    );
  }
}

const styles = StyleSheet.create({
    homePageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HomePageContainer;
