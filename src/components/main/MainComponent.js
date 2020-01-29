import './MainComponent.css';
import React, { Component } from 'react';

// Nosso trabalho é trazer a vida da Natureza para você!

class MainComponent extends Component {

    render() {
        return (
          <section id="main-component">
            <div className="video-background" id="mainSlider">
              <div className="video-foreground" id="aspectRatio">
                  <iframe
                    title="Natureza e Vida"
                    id="videoFrame"
                    src="https://www.youtube.com/embed/bfi3iipTQo0?controls=0&start=3&end=25&loop=50&showinfo=0&rel=0&autoplay=1&mute=1"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
              </div>
            </div>
          </section>
        );
    }

}

export default MainComponent;
