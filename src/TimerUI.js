import React, {Component} from 'react';
import {

  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TimerUI extends Component {

  static propTypes: {
    hour: React.PropTypes.number,
    min: React.PropTypes.number,
    second: React.PropTypes.number,
  }

  render() {
    const {hour, min, second} = this.props

    return (
      <View style={{marginTop: 20, flexDirection: 'column'}}>
        <Text>
          {`hour: ${hour}`}
        </Text>
        <Text>
          {`min: ${min}`}
        </Text>
        <Text>
          {`second: ${second}`}
        </Text>
      </View>
    );
  }
}
