import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    ListView,
    Image
} from 'react-native';

export default class FoldersScene extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.content.data.notes.folders),
            noteData: this.props.content
        };
    }

    navigate(){
        console.log(arguments[0]);
        this.props.navigator.push({
            title: 'View Notes',
            content: arguments[0]
        })
    }

    render() {
        let pic = {
            uri: 'https://openclipart.org/image/300px/svg_to_png/133813/NOTEBOOK.png&disposition=attachment'
        };
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                  <TouchableHighlight onPress = {this.navigate.bind(this, rowData)}>
                      <View style={{alignItems: 'center', flexDirection: 'row', flex: 1, paddingTop: 20, paddingBottom: 20}}>
                          <Image source={pic} style={{width: 40, height: 30, marginLeft: 10, marginRight: 10}} />
                          <Text>{rowData.name}</Text>
                      </View>
                  </TouchableHighlight>
                }
            />
        );
    }
}
