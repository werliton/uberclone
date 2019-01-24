import React, { Component } from 'react';
import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles';
import imageUber from '../../assets/logo.png'

export default class Details extends Component {
  render() {
    return (
    <Container>
      <TypeTitle>Popular</TypeTitle>
      <TypeDescription>Viagens baratas para o dia a dia</TypeDescription>

      <TypeImage source={imageUber} />
      <TypeTitle>Uberx</TypeTitle>
      <TypeDescription>R$ 6,00</TypeDescription>

      <RequestButton onPress={() => { }}>
        <RequestButtonText>SOLICITAR UBERX</RequestButtonText>
      </RequestButton>
    </Container>
    )
  }
}
