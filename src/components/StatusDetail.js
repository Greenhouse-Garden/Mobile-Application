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
import Colors from '../res/Colors.js';

class StatusDetail extends React.Component{

    handlepress = () => {
        this.props.navigation.navigate('Badges');
    };
    handlepressInfo = () => {
        this.props.navigation.navigate('TroubleShooting');
    };

    render(){
        return(
            <View style={styles.Container}>
                
                 <View style={styles.Badge}>
                 <Image style={styles.GreenhouseImage} source={{uri:'https://image.flaticon.com/icons/png/512/3228/3228839.png'}}/>
                    <TouchableOpacity style={styles.InfoIconButton} onPress={this.handlepressInfo}>
                        <Image style={styles.InfoIcon} source={{uri:'https://image.flaticon.com/icons/png/512/545/545674.png'}}/>
                    </TouchableOpacity>
                 <Text style={styles.GreenhouseName}>Greenhouse</Text>
                 <Text style={styles.line}></Text>
                    <View style={styles.VegetableDetails}>
                        <Text style={styles.VegetableHumidity}>Humidity 15%</Text>
                        <Text style={styles.VegetableTemperatue}>Temperature 15°C</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.handlepress}>
                        <Text style={styles.buttonText}>Back</Text>
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
    InfoIcon:{
        width: 20,
        height: 20,
        marginLeft: 320,
        marginTop: 10
    },
    GreenhouseImage:{
        width: 100,
        height: 100,
        resizeMode: 'cover',
        position:'absolute',
        top:30,
        left:'15%'
    },
    
    GreenhouseName:{
        margin: 20,
        marginTop: '15%',
        fontWeight:'bold',
        marginLeft: '58%',
        fontSize: 20
    },
    line:{
        borderBottomColor: Colors.black,
        marginBottom: 20,
        marginLeft: 35,
        width: '80%',
        borderBottomWidth: 1,
    },
    VegetableDetails:{
        flexDirection:'row',
        marginTop:200,
        justifyContent:'center',
    },
    VegetableHumidity:{
        fontSize:20,
    },
    VegetableTemperatue:{
        fontSize:20,
        marginLeft: 20,
    },
    button:{
        padding:15,
        marginTop: 200,
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
});

export default StatusDetail;