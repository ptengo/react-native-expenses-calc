import React, { Component } from 'react';
import Expense from '../components/expense.component';
import { StyleSheet, Text, View, ListView } from 'react-native';

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.id = 1;
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows([
        {
          id: 1,
          name: 'Super',
          value: 5,
        },
        {
          id: 2,
          name: 'Pizza',
          value: 10,
        }
      ]),
      expenses: [
        {
          id: 1,
          name: 'Super',
          value: 5,
        }
      ],
      buttons: [{ name: 'Delete All', key: 'deleteAll' }]
    };
  }

  renderRow(data) {
    return (
      // <Text>{`\u2022 ${data}`}</Text>
      <View>
        <Expense
            key={data.id}
            name={data.name}
            value={data.value}
          />
      </View>
    );
  }

  render() {
    return (
      // <View>
      //   {this.state.expenses.map(expense => {
      //     console.log('expense', expense);
      //     return (
      //       <View>

      //         <Expense
      //           key={expense.id}
      //           name={expense.name}
      //           value={expense.value}
      //         />
      //       </View>
      //     );
      //   })}

      // </View>
        <ListView
          style={{margin: 40}}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center'
  },
});