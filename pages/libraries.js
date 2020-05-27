import React, { useEffect, useState } from 'react';
import { Container, Title, Card, Text, List } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import LibraryResult from '../components/libraryResult';

import UserLocate from '../hooks/userLocation.js';
import LibrarySearch from '../hooks/librarySearch.js';
import { ScrollView } from 'react-native-gesture-handler';

export default function Libraries({ navigation }) {
  const [searchApi, library] = LibrarySearch();
  const [location, userLocation] = UserLocate();

  console.log(library, 'from libraries.js');

  return (
    <Container>
      <Grid style={{ flexDirection: 'column', alignItems: 'center' }}>
        <LibraryResult
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: 'blue',
            width: '100%',
          }}
          library={library}
        />
      </Grid>
    </Container>
  );
}

const styles = StyleSheet.create({});
