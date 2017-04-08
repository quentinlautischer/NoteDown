import React, { Component } from 'react';
import {
    Navigator,
    TouchableHighlight,
    View,
    ListView,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import ListItem from '../components/ListItem';
import TitleText from '../components/TitleText';
import colors from '../app/constants';

import FlashcardViewScene from './FlashcardViewScene';

class FlashcardsMenuScene extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.flashcards)
        };
    }

    _navigate(rowID) {
        this.context.store.dispatch({type: 'FLASHCARD_FRONT_MODE'});
        this.props.navigator.push({
            title: 'FlashcardsViewScene',
            component: FlashcardViewScene,
            passProps: this.props
        });
    }

    selectFolder(rowID) {
        var index = parseInt(rowID.replace('FOLDER', ''));
        this.context.store.dispatch({type: 'SELECT_FLASHCARD_FOLDER', flashcardFolderIndex: index});
        this._navigate();
    }

    render() {
        return (
            <LinearGradient colors={[colors.PRIMARY1, colors.PRIMARY1_GRADM, colors.PRIMARY1_GRADL]} style={styles.linearGradient}>
                <View>
                    <TitleText text='My Decks' style={styles.title}/>
                    <ListView
                        dataSource={this.state.dataSource}
                        enableEmptySections={true}
                        renderRow={(rowData, sectionID, rowID, highlightRow) =>
                            <TouchableHighlight onPress = { () => this.selectFolder(rowID) }>
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

FlashcardsMenuScene.contextTypes = {
    store: React.PropTypes.object.isRequired
};

export default connect()(FlashcardsMenuScene);
