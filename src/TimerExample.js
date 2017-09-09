import React, {Component} from 'react';

import TimerUI from "./TimerUI";
import Timer from "rn-timer";


export default class TimerExample extends Component {
  render() {
    const binder = {
      hour: (date: Date) => date.getUTCHours(),
      min: (date: Date) => date.getMinutes(),
      second: (date: Date) => date.getSeconds(),
    };

    return (
      <Timer
        timerStep={10}
        binders={binder}
        timestamp={new Date().getTime() + 50000}
        timerFinishedListener={() => {
          alert('end')
        }}>

        <TimerUI/>

      </Timer>
    );
  }
}
