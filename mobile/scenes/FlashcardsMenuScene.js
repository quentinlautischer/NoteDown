import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    ListView
} from 'react-native';

// TODO: remove later when populating with real data
var mySubjects = [
    {title: 'ECE 493', description: 'Software Systems Design Project'},
    {title: 'CMPUT 391', description: 'Database Management Systems'},
    {title: 'ECE 422', description: 'Reliable and Secure Systems Design'},
    {title: 'ECE 455', description: 'Engineering of Nanobiotechnological Systems'},
    {title: 'ECE 321', description: 'Software Requirements Engineering'},
    {title: 'ECE 370', description: 'Engineering Electromagnetics I'}
];

export default class FlashcardsMenuScene extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(mySubjects)
        };
    }

    navigate(){
        this.props.navigator.push({
            title: 'View Flashcard',
            content: arguments[0]
        })
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                  <TouchableHighlight onPress = {this.navigate.bind(this, rowData.title)}>
                      <View style={{alignItems: 'center', flexDirection: 'row', flex: 1, paddingTop: 20, paddingBottom: 20}}>
                          <Text>{rowData.title}</Text>
                      </View>
                  </TouchableHighlight>
                }
            />
        )
    }
}
