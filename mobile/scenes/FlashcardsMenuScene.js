import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    ListView
} from 'react-native';

export default class FlashcardsMenuScene extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.content.data.notes.folders)
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
                  <TouchableHighlight onPress = {this.navigate.bind(this, rowData)}>
                      <View style={{alignItems: 'center', flexDirection: 'row', flex: 1, paddingTop: 20, paddingBottom: 20}}>
                          <Text>{rowData.name}</Text>
                      </View>
                  </TouchableHighlight>
                }
            />
        )
    }
}
