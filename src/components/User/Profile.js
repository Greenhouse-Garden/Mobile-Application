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
                    
                    <Image
                        style={styles.profileImage}
                        source={{uri: `${user.profile.profile_picture}`}}/>

                    <TouchableOpacity style={styles.clickabeImage} onPress={this.handleChooseProfileImage}>
                        <Image style={styles.icon} source={{uri: 'https://image.flaticon.com/icons/png/512/848/848043.png'}}/>
                    </TouchableOpacity>
                    
                    <View style={styles.userInfo}>
                        <Text style={styles.name}>{user.first_name}</Text>
                        <Text style={styles.lastname}>{user.last_name}</Text>
                    </View>
                    
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

    profileImage: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 75,
        borderWidth: 5,
        borderColor: Colors.white,
        position: 'absolute',
        top: 25,
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
    top: 250,
    justifyContent: 'center',
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
        top: 500,
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
        width: 25,
        height: 30,
        position: 'absolute',
        left: 245,
        top: 185
    
      },

    icon:{
    width: 30,
    height: 30,
    
    },
});

export default Profile;