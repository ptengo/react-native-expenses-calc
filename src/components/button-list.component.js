import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
export default class CmpButton extends React.Component {

  // handleClick = (event) => {
  //   this.props.handleButtons(event)
  // }

  render() {
    return (
      <View>
        {this.props.buttons.map(button => {
          return (
            <View>
              <button key={button.key} onClick={() => this.props.handleButtons(button)} >
              {/* <button key={button.key} onClick={this.handleClick(button)} > */}
                {button.name}
              </button>
            </View>
          );
        })}
      </View>
    );
  }
}