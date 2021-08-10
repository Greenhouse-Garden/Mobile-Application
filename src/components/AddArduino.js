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

class AddArduino extends React.Component{
    handlepressDone = () => {
        this.props.navigation.navigate('Badges');
    };
    render(){
        return(
            <View style={styles.Container}>
                 <View style={styles.Badge}>
                    <Text style={styles.Title}>Add your arduino</Text>
                    <TextInput style={styles.input} placeholder={'Your arduino id'}/>
                    <Text style={styles.line}></Text>
                    <Text style={styles.infoText}>If you don't know your arduino's ID, you can check on the reverse or your arduino. 
                        You can see it as "Arduino ID: XXXXXXXXXXXXXX".
                    </Text>
                    <TouchableOpacity style={styles.AddArduinoButton} onPress={this.handlepressDone}>
                        <Text style={styles.AddText}>Done</Text>
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
        marginTop: 10,
        marginLeft: 15
    },
    input:{
        marginTop: 60,
        marginLeft: 20,
        marginBottom: -55
    },
    line:{
        borderBottomColor: Colors.black,
        marginTop: 30,
        marginLeft: 20,
        width: '80%',
        borderBottomWidth: 1,
    },
    infoText:{
        marginLeft: 22,
        marginTop: 20,
        marginBottom: -70
    },
    AddArduinoButton:{
        marginTop: 460,
        marginLeft: 280,
    },
    AddText:{
        fontSize: 20
    }

});

export default AddArduino;