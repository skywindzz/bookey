import React, { useState, useEffect } from 'react';
import { Title, Text, Card, Thumbnail } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import {
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Alert,
  View,
  Form,
  TextInput,
  Button,
} from 'react-native';
import 'react-native-gesture-handler';
import AddBook from '../pages/addBook';

export default function BookTracker({ navigation, route }) {
  const [book, bookList] = useState([
    {
      bookTitle: 'sky',
      currentProgress: 0,
      comment: 'This is a good book',
    },
    {
      bookTitle: 'blue',
      currentProgress: 20,
      comment: 'Hello there',
    },
    {
      bookTitle: 'Alloy of law',
      currentProgress: 230,
      comment: 'story about waxilian',
    },
  ]);

  const [title, setTitle] = useState('');
  const [progress, setProgress] = useState('');
  const [comment, setComment] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function addToBookList(title, progress, comment) {
    bookList([
      ...book,
      {
        bookTitle: title,
        currentProgress: progress,
        comment: comment,
      },
    ]);
  }

  return (
    <Grid>
      <Row
        size={1}
        style={{
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AddBook', {
              book: book,
              addToBookList: addToBookList,
            })
          }
        >
          <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>

                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                    <AddBook addToBookList={addToBookList}></AddBook>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </TouchableHighlight>

          <Text style={styles.addBookText}>Add a book card</Text>
        </TouchableOpacity>
      </Row>
      <Row size={13}>
        <FlatList
          data={book}
          keyExtractor={(book) => book.bookTitle}
          renderItem={({ item }) => {
            return (
              <Card>
                <Title>{item.bookTitle}</Title>
                <Text>Current Progress(page): {item.currentProgress}</Text>
                <Text>Comment: {item.comment}</Text>
              </Card>
            );
          }}
        />
      </Row>
    </Grid>
  );
}

const styles = StyleSheet.create({
  addBookText: {
    marginTop: 10,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
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
