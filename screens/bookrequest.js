import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { Header, Icon } from 'react-native-elements';


export default class Bookrequest extends React.Component {
    constructor() {
        super();
        this.state = {
            currentuser: firebase.auth().currentUser.email,
            bookname: '',
            reason: ''
        }
    }
    createuniqueId(){
        return Math.random().toString(32).substring(7);
    }

    addRequest = (name, reason)=>{
        var id = this.createuniqueId();
        db.collection('Requests').add({
            user: this.state.currentuser,
            bookname: name,
            reason: reason,
            requestId: id
        });
        this.setState({
            bookname: '',
            reason: ''
        })
        Alert.alert("Book request submitted!!");
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    leftComponent={<Icon name="bars" type="font-awesome" onPress={() => {
                        this.props.navigation.toggleDrawer()
                    }} />}
                    rightComponent={{}}
                    centerComponent={{ text: 'Request Books!', style: { color: 'white' } }}
                />
                <TextInput
                    placeholder='Name'
                    onChangeText={(text) => {
                        this.setState({
                            bookname: text
                        })
                    }}
                    value={this.state.bookname}
                    style={{
                        width: "75%",
                        height: 35,
                        alignSelf: 'center',
                        borderColor: '#ffab91',
                        borderRadius: 10,
                        borderWidth: 1,
                        marginTop: 220,
                        padding: 10
                    }}
                />

                <TextInput
                    placeholder='Why do you want this book?'
                    onChangeText={(text) => {
                        this.setState({
                            reason: text
                        })
                    }}
                    value={this.state.reason}
                    multiline={true}
                    style={{
                        width: "75%",
                        height: 35,
                        alignSelf: 'center',
                        borderColor: '#ffab91',
                        borderRadius: 10,
                        borderWidth: 1,
                        marginTop: 20,
                        padding: 10
                    }} />
                <TouchableOpacity 
                style={{alignSelf: 'center', backgroundcolor: 'black'}}
                onPress = {()=>{this.addRequest(this.state.bookname, this.state.reason)}}>
                    <Text style ={{alignSelf: "center"}}>Request</Text>
                </TouchableOpacity>

            </View>
        )
    }
}