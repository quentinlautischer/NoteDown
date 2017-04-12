/*
Relevant requirements:
- FU-30: Mobile: Editor: Save
*/

import React, { Component } from 'react';
import {
    View,
    TouchableHighlight,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import SettingsList from 'react-native-settings-list';
import colors from '../app/constants';

class SettingsScene extends Component {
    constructor(props) {
        super(props);

        this.state = {
            autosave: true
        }

        this.storeDidUpdate = this.storeDidUpdate.bind(this);
    }

    componentDidMount(){
        this.setState({autosave: this.context.store.getState().editor.autosave_enabled});
        this.unsubscribe = this.context.store.subscribe( this.storeDidUpdate );
    }

    componentWillUnmount() {
        this.unsubscribe();
        this.saveSettingsToDisk();
    }

    saveSettingsToDisk() {
        const key = `@${this.context.store.getState().state.userid}:AUTOSAVE_ENABLED`;
        AsyncStorage.setItem(key, this.context.store.getState().editor.autosave_enabled.toString());
    }

    storeDidUpdate() {
        this.setState({autosave: this.context.store.getState().editor.autosave_enabled});
    }

    toggleAutosave() {
        var autosave = this.context.store.getState().editor.autosave_enabled;
        this.context.store.dispatch({type: 'AUTOSAVE_ENABLED', value: !autosave});
    }

    render() {
        return (
            <View style={styles.view}>
                <SettingsList>
                    <SettingsList.Item
                        hasNavArrow={false}
                        switchState={this.state.autosave}
                        switchOnValueChange={this.toggleAutosave.bind(this)}
                        hasSwitch={true}
                        title='Autosave'
                        titleInfo='cloud push every 5 minutes'
                    />
                </SettingsList>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop:45,
        backgroundColor: colors.LIGHT
    }
});

SettingsScene.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default connect()(SettingsScene);
