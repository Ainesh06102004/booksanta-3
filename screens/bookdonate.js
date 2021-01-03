import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { Header } from 'react-native-elements';



export default class Bookdonate extends React.Component {
    constructor() {
        super();
        this.state = {
            currentuser: firebase.auth().currentUser.email,
            booklist: [],
        }
    }
    getbooklist = () => {
        var list = [];
        db.collection('Requests').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                var data = doc.data();
                list.push(data);
            });
        });
        console.log(list);
        this.setState({ booklist: list })
    }

    componentDidMount() {
        this.getbooklist();
    }

    render() {
        return (!this.state.booklist 
            ? <Text>No donations to be made!!</Text>
             : (<View style={{ marginTop: 250, flex: 1 }}><Text>Hello</Text>
        </View>))
    }
}