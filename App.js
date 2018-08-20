import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/pages/home.page';
export default class App extends React.Component {

  constructor() {
    super();
    // this.addReminder = this.addReminder.bind(this);
    // this.buttonsHandler = this.buttonsHandler.bind(this);
    // this.handleOnAddReminder = this.handleOnAddReminder.bind(this);
    // this.id = 1;
    // this.state = {
    //   expenses: [],
    //   buttons: [{ name: 'Delete All', key: 'deleteAll' }]
    // };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Expenses Calc</Text>
        <HomePage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
