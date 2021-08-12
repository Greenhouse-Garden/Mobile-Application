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

import Colors from '../../res/Colors';
import UserSession from '../../libs/sessions';
import Loader from '../Elements/Loader';


class Login extends React.Component{
    state = {
        loading: false,
        error: null,
        user: undefined,
        isPasswordVisible: true,
        form: {},
    };

    componentDidMount = () => {
        this.deleteTokens();
    };
    
    deleteTokens = async () => {
        await UserSession.instance.logout();
      };
    
    handleSubmit = async () => {
    try {
        this.setState({ loading: true, error: null, user: undefined });
        let response = await UserSession.instance.login(this.state.form);

        if (typeof response === 'object') {
            console.log(response);
            if (response['405']) {
                var message = 'Account is not verified';
            } else {
                var message = 'Invalid Username or password. Try again';
            }
            this.setState({ loading: false, error: message, user: undefined });
        } else {
            this.setState({ loading: false, error: null, user: response });
        }
    } catch (err) {
        this.setState({ loading: false, error: err });
    }
    if (this.state.user) {
        this.props.navigation.replace('TabNavigator');
    }
};


    render(){
        
        const {isPasswordVisible, loading, error, user} = this.state;
        if (loading === true) {
        return <Loader />;
        }

        return(
            <KeyboardAvoidingView style={styles.containerKey}>
                    <ImageBackground source={{uri: 'https://images.pexels.com/photos/2560898/pexels-photo-2560898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={styles.image}>
                        <View style={styles.layerColor}>

                            <ScrollView style={styles.container}>
                                    <View style={styles.content}>
                                        <Image style={styles.logo} source={{uri:'https://media.discordapp.net/attachments/844617951055577128/860675255525965894/Greenhouse_logoWHITE_LETTERS.png'}}/>
                                        <View style={styles.form}>
                                            {error ? (
                                                <View style={styles.errorContainer}>
                                                    <Text style={styles.errorMessage}>
                                                        {'Invalid username or password'}
                                                    </Text>
                                                </View> 
                                            ) : null}
                                            <Text style={styles.inputText}>Username</Text>
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Username"
                                                placeholderTextColor={Colors.charade}
                                                onChangeText={text => {
                                                    this.setState(prevState => {
                                                        let form = Object.assign({}, prevState.form);
                                                        form.username = text;
                                                        return {form};
                                                    });
                                                }}
                                            />

                                            <Text style={styles.inputText}>Password</Text>
                                            <TextInput
                                                style={styles.input}
                                                secureTextEntry={isPasswordVisible}
                                                placeholder={'Password'}
                                                keyboardAppearance="dark"
                                                placeholderTextColor={Colors.charade}
                                                onChangeText={text => {
                                                    this.setState(prevState => {
                                                        let form = Object.assign({}, prevState.form);
                                                        form.password = text;
                                                        return {form};
                                                    });
                                                }}
                                            />                                       
                                            <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
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

    errorContainer: {
        marginVertical: 2,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FF353C40',
        borderRadius: 5,
    },

    errorMsg: {
        color: '#990009',
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