import React, { Component } from 'react';
import cssFile from './App.css';
import Title from '../components/Contents/Title/Title';
import Action from '../components/Contents/CallToAction/CallToAction';
import Benefit from '../components/Contents/Benefits/Benefit';
import Indicator from '../components/Contents/Indicators/Indicator';
import Additional from '../components/Contents/Additional/Additional';
import Header from '../components/Header/Header';
import Menus from '../components/Header/NavBar/NavBar';

class App extends Component {
  state = {
    showMenu: false,
  }

  menuHandler = () => {
    const menuShow = this.state.showMenu;
    this.setState({showMenu: !menuShow});
  }

  render() {
    let menuRender = null;

    if (this.state.showMenu) {
      menuRender = <Menus 
        showMenu={this.state.showMenu}
        clicked={this.menuHandler} />;
    }

    return (
      <div className={cssFile.App}>
        <Header
          showMenu={this.state.showMenu} 
          clicked={this.menuHandler} 
          />
        {menuRender }
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
