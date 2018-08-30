import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
export default class App extends React.Component {
  render() {
    const { container,  content } = styles;
    return (
      <View style={container}>
        <Header />
        <View style={content}>
          <Text> Hello world</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center'
  },
  header: {
    flex: 1
  },
  content: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center'
  }
});