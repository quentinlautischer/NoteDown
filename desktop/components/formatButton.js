import React, { Component } from 'react';

class FormatButton extends Component {

    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor={colors.MED}
                onPress={ () => {
                    this.props.appendFunction(this.props.appendText, this.props.isBlock);
                }}>
                <Icon name={this.props.name} size={24} color={colors.DARK} />
            </TouchableHighlight>
        );
    }
}

export default FormatButton;