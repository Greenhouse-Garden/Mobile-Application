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
import Colors from '../../res/Colors';
import Iot from '../../libs/iot';
import UserSession from '../../libs/sessions';
class AddArduino extends React.Component{

    state={
        loading : false,
        status:{},
        form:{
            temperature:"",
            humidity:"",
            lastUpdate:"",
            measurements:{}
        },
    };

    componentDidMount (){
        this.getUser()
    }

    getUser = async () => {
        
        let user = await UserSession.instance.getUser()
        let UserId = user.id.toString()
        this.setState({form:{
            UserId,
            temperature:"",
            humidity:"",
            lastUpdate:"",
            measurements:{}
        }})  
    }
    
    handleSubmit = async () =>{       
        const {form} = this.state
        console.log(form)      
        let IdArduino = form.IdArduino
        console.log(form)
        let response = await Iot.instance.post(form);
        console.log(response)
        this.props.navigation.navigate('Profile', {IdArduino})
      }

    render(){
        return(
            <View style={styles.Container}>
                 <View style={styles.Badge}>
                    <Text style={styles.title}>Add your arduino</Text>
                    
                    <TextInput 
                        style={styles.input} 
                        placeholder={'Arduino ID'} 
                        onChangeText={text =>{
                        this.setState(prevState => {
                            let form = Object.assign({},prevState.form)
                            form.IdArduino = text;
                            return {form}
                        })
                    }}
                    />

                    <Text style={styles.line}></Text>
                    <Text style={styles.infoText}>If you don't know your arduino's ID, you can check on the reverse or your arduino. 
                  
                    You can see it as "Arduino ID: XXXXXXXXXX".
                    </Text>
                    <TouchableOpacity style={styles.AddArduinoButton} onPress={this.handleSubmit}>
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
    title:{
        fontSize: 30,
        top: 20,
        left:25
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
        padding:5,
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: Colors.green,
        borderColor: Colors.green,
        borderWidth: 1,
        width: 150,
        alignSelf: 'center',
        top: 300,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    AddText:{
        fontSize: 20
    }

});

export default AddArduino;