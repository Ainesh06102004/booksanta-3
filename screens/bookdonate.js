import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import {Header} from 'react-native-elements';



export default class Bookdonate extends React.Component{
    render(){
        return(<View style = {{marginTop: 250, flex: 1}}><Text>Book Donate Screen</Text></View>)
    }
}