import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class Bookrequest extends React.Component {
    render() {
        return (
            <View>
                <TextInput
                    placeholder='Name'>
                </TextInput>
                <TextInput
                    placeholder='Why do you want this book?'>
                </TextInput>

                <TouchableOpacity>
                    <Text> Request </Text>
                </TouchableOpacity>

            </View>
        )
    }
}