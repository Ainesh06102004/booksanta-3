import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import firebase from 'firebase';
import { DrawerItems } from 'react-navigation-drawer'
import { Avatar } from 'react-native-elements';


export default class Sidebarmenu extends React.Component {
    constructor() {
        super();
        this.state = {
            image: '#'
        }
    }
    render() {
        return (<View style={{ flex: 1 }}>
             <SafeAreaView>
            <View
                style={{
                    
                    alignItems: "center",
                    backgroundColor: "orange",
                    height: 60, 
                    width: 60,
                    marginTop: 100
                }}
            >
                <Avatar rounded size = "small"/>
            </View>
           
                <View style={{ marginTop: 20 }}><DrawerItems {...this.props} /></View>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    paddingBottom: 30,
                    marginTop: 450
                }}><TouchableOpacity style={{
                    height: 50,
                    width: "100%",
                    justifyContent: "center",
                    padding: 10,
                    alignSelf: 'center',
                    backgroundColor: 'black'
                }}
                    onPress={() => {
                        this.props.navigation.navigate("Loginscreen");
                        firebase.auth().signOut();
                    }}><Text style={{ alignSelf: 'center', color: 'white' }}>Log Out</Text></TouchableOpacity></View >
            </SafeAreaView>
        </View>);
    }

}