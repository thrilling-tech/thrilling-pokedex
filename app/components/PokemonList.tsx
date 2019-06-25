import { useQuery } from 'react-apollo-hooks'
import { ScrollView, Text } from 'react-native'
import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import PokemonCard from './PokemonCard'
import styled from 'styled-components/native'

const Container = styled.View`
  align-self: center;
  height: 90%;
  width: 90%;
  overflow: visible;
`

const Heading = styled.Text`
  font-family: 'Helvetica';
  font-size: 24;
  font-weight: 700;
  margin-left: 15px;
  margin-bottom: 20px;
  color: black;
  width: 100%;
`

const List = styled(ScrollView)`
  background-color: white;
  overflow: visible;
  width: 100%;
`

const GET_FIRST_12_POKEMON = gql`
  {
    pokemons(first: 12) {
      id
      name
      image
      types
    }
  }
`

type Pokemon = {
  id: string
  name: string
  image: string
  types: string[]
}

const PokemonList = () => {
  const { data, error, loading } = useQuery(GET_FIRST_12_POKEMON)

  if (error) return <Text>Error!</Text>
  if (loading) return <Text>loading!</Text>

  console.log(data)

  return (
    <Container>
      <List
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          flexDirection: 'row'
        }}
        showsVerticalScrollIndicator={false}
      >
        <Heading>Pokédex</Heading>
        {data.pokemons.map(({ id, ...pokemonProps }: Pokemon) => (
          <PokemonCard key={id} {...pokemonProps} />
        ))}
      </List>
    </Container>
  )
}

export default PokemonList
