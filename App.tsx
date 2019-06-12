import React, { Fragment, useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator
} from 'react-native'
import { ApolloProvider, useQuery } from 'react-apollo-hooks'
import ApolloClient, { gql, FetchType } from 'apollo-boost'

const client = new ApolloClient({ uri: 'https://graphql-pokemon.now.sh' })

const GET_FIRST_12_POKEMON = gql`
  {
    pokemons(first: 12) {
      id
      name
      image
    }
  }
`

const PokemonImage = ({ image }) => {
  const [height, setHeight] = useState<number | null>(null)
  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    Image.getSize(
      image,
      (width, height) => {
        setWidth(width)
        setHeight(height)
      },
      console.error
    )
  }, [])

  if (height && width) {
    return <Image source={{ uri: image }} style={{ height, width }} />
  } else {
    return <ActivityIndicator size="small" />
  }
}

const PokemonList = () => {
  const { data, error, loading } = useQuery(GET_FIRST_12_POKEMON)

  if (error) return <Text>Error!</Text>
  if (loading) return <Text>loading!</Text>

  console.log(data)

  return (
    <ScrollView>
      {data.pokemons.map(({ id, name, image }) => (
        <Fragment key={id}>
          <Text>{name}</Text>
          <PokemonImage image={image} />
        </Fragment>
      ))}
    </ScrollView>
  )
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <PokemonList />
      </SafeAreaView>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
