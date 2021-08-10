import React from 'react';
import {Text, 
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Pressable,
    Linking} from 'react-native'
import Colors from '../res/Colors';

class Profile extends React.Component{
    handlepressAddArduino = () => {
        this.props.navigation.navigate('AddArduino');
    };

    render(){
        return(
            <View style={styles.Container}>
                 <View style={styles.Badge}>
                    <Text style={styles.Title}>Your profile</Text>
                    <Text style={styles.Username}>
                        Username
                    </Text>
                    <Text style={styles.line}></Text>
                    <TouchableOpacity style={styles.AddArduinoButton} onPress={this.handlepressAddArduino}>
                        <Text style={styles.AddText}>+ Add your arduino</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container:{
    flex: 1,
    backgroundColor: Colors.blue,
    },
    Badge:{
        flex:1,
        margin: 20,
        marginTop:54,
        width:'90%',
        height: '90%',
        backgroundColor: Colors.white,
        borderRadius: 25,
        shadowColor: Colors.white,
        shadowOffset: {
            width: 0,
            height: 50,
        },
        shadowOpacity: 0.58,
        shadowRadius: 10.00,

        elevation: 24,
    },
    Title:{
        fontSize: 30,
        marginTop: 20,
        marginLeft: 100
    },
    Username:{
        margin: 20,
        marginTop: '10%',
        fontWeight:'bold',
        marginLeft: '50%',
        fontSize: 20
    },
    line:{
        borderBottomColor: Colors.black,
        marginTop: 30,
        marginLeft: 35,
        width: '80%',
        borderBottomWidth: 1,
    },
    AddText:{
        marginLeft: 0,
        marginTop: 15,
        fontSize: 20
    },
    AddArduinoButton:{
        width: 180,
        height: 60, 
        marginTop: 10,
        marginLeft: 165,
        alignItems: 'center'
    },
});

export default Profile;