import React, { Component, Fragment } from 'react';
import MapView, { Marker } from 'react-native-maps'
import { View } from 'react-native';
import { getPixelSize } from '../../utils'
import Search from '../Search'
import Directions from '../Directions'
import imageMarker from '../../../src/assets/logo.png'
import { LocationBox, LocationText, LocationTimeBox, LocationTimeText, LocationTimeTextSmall } from './styles'


export default class Map extends Component {

    state = {
        region: null,
        destination: null,
        duration: null
    }
    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                this.setState({
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134
                    }
                })
            }, // Sucesso
            () => { }, // Erro
            {
                timeout: 2000,
                enableHighAccuracy: true, // Pegar location via GPS do user
                maximumAge: 1000, // Como se fosse um cache
            }
        )
    }

    handleLocationSelected = (data, { geometry }) => {
        const { location: { lat: latitude, lng: longitude } } = geometry

        this.setState({
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text,
            }
        })
    }

    render() {
        const { region, destination, duration } = this.state
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    region={region}
                    showsUserLocation
                    loadingEnabled
                    ref={el => this.mapView = el}
                >
                    {
                        destination &&
                        <Fragment>
                            <Directions
                                origin={region}
                                destination={destination}
                                onReady={result => {
                                    this.setState({
                                        duration: Math.floor(result.duration)
                                    })
                                    this.mapView.fitToCoordinates(result.coordinates, {
                                        edgePadding: {
                                            right: getPixelSize(50),
                                            left: getPixelSize(50),
                                            top: getPixelSize(50),
                                            bottom: getPixelSize(50)
                                        }
                                    })
                                }}
                            />
                            <Marker
                                coordinate={destination}
                                anchor={{ x: 0, y: 0 }}
                                image={imageMarker}
                            >
                                <LocationBox>
                                    <LocationText>{destination.title}</LocationText>
                                </LocationBox>
                            </Marker>

                            <Marker
                                coordinate={region}
                                anchor={{ x: 0, y: 0 }}
                            >
                                <LocationBox>
                                    <LocationTimeBox>
                                        <LocationTimeText>{duration}</LocationTimeText>
                                        <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                                    </LocationTimeBox>
                                    <LocationText>Rua dos Nobres</LocationText>
                                </LocationBox>
                            </Marker>

                        </Fragment>
                    }
                </MapView>
                <Search onLocationSelected={this.handleLocationSelected} />
            </View>
        )
    }
}
