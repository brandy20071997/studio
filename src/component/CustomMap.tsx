import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

interface CustomMapProps {
  google: any;
  zoom:any// or specific type from 'google-maps-react'
}

class CustomMap extends Component<CustomMapProps> {
    
  render() {
    const latitude = Math.random() * 180 - 90;
    const longitude = Math.random() * 360 - 180;
    const mapStyles = {
      width: '100%',
      height: '100%',
      styles: 
        [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "lightness": "-100"
                    },
                    {
                        "color": "#ffdac9"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffcab1"
                    }
                ]
            },
            {
                "featureType": "poi",
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
                        "color": "#ffcab1"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": 700
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#92e1dd"
                    }
                ]
            }
        ]
      
    };

    return (
      <Map
        google={this.props.google}
        // zoom={14}
        style={mapStyles}
        initialCenter={{ lat: latitude , lng: longitude  }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCsjniIoi_RQCXXnFdDhHhrFYs51HiUSxs',
})(CustomMap);
