import React, { Component } from 'react';
import {
    Navigator,
    TouchableHighlight,
    View,
    ListView,
    StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ListItem from '../components/ListItem';
import TitleText from '../components/TitleText';
import colors from '../app/constants';

import FlashcardViewScene from './FlashcardViewScene';


var myDummyFlashcards = {folders: [
    {_id: '1', name: 'ECE 493',
        flashcards: [
            {front: 'question 1', back: ['step1', 'step2', 'step3'], hints: ['hint1', 'hint2', 'hint3'], rank: '1'},
            {front: 'question 2', back: ['step1', 'step2', 'step3'], hints: ['hint1', 'hint2', 'hint3'], rank: '1'},
            {front: 'question 3', back: ['step1', 'step2', 'step3'], hints: ['hint1', 'hint2', 'hint3'], rank: '1'}
        ]
    },
    {_id: '2', name: 'ECE 455',
        flashcards: [
            {front: 'question a', back: ['stepa', 'stepb', 'stepc'], hints: ['hinta', 'hintb', 'hintc'], rank: '2'},
            {front: 'question b', back: ['stepa', 'stepb', 'stepc'], hints: ['hinta', 'hintb', 'hintc'], rank: '2'},
            {front: 'question c', back: ['stepa', 'stepb', 'stepc'], hints: ['hinta', 'hintb', 'hintc'], rank: '2'}
        ]
    },
    {_id: '3', name: 'ECE 422',
        flashcards: [
            {front: 'question 1', back: ['step!', 'step!'], hints: ['hint!', 'hint!'], rank: '1'},
            {front: 'question 2', back: ['step!!', 'step!!', 'step!!'], hints: ['hint!!'], rank: '3'}
        ]
    },
    {_id: '4', name: 'test',
        flashcards: [
            {front: 'question 1', back: ['step!', 'step!'], hints: ['hint!', 'hint!'], rank: '1'}
        ]
    }
]};

export default class FlashcardsMenuScene extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(myDummyFlashcards.folders) // TODO: display proper folders
        };
    }

    _navigate(rowID) {
        this.props.navigator.push({
            title: 'FlashcardsMenuScene',
            component: FlashcardViewScene,
            passProps: {
                content: this.props.content,
                socket: this.props.socket
            }
        });
    }

    render() {
        return (
            <LinearGradient colors={[colors.PRIMARY1, colors.PRIMARY1_GRADM, colors.PRIMARY1_GRADL]} style={styles.linearGradient}>
                <View>
                    <TitleText text='My Decks' style={styles.title}/>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData, sectionID, rowID, highlightRow) =>
                            <TouchableHighlight onPress = { () => this._navigate(rowID) }>
                                <ListItem iconName='cards' text={rowData.name} />
                            </TouchableHighlight>
                        }
                    />
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    }
});
