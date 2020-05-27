import React from 'react';
import { Title, Card, ListItem } from 'native-base';
import { FlatList } from 'react-native';
import { Row, Grid, Col } from 'react-native-easy-grid';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native';
import LibraryDetail from './libraryDetail';
import { ScrollView } from 'react-native-gesture-handler';

const LibraryResult = ({ title, library }) => {
  return (
    <FlatList
      data={library}
      keyExtractor={(library) => library.id}
      renderItem={({ item }) => {
        return <LibraryDetail result={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default LibraryResult;
