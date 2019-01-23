import React, { Component } from 'react';
import MapView from 'react-native-maps'
import { View } from 'react-native';

import Search from '../Search'

export default class Map extends Component {

    state = {
        region: null
    }
    async componentDidMount(){
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
            () => {}, // Erro
            {
                timeout: 2000,
                enableHighAccuracy: true, // Pegar location via GPS do user
                maximumAge: 1000, // Como se fosse um cache
            }
        )
    }

    render() {
        const  { region } = this.state
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    region={region}
                    showsUserLocation
                    loadingEnabled
                />
                <Search />
            </View>
        )
    }
}
