import React, { Component } from 'react';
import './MapComponent.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class MapComponent extends Component {

    // const latLng = { lat: parseFloat(-26.911267), lng: parseFloat(-49.094884) };

    componentDidMount() {
        const screenHeight = window.screenY;
        document.getElementById('map-component').style.height = screenHeight + 'px';
    }

    render() {
        return (
            <section id="map-component">
                <Map
                    google={this.props.google}
                    zoom={18}
                    initialCenter={{ lat: -26.911267, lng: -49.094884}}
                >
                    <Marker position={{ lat: -26.911267, lng: -49.094884}} />
                </Map>
            </section>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDJtAthqXsnVf3UDjofxy86v0H14hRMvCs'
})(MapComponent);
