import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { ApolloProvider } from 'react-apollo-hooks'
import ApolloClient from 'apollo-boost'
import PokemonList from './app/components/PokemonList'
import styled from 'styled-components/native'

const client = new ApolloClient({ uri: 'https://graphql-pokemon.now.sh' })

const AppContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <PokemonList />
      </AppContainer>
    </ApolloProvider>
  )
}
