import React, { Component } from 'react';
import cssFile from './App.css';
import Title from '../components/Contents/Title/Title';
import Action from '../components/Contents/CallToAction/CallToAction';
import Benefit from '../components/Contents/Benefits/Benefit';
import Indicator from '../components/Contents/Indicators/Indicator';
import Additional from '../components/Contents/Additional/Additional';

class App extends Component {
  render() {
    return (
      <div className={cssFile.App}>
        <Title />
        <Action />
        <Benefit />
        <Indicator />
        <Additional />
      </div>
    );
  }
}

export default App;
