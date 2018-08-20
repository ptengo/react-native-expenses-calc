import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Expense extends React.Component {
  render() {
    return (
      <View>
        <Text >{`\u2022 ${this.props.name} - ${this.props.value}€`}</Text>
      </View>
    );
  }
}