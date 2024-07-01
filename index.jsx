import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList } from 'react-native';

type Props = {};
export default class MyApp extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Messier Objects
        </Text>
        <MessierTable />
      </View>
    );
  }
}

const MessierTable = () => {
  // Les données du tableau Messier
  const data = [
    { id: 1, type: 'Nébuleuse', RA: '05h 34m 31.97s', dec: '+22° 00\' 52.1"', mag: '-3', con: 'Taureau' },
    // Ajoutez d'autres objets ici pour plus de lignes
  ];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.type}</Text>
      <Text style={styles.cell}>{item.RA}</Text>
      <Text style={styles.cell}>{item.dec}</Text>
      <Text style={styles.cell}>{item.mag}</Text>
      <Text style={styles.cell}>{item.con}</Text>
    </View>
  );

  return (
    <View style={styles.table}>
      <View style={styles.header}>
        <Text style={styles.headerCell}>ID</Text>
        <Text style={styles.headerCell}>Type</Text>
        <Text style={styles.headerCell}>Ascension droite</Text>
        <Text style={styles.headerCell}>Déclinaison</Text>
        <Text style={styles.headerCell}>Magnitude</Text>
        <Text style={styles.headerCell}>Constellation</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2734',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  table: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
  },
  headerCell: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: '#fff',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

// Vous devez enregistrer le composant principal
// avec le même nom que le projet
AppRegistry.registerComponent(
  'my-rn-app', () => MyApp
);