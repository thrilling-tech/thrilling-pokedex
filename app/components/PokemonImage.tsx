import React from 'react'
import styled from 'styled-components/native'

const StyledImage = styled.Image`
  position: absolute;
  height: 75%;
  bottom: 2.5%;
  right: 5%;
  width: 50%;
`

interface Props {
  image: string
  style?: object
}

const PokemonImage = ({ image, style }: Props) => (
  <StyledImage
    source={{ uri: image }}
    style={{ ...style }}
    resizeMode="contain"
  />
)

export default PokemonImage
