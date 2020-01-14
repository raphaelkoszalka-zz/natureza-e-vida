import './MainComponent.css';
import React, { Component } from 'react';
import HeaderComponent from '../header/HeaderComponent';

class MainComponent extends Component {

    render() {
        return (
          <section>
            <HeaderComponent />
          </section>
        );
    }

}

export default MainComponent;
