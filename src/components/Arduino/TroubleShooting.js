import { DefaultTheme } from "@react-navigation/native";
import React from "react";
import react from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Pressable,
    Linking
} from 'react-native';
import Colors from '../../res/Colors.js';

class TroubleShooting extends React.Component{

    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.Badge}>
                    <Text style={styles.TroubleShootingTitle}>TroubleShooting</Text>
                    <Text style={styles.Title}>Title</Text>
                    <TextInput style={styles.Input} placeholder={''}/>
                    <Text style={styles.Description}>Description of the problem</Text>
                    <TextInput style={styles.InputDescription} placeholder={''}/>
                    <View style={styles.PhotoContainer}>
                        <Text style={styles.TextPhotoDescription}>In case of being necessary, send photos of the problem</Text>
                        <Image style={styles.AddPhotoButton} source={{uri:'https://image.flaticon.com/icons/png/512/1837/1837512.png'}}/>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.handleEmail}>
                        <Text style={styles.buttonText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: Colors.blue
    },
    Badge:{
        flex:1,
        margin: 20,
        marginTop:54,
        width:'90%',
        height: '90%',
        backgroundColor: Colors.white,
        borderRadius: 25,
    },
    TroubleShootingTitle:{
        fontSize: 25,
        fontWeight:'bold',
        color: Colors.blue,
        marginLeft: '25%',
        marginTop: '10%'
    },
    Title:{
        fontSize: 20,
        marginLeft: 19,
        marginTop: 60
    },
    Input:{
        marginLeft: '2%',
        paddingVertical:5,
        paddingHorizontal:10,
        borderWidth:2,
        borderRadius:10,
        borderColor:Colors.black,
        width:340,
    },
    Description:{
        fontSize: 20,
        marginLeft: 19,
        marginTop: 20
    },
    InputDescription:{
        marginLeft: '2%',
        paddingVertical:80,
        paddingHorizontal:10,
        borderWidth:2,
        borderRadius:10,
        borderColor:Colors.black,
        width:340,
    },
    TextPhotoDescription:{
        fontSize: 18,
        margin: 20,
        marginTop: 30,
        marginLeft: 19,
        marginHorizontal: 200
    },
    AddPhotoButton:{
        width: 85,
        height: 85,
        marginTop: -88,
        marginLeft: 250 

    },
    button:{
        padding:15,
        marginTop: 35,
        borderRadius: 15,
        backgroundColor: Colors.green,
        borderColor: Colors.green,
        borderWidth: 1,
        width: 150,
        marginLeft: '28%',
        bottom: 20,
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight:'bold',
        paddingHorizontal: 25,
        color: Colors.white,
    },
})

export default TroubleShooting;