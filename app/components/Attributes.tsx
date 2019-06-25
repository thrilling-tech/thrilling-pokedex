import React from 'react'
import styled from 'styled-components/native'
import { rgba } from 'polished'

interface PillProps {
  color: string
}

const Pill = styled.View`
  background-color: white;
  border-radius: 20;
  margin-left: 7.5px;
  margin-bottom: 15px;
  max-width: 35%;
  box-shadow: 0 2px 5px ${({ color }: PillProps) => rgba(color, 0.65)};
  padding: 2.5px 0;
`

const AttributeText = styled.Text`
  align-self: center;
  color: black;
  font-size: 12;
`

interface Props {
  attributeColor: string
  attributes: Array<string>
}

const Attributes = ({ attributeColor, attributes }: Props) => (
  <>
    {attributes.map(attribute => (
      <Pill color={attributeColor} key={attribute}>
        <AttributeText>{attribute}</AttributeText>
      </Pill>
    ))}
  </>
)

export default Attributes
