import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Navigator
} from 'react-native';
import colors from '../app/constants';
import FlashcardFront from './FlashcardFront';
import FlashcardHints from './FlashcardHints';
import FlashcardBack from './FlashcardBack';

var FC_FLIP_REF = 'fc_flip';

export default class FlashcardView extends Component {
    render() {
        const routes = [
            {index: 0},
            {index: 1},
            {index: 2}
        ];

        return(
            <Navigator // this is where the WebView that shows the rendered notes lives
                ref={FC_FLIP_REF}
                initialRoute={routes[0]}
                renderScene={(route, navigator) => {
                    if (route.index === 0) { // front
                        return <FlashcardFront navigator={navigator} content={this.props.content.front} />
                    } else if (route.index == 1) { // hints
                        return <FlashcardHints navigator={navigator} content={this.props.content.hints} iconName='undo' />
                    } else if (route.index == 2) { // back
                        return <FlashcardBack navigator={navigator} content={this.props.content.back} />
                    }
                }}
                configureScene={(route, routeStack) => {
                    if (route.index === 0) { // front
                        return Navigator.SceneConfigs.PushFromRight
                    } else if (route.index == 1) { // hints
                        return Navigator.SceneConfigs.VerticalDownSwipeJump
                    } else { // back // return <FlashcardList content={this.props.content.back} />
                        return Navigator.SceneConfigs.VerticalUpSwipeJump
                    }
                }}
            />
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
});
