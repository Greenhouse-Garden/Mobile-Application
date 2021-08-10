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

import Colors from '../res/Colors.js';




const imageBackground = {
    uri: 'https://images.pexels.com/photos/2560898/pexels-photo-2560898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
};

class Login extends React.Component{


    handlepress = () => {
        this.props.navigation.navigate('TabNavigator');
    };



    render(){
        return(
            <KeyboardAvoidingView style={styles.containerKey}>
                    <ImageBackground source={{uri: 'https://images.pexels.com/photos/2560898/pexels-photo-2560898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={styles.image}>
                        <View style={styles.layerColor}>

                            <ScrollView style={styles.container}>
                                    <View style={styles.content}>
                                        <Image style={styles.logo} source={{uri:'https://media.discordapp.net/attachments/844617951055577128/860675255525965894/Greenhouse_logoWHITE_LETTERS.png'}}/>
                                        <View style={styles.form}>
                                            
                                            <Text style={styles.inputText}>Username</Text>
                                            <TextInput 
                                                style={styles.input} 
                                                placeholder={'Username'}/>

                                            <Text style={styles.inputText}>Password</Text>
                                            <TextInput 
                                                style={styles.input} 
                                                placeholder={'Password'}
                                                secureTextEntry={true}/>                                          
                                            <TouchableOpacity style={styles.button} onPress={this.handlepress}>
                                                <Text style={styles.buttonText}>LogIn</Text>
                                            </TouchableOpacity>
                                            <Pressable onPress={()=> Linking.openURL('https://www.facebook.com/greenhousecuu1')}>
                                                <Image style={styles.facebookIcon}
                                                source={{uri:'https://image.flaticon.com/icons/png/512/145/145802.png'}} />
                                            </Pressable>

                                        </View>
                                    </View>
                            </ScrollView>
                        </View>

                    </ImageBackground>
            </KeyboardAvoidingView>
        );



            /*
            <View style={styles.container}>
                
                    <View style={styles.layerColor}>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={styles.content}>                           
                            <View style={styles.form}>
                                <Image style={styles.logo } source={{uri: 'https://media.discordapp.net/attachments/844617951055577128/860675255525965894/Greenhouse_logoWHITE_LETTERS.png'}}></Image>
                                <Text style={styles.inputText}>Username</Text>
                                <TextInput style={styles.input} placeholder={'Username'}/>
                                <Text style={styles.inputText}>Password</Text>
                                <TextInput style={styles.input} placeholder={'Username'}/>
                                <TouchableOpacity style={styles.button} onPress={this.handlePress}>
                                    <Text style={styles.buttonText}>LogIn</Text>
                                </TouchableOpacity> 
                            </View>
                        </KeyboardAvoidingView>                    
                    </View>
                </ImageBackground>
            </View>*/

          


            /* <View style={styles.container}>
                    <StatusBar backgroundColor="transparent" translucent={true} />
                    <ImageBackground source={imageBackground} style={styles.image}>
                        <View style={styles.layerColor}>
                            <View style={styles.form}>
                                <Image style={styles.logo } source={{uri: 'https://media.discordapp.net/attachments/844617951055577128/860675255525965894/Greenhouse_logoWHITE_LETTERS.png'}}></Image>
                                <Text style={styles.inputText}>Username</Text>
                                <TextInput style={styles.input} placeholder={'Username'}/>
                                <Text style={styles.inputText}>Password</Text>
                                <TextInput style={styles.input} placeholder={'Username'}/>
                                <TouchableOpacity style={styles.button} onPress={this.handlePress}>
                                    <Text style={styles.buttonText}>LogIn</Text>
                                </TouchableOpacity>    
                            </View>
                        </View>
                    </ImageBackground>
                </View> */
            
        
    }
}

const styles = StyleSheet.create({

    containerKey:{
        flex: 1
    },

    container: {
        flex: 1,
        color: Colors.blue,
       

    },

    image:{
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        justifyContent: 'center',

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
    
    form:{
        alignItems: 'center',
        position: 'relative'

    },

    layerColor:{
        flex:1,
        backgroundColor:'#00000099',
    },

    logo: {
        width: 250,
        height: 250,
        marginTop: 15,
    },

    inputText:{
        fontSize:18,
        marginTop: 10,
        marginBottom:5,
        marginLeft:10,
        fontWeight: 'bold',
        color: Colors.white,

    },

    input:{
        paddingVertical:5,
        paddingHorizontal:10,
        borderWidth:1,
        borderRadius:10,
        borderColor:Colors.white,
        width:250,

    },

    button:{
        padding:15,
        marginTop: 50,
        borderRadius: 15,
        backgroundColor: Colors.green,
        borderColor: Colors.green,
        borderWidth: 1,
        width: 150,
        bottom: 20,

    },

    buttonText:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight:'bold',
        paddingHorizontal: 25,
        color: Colors.white,
    },

    Text: {
        marginTop: 10,
        textAlign: 'center',
        color: Colors.white,
    },

    clickableText:{
        fontWeight:'bold',
        textDecorationLine: 'underline',

    },

    facebookIcon:{
        marginTop: 20,
        marginBottom: 25,
        height:50,
        width:50,
        resizeMode: 'cover',
        alignItems: 'flex-end'
    }

    
});
    export default Login;