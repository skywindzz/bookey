import React from 'react';
import { AppLoading } from 'expo';
import { Title, Text, Card } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import Libraries from './pages/libraries';
import BookTracker from './pages/bookTracker';
import AddBook from './pages/addBook';

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      book: [],
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Bookey' component={Home} />
          <Stack.Screen name='Libraries' component={Libraries} />
          <Stack.Screen
            name='BookTracker'
            component={BookTracker}
            initalParams={{ bookCopy: null }}
            book={this.book}
          />
          <Stack.Screen
            name='AddBook'
            component={AddBook}
            addToBookList={this.addToBookList}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
