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

class Badges extends React.Component{

    render(){

        return(
            <ScrollView style={styles.container}>
                <BadgesSearch onChange={this.handleChange}/>
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
                  

                    
                </View>

            </ScrollView>

        )
    }



}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: Colors.blue,


    },

    content:{
        flex:1,
        margin: 20,
        width:'90%',
        height: '90%',
        marginTop: 50,
        backgroundColor: '#FFFFFF60',
        borderRadius: 25,
        alignItems: 'center'

    },
    
    headerContainer:{
        alignSelf: 'center',
        flex:1,
        marginTop: 30,
        width:'90%',
        height: '45%',
        backgroundColor: Colors.green,
        borderRadius: 5,
        padding: 15,
        shadowColor: "#000",
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
        color: Colors.white,
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
});

export default Badges;