import React, { Component } from 'react';
import {
    Navigator,
    TouchableHighlight,
    View,
    ListView
} from 'react-native';
import ListItem from '../components/ListItem';
import TitleText from '../components/TitleText';

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
            <View>
                <TitleText text='My Decks'/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <TouchableHighlight onPress = {this.navigate.bind(this, rowData)}>
                            <ListItem iconName='cards' text={rowData.name} />
                        </TouchableHighlight>
                    }
                />
            </View>
        )
    }
}
