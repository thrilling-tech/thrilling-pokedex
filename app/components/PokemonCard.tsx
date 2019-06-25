import React from 'react'
import PokemonImage from './PokemonImage'
import styled from 'styled-components/native'
import { rgba } from 'polished'

import Attributes from './Attributes'

const GRASS_COLOR = '#48d1ae'
const FIRE_COLOR = '#fc6c6d'
const WATER_COLOR = '#75bdfd'
const LIGHTNING_COLOR = '#ffd66f'

const getAttributeColor = (attributes: string[]) => {
  console.log(attributes)
  if (attributes.some(attribute => attribute === 'Grass')) return GRASS_COLOR
  if (attributes.some(attribute => attribute === 'Fire')) return FIRE_COLOR
  if (attributes.some(attribute => attribute === 'Water')) return WATER_COLOR
  if (attributes.some(attribute => attribute === 'Lightning'))
    return LIGHTNING_COLOR
  return '#ccc'
}

interface CardProps {
  color: string
}

const Card = styled.View`
  background-color: white;
  border-radius: 10;
  margin-bottom: 15;
  height: 115px;
  width: 47.5%;
  box-shadow: 0 5px 15px ${({ color }: CardProps) => rgba(color, 1)};
`

const Heading = styled.Text`
  font-family: 'Helvetica';
  font-weight: 500;
  font-size: 16px;
  color: black;
  margin-left: 7.5px;
  margin-top: 10px;
  margin-bottom: 15px;
`

interface Props {
  image: string
  name: string
  types: string[]
}

const PokemonCard = ({ types, image, name }: Props) => (
  <Card color={getAttributeColor(types)}>
    <Heading>{name}</Heading>
    <Attributes attributes={types} attributeColor={getAttributeColor(types)} />
    <PokemonImage image={image} />
  </Card>
)

export default PokemonCard
