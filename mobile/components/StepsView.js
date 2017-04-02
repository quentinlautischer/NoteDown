import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import colors from '../app/constants';

class StepsView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stepIndex: 0 // used for shouldComponentUpdate
        }
    }

    componentWillMount() {
        this.context.store.dispatch({type: 'SET_FLASHCARD_STEP', step: 0});
    }

    // re-render on click to reveal new step
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.stepIndex !== nextState.stepIndex) {
            return true;
        }
        return false;
    }

    onClick() {
        var currentStep = this.context.store.getState().flashcards.step;
        if (currentStep < this.props.steps.length) {
            this.setState({stepIndex: currentStep + 1});
            this.context.store.dispatch({type: 'SET_FLASHCARD_STEP', step: currentStep + 1});
        }

    }

    render() {
        // Help from Nader Dabit
        // on http://stackoverflow.com/questions/35471921/programmatically-add-a-component-in-react-native
        // accessed 04/02/17
        let steps = this.props.steps.slice(0, this.context.store.getState().flashcards.step + 1).map((step, i) => {
            return <Text key={i} style={styles.text}>{ step }</Text>
        })
        return(
            <TouchableWithoutFeedback style={styles.container} onPress={ () => this.onClick() }>
                <View style={styles.view}>{ steps }</View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'blue'
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        color: colors.DARK,
        margin: 2
    }
});

StepsView.contextTypes = {
    store: React.PropTypes.object.isRequired
};

export default connect()(StepsView);
