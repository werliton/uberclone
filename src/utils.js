import { Platform, PixelRatio } from 'react-native'

export function getPixelSize(pixels){
    return Platform.select({
        ios: pixels,
        android: PixelRatio.getPixelSizeForLayoutSize(pixels)
    })
}

export const apikey = 'AIzaSyC4ERcqE375LAdVM8TRAMUuDE33sbYB6jI'