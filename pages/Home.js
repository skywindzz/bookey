import React from 'react';
import { Title, Card } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

export default function Home({ navigation }) {
  return (
    <Grid>
      <Row size={6} style={styles.libary}>
        <Card style={styles.libarayCard}>
          <Title
            style={{
              marginTop: 15,
            }}
          >
            Seach Library Near You
          </Title>
          <TouchableOpacity onPress={() => navigation.navigate('Libraries')}>
            <Image
              style={styles.city}
              source={require('../assets/cityDriver.gif')}
            />
          </TouchableOpacity>
        </Card>
      </Row>

      <Row size={6} style={styles.books}>
        <Card style={styles.libarayCard}>
          <Title
            style={{
              marginTop: 5,
            }}
          >
            Book Tracker
          </Title>
          <TouchableOpacity onPress={() => navigation.navigate('BookTracker')}>
            <Image
              style={styles.notes}
              source={require('../assets/takingNotes.gif')}
            />
          </TouchableOpacity>
        </Card>
      </Row>
    </Grid>
  );
}

const styles = StyleSheet.create({
  libary: {
    backgroundColor: 'white',
    alignContent: 'center',
  },
  libarayCard: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  city: {
    width: '100%',
    height: '90%',
  },
  books: {
    backgroundColor: 'white',
    alignContent: 'center',
  },
  notes: {
    width: '100%',
    height: '100%',
  },
});
