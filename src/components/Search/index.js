import React, { Component } from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import { Platform } from 'react-native'
import { apikey } from '../../utils';

export default class Search extends Component {
    state = {
        searchFocused: false
    }
  render() {
      const { searchFocused } = this.state
      const { onLocationSelected } = this.props

    return <GooglePlacesAutocomplete
        placeholder="Para onde?"
        placeholderTextColor="#333"
        onPress={onLocationSelected}
        query={{
            key: apikey,
            language: 'pt'
        }}
        textInputProps={{
            onFocus: () => { this.setState({searchFocused: true}) },
            onBlur: () => { this.setState({searchFocused: false}) },
            autoCapitalize: 'none',
            autoCorrect: false
        }}
        listViewDisplayed={searchFocused}
        fetchDetails
        enablePoweredByContainer={false}
        styles={{
            container: {
                position: 'absolute',
                top: Platform.select({ ios: 60, android: 40 }),
                width: "100%"
            },
            textInputContainer: {
                flex: 1,
                backgroundColor: 'transparent',
                height: 54,
                marginHorizontal: 20,
                borderTopWitdh: 0,
                borderBottomWitdh: 0
            },
            textInput: {
                height: 54,
                margin: 0,
                borderRadius: 5,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 0,
                marginLeft: 0,
                marginRight: 0,
                elevation: 5,
                /*shadowColor: '#000', // estilos para IOS
                shadowOffSet: { x:0 ,y:0},
                shadowRadius: 15,
                borderWitdh: 1,*/
                borderColor: '#DDD',
                fontSize: 15
            },
            listView: {
                borderWitdh: 1,
                borderColor: '#DDD',
                backgroundColor: '#FFF',
                marginHorizontal: 20,
                elevation: 5,
                marginTop: 10
            },
            description: {
                fontSize: 16
            },
            row: {}
        }}
    />
  }
}
