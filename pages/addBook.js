import React, { useState, useEffect } from 'react';
import { Title, Text, Card, Form } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from 'react-native';
import 'react-native-gesture-handler';

export default function AddBook({ navigation, route }) {
  const [title, setTitle] = useState('');
  const [progress, setProgress] = useState('');
  const [comment, setComment] = useState('');

  return (
    <View>
      <Form>
        <Text style={styles.label}>Enter book title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
        ></TextInput>
        <Text style={styles.label}>Enter current progress(page):</Text>
        <TextInput
          style={styles.input}
          value={progress}
          onChangeText={(text) => setProgress(text)}
        ></TextInput>
        <Text style={styles.label}>Enter comment:</Text>
        <TextInput
          style={styles.input}
          value={comment}
          onChangeText={(text) => setComment(text)}
        ></TextInput>
        <Button
          title='add book'
          onPress={(e) => {
            addToBookList(title, progress, comment);
            navigation.navigate('BookTracker');
          }}
        ></Button>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
});

// <Button
// title='Add book'
// onPress={() =>
//   navigation.navigate('BookTracker', {
//     title: title,
//     progress: progress,
//     comment: comment,
//   })
// }
// ></Button>
