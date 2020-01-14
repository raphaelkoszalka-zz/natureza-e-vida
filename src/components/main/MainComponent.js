import './MainComponent.css';
import React, { Component } from 'react';
import HeaderComponent from '../header/HeaderComponent';

class MainComponent extends Component {

    render() {
        return (
          <section id="main-component">
            <div class="container main-text">
              <div class="col-xs-12 col-md-6">
                <h1>
                  Vivamus <strong>efficitur</strong> justo lectus, <br />
                  ac luctus <strong>risus</strong> suscipit a.
                </h1>
                <button class="btn btn-lg">Venha nos visitar!</button>
              </div>
            </div>
          </section>
        );
    }

}

export default MainComponent;
