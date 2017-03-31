import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    WebView,
    StyleSheet,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import colors from '../app/constants';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import NotesView from '../components/NotesView';
import NotesEditScene from './NotesEditScene'; // navigate

var PAGE_NAV_REF = 'page_nav';
const TOC_HEIGHT = 30; // percent

class NotesViewScene extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageIndex: 0,
            open: false,
            routes: [],
            tocHeight: 0, // percentage of total height,
            tocVisibility: 'hidden'
        };

        this.storeDidUpdate = this.storeDidUpdate.bind(this);
    }

    componentWillMount() {
        this.setRoutes();
    }

    componentDidMount(){
        this.unsubscribe = this.context.store.subscribe( this.storeDidUpdate );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    storeDidUpdate() {
        this.setState({open: this.context.store.getState().sessionActive});
        this.setRoutes();
    }

    setRoutes() {
        var state = this.context.store.getState();
        var folderIndex = state.state.folderIndex;
        var pageIndex = this.state.pageIndex;

        this.setState({ routes: state.notes.folders[folderIndex] });
    }

    goToEdit() {
        this.context.store.dispatch({type: 'EDITOR_MODE'});
        this._navigate();
    }

    _navigate() {
        // Picker.hide();
        console.log('passing init content: ' + this.state.routes.pages[this.state.pageIndex].content);
        this.props.navigator.push({
            title: 'NotesEditScene',
            component: NotesEditScene,
            passProps: {
                socket: this.props.socket
            },
            onPress: this.onPress.bind(this),
            onBack: this.onBack.bind(this),
            rightIconName: 'cloud-upload',
            backIconName: 'arrow-left'
        })
    }

    onPress() {
        this.requestPushData();
    }

    onBack() {
        var folderIdx = this.context.store.getState().state.folderIndex;
        var pageIdx = this.context.store.getState().state.pageIndex;

        // TODO: should actually compare to last saved version (bc user might save while in edit mode)
        if (this.props.initialContent[folderIdx].pages[pageIdx].content ===
            this.context.store.getState().notes.folders[folderIdx].pages[pageIdx].content) {
                console.log('notes already saved');
                this.props.navigator.pop();
                return;
        }
        this.showSaveAlert();
    }

    showSaveAlert() {
        var folderIdx = this.context.store.getState().state.folderIndex;
        var pageIdx = this.context.store.getState().state.pageIndex;

        Alert.alert(
            'Are you sure you want to go back?',
            'Any unsaved changes will be lost.',
            [
                {text: 'Yes', onPress: () => {
                    console.log("reverting to content: " + this.props.initialContent);
                    this.context.store.dispatch({type: 'PAGE_CONTENT_CHANGE',
                        content: this.props.initialContent[folderIdx].pages[pageIdx].content,
                        folderIndex: folderIdx,
                        pageIndex: pageIdx
                    });
                    this.props.navigator.pop();
                }},
                {text: 'Cancel'},
                {text: 'Save', onPress: () => {
                    this.requestPushData();
                    this.props.navigator.pop();
                }},
            ],
            { cancelable: false }
        )
    }

    requestPushData() {
        console.log('push data request');
        var state = this.context.store.getState();
        const data = {userid: state.state.userid, notes: state.notes};
        this.props.socket.emit('request-push-data', data);
    }

    onSwipeLeft(gestureState) {
        var state = this.context.store.getState();
        var pages = state.notes.folders[state.state.folderIndex].pages;
        // go to next page
        if (this.state.pageIndex < pages.length - 1) {
            this.refs[PAGE_NAV_REF].push({
                content: pages[this.state.pageIndex + 1].content
            });
            this.context.store.dispatch({type: 'SELECT_PAGE', index: this.state.pageIndex + 1});
            this.setState({ pageIndex: this.context.store.getState().state.pageIndex });
        }
    }

    onSwipeRight(gestureState) {
        // go to previous page
        if (this.state.pageIndex > 0) {
            this.refs[PAGE_NAV_REF].pop();
            this.context.store.dispatch({type: 'SELECT_PAGE', index: this.state.pageIndex - 1});
            this.setState({ pageIndex: this.context.store.getState().state.pageIndex });
        }
    }

    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        return (
            <GestureRecognizer
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config}
                style={styles.view}>

                <Navigator // this is where the WebView that shows the rendered notes lives
                    ref={PAGE_NAV_REF}
                    initialRoute={this.state.routes[0]}
                    renderScene={(route, navigator) => {
                        return <NotesView store={this.context.store} navigator={navigator} content={this.state.routes.pages[this.state.pageIndex].content} height={this.state.tocHeight} visibility={this.state.tocVisibility} />
                    }}
                />

                <ActionButton buttonColor={colors.PRIMARY2}>
                    <ActionButton.Item buttonColor={colors.SECONDARY1} title="edit" onPress = { () => this.goToEdit() }>
                        <Icon name="md-create" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor={colors.SECONDARY2} title="toggle toc" onPress={() => {
                        if (this.state.tocHeight > 0) {
                            this.setState({tocHeight: 0, tocVisibility: 'hidden'});
                        } else {
                            this.setState({tocHeight: TOC_HEIGHT, tocVisibility: 'visible'});
                        }
                    }}>
                        <Icon name="md-list" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </GestureRecognizer>
        )
    }
}

var styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop:45,
        backgroundColor: colors.LIGHT
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: colors.LIGHT,
    }
});

NotesViewScene.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default connect()(NotesViewScene);
