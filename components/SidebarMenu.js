import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';

export default class Sidebarmenu extends React.Component {
    render() {
        return (<View style={{
            flex: 0.2,
            justifyContent: 'flex-end',
            paddingBottom: 30
        }}> <TouchableOpacity><Text>Log-Out</Text></TouchableOpacity></View >);
    }

}