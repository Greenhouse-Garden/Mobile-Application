import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, StatusBar, Image, Linking} from 'react-native';
import Colors from '../res/Colors.js';


class Landing extends React.Component{

    handlepress = () => {
        this.props.navigation.navigate('LogIn');
    };

    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
                <View style={styles.background}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.logo } source={{uri: 'https://cdn.discordapp.com/attachments/844617951055577128/860675255525965894/Greenhouse_logoWHITE_LETTERS.png'}}></Image>
                    </View>    
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={this.handlepress}>
                            <Text style={styles.buttonText}>
                                LogIn
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.Text}>Not have an account? <Text style={styles.clickableText} onPress={ ()=> Linking.openURL('https://pornhub.com') }>Register</Text></Text>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    background:{
        backgroundColor: Colors.blue,
        resizeMode: 'cover',
        justifyContent: 'center',
        flex:1,
    },
    imageContainer:{
        alignItems: 'center'
    },
    logo: {
        width: 250,
        height: 250,
    },
    buttonContainer:{
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        width: 150,
        padding: 15,
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: Colors.green,
        borderColor: Colors.black,
        borderWidth: 1,
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 25,
        color: Colors.white

    },
    Text: {
        marginTop: 10,
        textAlign: 'center',
        color: Colors.white,
    },
    clickableText: {
        textDecorationLine: 'underline',
        fontWeight:'bold',

    }
})

export default Landing;