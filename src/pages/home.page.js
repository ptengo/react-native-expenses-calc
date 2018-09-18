import React, { Component } from 'react';
import Expense from '../components/expense.component';
import { StyleSheet, View, ListView } from 'react-native';

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

      <View style={styles.content}>
        <View style={styles.buttonGroup}>
          <View style={styles.addButton} />
          <View style={styles.addButton2} />
        </View>
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  content: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    // alignItems: 'stretch'
  },
  listView: {
    // marginTop: 200,
    // flex: 2
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  addButton: {
    // flex: 1,
    width: 50,
    // flexDirection: 'row',
    // alignSelf: 'flex-end',
    height: 50,
    backgroundColor: 'powderblue'
  },
  addButton2: {
    // flex: 1,
    width: 50,
    // flexDirection: 'row',
    // alignSelf: 'flex-end',
    height: 50,
    backgroundColor: 'steelblue'
  }
});