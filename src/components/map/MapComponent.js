import React, { Component } from 'react';
import Google from 'react-google-maps';
import './MapComponent.css';

declare var google;

class MapComponent extends Component {

  componentDidMount() {
    const latLng = { lat: parseFloat(-26.911267), lng: parseFloat(-49.094884) };
    const mapElm = document.getElementById('map-component');
    mapElm.style.height = this.height;


    const map = new google.maps.Map(mapElm, {
        center: latLng,
        scrollwheel: false,
        zoom: 17,
        styles: [
          {
            "stylers": [
              {
                "saturation": -100
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#0099dd"
              }
            ]
          },
          {
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#aadd55"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {}
        ]
      });

      // eslint-disable-next-line
      const marker = new google.maps.Marker({
        position: latLng,
        map: map,
      });
  }

  render() {
      return (
          <section id="map-component">
          </section>
      );
  }
}

export default MapComponent;
