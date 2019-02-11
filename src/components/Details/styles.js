import styled from 'styled-components/native';
import { Platform } from 'react-native'

export const Container = styled.View`
    background: #FFF;
    height: 300px;
    width: 100%;
    position: absolute;
    bottom: 0;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.2;
    shadow-radius: 10;
    elevation: 3;
    border: 1px solid #DDD;
    align-items: center;
    padding: 20px;
`;

export const TypeTitle = styled.Text`
    font-size: 20px;
    color: #222;
`
export const TypeDescription = styled.Text`
    color: #666;
    font-size: 14px;
`
export const TypeImage = styled.Image`
    height: 40px;
    width: 40px;
    margin: 10px 0;
`
export const RequestButton = styled.TouchableOpacity`
    background: #222;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    margin-top: 10px;
    height: 44px;
`
export const RequestButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 18px;
`
export const Back = styled.TouchableOpacity`
    position: absolute;
    top: ${Platform.select({ios: 60, android:40})};
    left: 20px;
`