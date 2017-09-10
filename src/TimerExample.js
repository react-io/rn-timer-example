import React, {Component} from 'react';

import TimerUI from "./TimerUI";
import Timer from "rn-timer";
import VisibleView from "rn-visible-view";
import {Text} from "react-native";


export default class TimerExample extends Component {

  state: {
    visible: false
  }

  render() {
    const visibleBinder = {
      visible: (date: Date) => date.getSeconds() % 2 === 1,
    };
    const timerBinder = {
      hour: (date: Date) => date.getUTCHours(),
      min: (date: Date) => date.getMinutes(),
      second: (date: Date) => date.getSeconds(),
    }

    return (
      <Timer
        style={{marginTop: 20}}
        timerStep={10}
        binders={visibleBinder}
        timestamp={new Date().getTime() + 50000}>

        <VisibleView>
          <Text>
            this is demo
          </Text>
        </VisibleView>

      </Timer>
    );
  }
}
