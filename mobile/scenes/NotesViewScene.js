import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableHighlight,
    WebView,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import NotesView from '../components/NotesView.js';
import NotesEditScene from './NotesEditScene'; // navigate

var PAGE_NAV_REF = 'page_nav';

class NotesViewScene extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageIndex: 0,
            open: false,
            routes: []
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
        this.props.navigator.push({
            title: 'NotesEditScene',
            component: NotesEditScene,
            passProps: {
                socket: this.props.socket
            },
            onPress: this.onPress.bind(this)
        })
    }

    onPress() {
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
                        return <NotesView navigator={navigator} content={this.state.routes.pages[this.state.pageIndex].content} />
                    }}
                />

                <ActionButton // floating action button (to edit notes)
                    buttonColor='#0aaf82'
                    onPress = { () => this.goToEdit() }
                    icon={<Icon name="md-create" style={styles.actionButtonIcon} />}
                />
            </GestureRecognizer>
        )
    }
}

var styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop:45,
        backgroundColor: 'white',
        padding: 15
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    }
});

NotesViewScene.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default connect()(NotesViewScene);
