import React from 'react';
import {launchImageLibrary} from 'react-native-image-picker'
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
import UserSession from '../../libs/sessions';


class Profile extends React.Component{
    state = {
        user: {
          profile:{},
        },
        token: '',
        picture: {},
      };

    componentDidMount = () => {
    this.getUserData();
    };

    getUserData = async () => {
        let user = await UserSession.instance.getUser();
        let token = await UserSession.instance.getToken(user.username);
        this.setState({user: user, token: token});
      };

    handleChooseProfileImage = () => {
    const options = {
        includeBase64: false,
        mediaType: 'photo',
    };
        //Here the gallery is opened
        launchImageLibrary(options, response => {
            if(!response.didCancel){
                let photo = response.assets[0].uri;
                this.setState({picture:photo});
                this.editProfilePicture();
            }  
        });
    };

    editProfilePicture = async () => {
        const {user, token, picture} = this.state;
        let response = await UserSession.instance.editProfile(
          user.id, 
          token, 
          picture
        )
        console.log(response)
        this.setState({user: response})
    };

    
    handlepresBack = () => {
        this.props.navigation.navigate('Status');
    };


    handlepressAddArduino = () => {
        this.props.navigation.navigate('AddArduino');
    };

    handleTroubleShoot = () => {
        this.props.navigation.navigate('UserStack');
    };


    render(){
        const {user} = this.state;
        return(
            <View style={styles.Container}>
                 <View style={styles.badge}>
                    
                    <Text style={styles.Title}>Profile Picture</Text>
                    <Text style={styles.infotext}>A picture helps people recognize you</Text>
                    <Image
                        style={styles.profileImage}
                        source={require('../../assets/dua.jpg')} />
                        {/*source={{uri: `${user.profile.profile_picture}`}}/>*/}

                    
                    <View style={styles.userInfo}>
                        <Text style={styles.hi}>Hi </Text>
                        <Text style={styles.name}>{user.first_name}</Text>
                        <Text style={styles.lastname}>{user.last_name}</Text>
                    </View>
                    
                    <TouchableOpacity style={styles.clickabeImage} onPress={this.handleChooseProfileImage}>
                        <Text style={styles.clickableText}>Change</Text>
                        <Image style={styles.icon} source={require('../../assets/pencil.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.clickabeImage2} onPress={this.handlepresBack}>
                        <Text style={styles.clickableText2}>Back</Text>
                        <Image style={styles.icon2} source={require('../../assets/arrow.png')}/>
                    </TouchableOpacity>

                    
                    <TouchableOpacity style={styles.addArduino} onPress={this.handlepressAddArduino}>
                        <Text style={styles.addText}>Add arduino</Text>
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

    badge:{
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
        alignSelf: 'center',
        marginTop: 30,
        fontSize: 22
    },

    infotext:{
        alignSelf: 'center',
        fontSize: 15,
        marginTop: 20,
        marginBottom: -20
    },

    profileImage: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 100,
        borderWidth: 5,
        borderColor: Colors.white,
        position: 'absolute',
        top: 125,
        left: '20%',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    userInfo: {
    flexDirection: 'row',
    top: 260,
    justifyContent: 'center',
    },

    hi:{
        fontSize: 24,
        marginTop: 4
    },
    
    name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.blackPearl,
    },

    lastname:{
    marginLeft:8,
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.blackPearl,
    },
    
   
    addText:{
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'serif',
        margin: 5
    },

    addArduino:{
        padding:5,
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: Colors.green,
        borderColor: Colors.green,
        borderWidth: 1,
        width: 150,
        alignSelf: 'center',
        top: 450,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },

    clickabeImage: {
        flexDirection: 'row',
        width: 120,
        height: 45,
        position: 'absolute',
        left: 190,
        top: 430,
        backgroundColor: Colors.green,
        borderRadius:6
    
      },

    clickableText:{
        width: 48,
        top: 12,
        left: 50,
        fontSize:14,
    },

    icon:{
    width: 28,
    height: 28,
    left: -30,
    top: 8
    },

    clickabeImage2: {
        flexDirection: 'row',
        width: 120,
        height: 45,
        position: 'absolute',
        left: 50,
        top: 430,
        borderWidth: 2,
        borderColor: Colors.green,
        borderRadius:6
    
      },

    clickableText2:{
        width: 48,
        top: 12,
        left: 50,
        fontSize:14,
        color: Colors.green
    },

    icon2:{
    width: 28,
    height: 28,
    left: -30,
    top: 8
    },
});

export default Profile;