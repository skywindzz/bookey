import React from 'react';
import {
  Title,
  Card,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Right,
  Body,
  Icon,
} from 'native-base';
import { Row, Grid, Col } from 'react-native-easy-grid';
import { FlatList, View } from 'react-native';

const LibraryDetail = ({ result }) => {
  return (
    <View>
      <Card
        style={{
          width: 355,
          height: 180,
          borderRadius: 5,
          overflow: 'scroll',
        }}
      >
        <Title style={{ alignSelf: 'center', marginTop: 5 }}>
          {result.name}
        </Title>
        <Thumbnail
          large
          style={{ alignSelf: 'center', marginTop: 5, marginBottom: 5 }}
          source={{ uri: result.image_url }}
        />
        <Text style={{ alignSelf: 'center' }}>
          Distance: {Math.round(result.distance * 0.0006)} Miles
        </Text>

        <Text style={{ alignSelf: 'center' }}>
          Phone#:{result.display_phone}
        </Text>

        <Text style={{ alignSelf: 'center' }}>
          Address: {result.location.address1}, {result.location.city},
          {result.location.state}
        </Text>
      </Card>
    </View>
  );
};

export default LibraryDetail;
