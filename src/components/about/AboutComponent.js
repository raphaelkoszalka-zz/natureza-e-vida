import './AboutComponent.css';
import React, { Component } from 'react';

class AboutComponent extends Component {
    render() {
        return (
          <div id="about-component">
            <div className="container">
              <div className="col-xs-12">
              <div className="container">
                  <div className="col-xs-8">
                    <h2>
                      Conheça a nossa <strong>história</strong>
                    </h2>
                    <p>
                    <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut pharetra, sem nec blandit congue, mauris nulla scelerisque
                      ligula, eget rutrum ante eros in sem.
                      Mauris consequat ultricies nunc, non condimentum mauris malesuada eu.
                      Etiam tincidunt orci quis mauris scelerisque sodales.
                      Mauris consequat ultricies nunc, non condimentum mauris malesuada eu.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut pharetra, sem nec blandit congue, mauris nulla scelerisque
                      ligula, eget rutrum ante eros in sem.
                      Mauris consequat ultricies nunc, non condimentum mauris malesuada eu.
                      Etiam tincidunt orci quis mauris scelerisque sodales.
                      Mauris consequat ultricies nunc, non condimentum mauris malesuada eu.
                    </p>
                    <h2 className="text-center">
                      <button className="btn btn-lg">Venha nos <strong>visitar</strong>!</button>
                    </h2>
                  </div>
                  <div className="col-xs-4">
                    <div className="container padding-top">
                      <div className="col-xs-4 white-bkg"></div>
                      <div className="col-xs-4 white-bkg"></div>
                      <div className="col-xs-4 white-bkg"></div>
                      <div className="clearfix"></div>
                      <br />
                      <div className="col-xs-4 white-bkg"></div>
                      <div className="col-xs-4 white-bkg"></div>
                      <div className="col-xs-4 white-bkg"></div>
                      <div className="clearfix"></div>
                      <br />
                      <div className="col-xs-4 white-bkg"></div>
                      <div className="col-xs-4 white-bkg"></div>
                      <div className="col-xs-4 white-bkg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default AboutComponent;
