import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { Header, ListItem } from 'react-native-elements';




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
            var requestedBooksList = snapshot.docs.map((doc) => doc.data())
            this.setState({
                booklist: requestedBooksList
            });
        });

    }

    componentDidMount() {
        this.getbooklist();
    }
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item, i }) => {
        return (
            <ListItem
                style={{ marginTop: 10 }}
                key={i} bottomDivider >
                <ListItem.Content>
                    <ListItem.Title>{item.bookname}</ListItem.Title>
                    <ListItem.Subtitle>{item.reason}</ListItem.Subtitle>
                </ListItem.Content>

            </ListItem>

        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {
                    this.state.booklist.length === 0
                        ? (<View><Text>No donations to be made!!</Text></View>)
                        : (
                            <View>
                                <FlatList
                                    keyExtractor={this.keyExtractor}
                                    data={this.state.booklist}
                                    renderItem={this.renderItem} />
                                <TouchableOpacity
                                    onPress={() => {
                                        //this.props.navigation.navigate("Detailscreen");
                                    }}
                                >
                                    <Text>More</Text>
                                </TouchableOpacity>
                            </View>
                        )
                }
            </View>
        )
    }
}