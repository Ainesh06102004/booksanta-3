import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { Header ,Icon} from 'react-native-elements';


export default class Bookrequest extends React.Component {
    render() {
        return (
            <View style = {{flex: 1}}>
                <Header
                    leftComponent={<Icon name= "bars" type="font-awesome" onPress = {()=>{
                        this.props.navigation.toggleDrawer()
                    }}/>}
                    rightComponent={{}}
                    centerComponent={{ text: 'Request Books!', style: { color: 'white' } }}
                />
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