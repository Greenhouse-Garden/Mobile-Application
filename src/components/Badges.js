import React from 'react'
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

import BadgesSearch from './BadgesSearch';
import Colors from '../res/Colors.js';

const headerBackground = {
    uri: 'https://c1.wallpaperflare.com/preview/121/822/384/plant-greenhouse-fern-green.jpg'
};


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

class Badges extends React.Component{

    handlepress = () => {
        this.props.navigation.navigate('BadgeDetail');
    };
    handlepressProfile = () => {
        this.props.navigation.navigate('Profile');
    };
    handlepressInfo = () => {
        this.props.navigation.navigate('TroubleShooting');
    };

    render(){

        return(
            <ScrollView style={styles.container}>
                        <Image style={styles.headerImage} source={{uri:'https://c1.wallpaperflare.com/preview/121/822/384/plant-greenhouse-fern-green.jpg'}} />
                <TouchableOpacity style={styles.button} onPress={this.handlepress}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>
                            Greenhouse Garden status
                        </Text>
                        <View style={styles.statusContainer}>
                            <Text style={styles.statusText}>
                                Temperature:{}
                            </Text>
                            <Text style={styles.statusText}>
                                Humidity:{}
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.InfoIconButton} onPress={this.handlepressInfo}>
                            <Image style={styles.InfoIcon} source={{uri:'https://image.flaticon.com/icons/png/512/545/545674.png'}}/>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.handlepressProfile}>
                    <Text style={styles.buttonText}>Profile Screen</Text>
                </TouchableOpacity>

            </ScrollView>

        )
    }



}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: Colors.green,


    },
    
    headerContainer:{
        alignSelf: 'center',
        flex:1,
        marginTop: 40,
        width:'90%',
        height: '45%',
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: 15,
        shadowColor: "#080000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        
    },

    headerText:{
        alignSelf: 'center',
        color: Colors.black,
        fontSize: 22,
        fontFamily: 'serif',
        
    },

    statusContainer:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },
    
    statusText:{
        fontSize: 16,
        fontFamily: 'Roboto',

    },
    InfoIconButton:{
        width: 25,
        height: 25,
        marginLeft: 300,
        marginTop: 40
    },
    InfoIcon:{
        width: 25,
        height: 25
    }
});

export default Badges;