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

import videoGreenhouse from '../../assets/video.mp4'
import Iot from '../../libs/iot.js';
import Colors from '../../res/Colors.js';
import Video from 'react-native-video'

const headerBackground = {
    uri: 'https://c1.wallpaperflare.com/preview/121/822/384/plant-greenhouse-fern-green.jpg'
};


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserSession from '../../libs/sessions.js';


class Status extends React.Component{
    state={
        loading : false,
        measurements: {},
        status:{},
        
    };

    componentDidMount(){
        this.fetchData();
        this.focusEvent();
        this.blurEvent();
    }

    focusEvent = () => {
        this.focusListener = this.props.navigation.addListener('focus', () =>{
            this.setFetchInterval();
        });
        
    }
    blurEvent = () => {
        this.blurListener = this.props.navigation.addListener('blur', () =>{
            clearInterval(this.interval);
        });
    }
    setFetchInterval = () =>{
        this.interval = setInterval(this.fetchData,3000);
    };

    fetchData = async () => {
        const by = "UserId"
        let user = await UserSession.instance.getUser()
               
        try {

            let request = await Iot.instance.get(by, user.id)
            this.setState({measurements:request})
            console.log(request)
        } catch (error) {
            console.log('hay error', error)
        }
        
    }

    handlepress = () => {
        this.props.navigation.navigate('StatusDetail');
    };
    handlepressProfile = () => {
        this.props.navigation.navigate('Profile');
    };
    handlepressInfo = () => {
        this.props.navigation.navigate('TroubleShooting');
    };

    render(){
        const {measurements} = this.state
        return(
            <ScrollView style={styles.container}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <TouchableOpacity style={styles.profileButton} onPress={this.handlepressProfile}>    
                    <Image style={styles.profileButtonImage} source={{uri: 'https://image.flaticon.com/icons/png/512/848/848043.png'}} />
                </TouchableOpacity>

                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Temperature</Text>
                    <View style={styles.statusContainer}>
                        <Text style={styles.timeText}>{measurements.lastUpdate}</Text>
                        <Text style={styles.statusText}>{measurements.temperature}°C</Text>
                    </View>
                    <TouchableOpacity style={styles.InfoIconButton} onPress={this.handlepressInfo}>
                        <Image style={styles.InfoIcon} source={{uri:'https://image.flaticon.com/icons/png/512/545/545674.png'}}/>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.headerContainerHumidity}>
                    <Text style={styles.headerTextHumidity}>Humidity</Text>
                    <View style={styles.statusContainerHumidity}>
                        <Text style={styles.timeText}>{measurements.lastUpdate}</Text>
                        <Text style={styles.statusTextHumidity}>{measurements.humidity}%</Text>
                    </View>
                    <TouchableOpacity style={styles.InfoIconButton} onPress={this.handlepressInfo}>
                        <Image style={styles.InfoIcon} source={{uri:'https://image.flaticon.com/icons/png/512/545/545674.png'}}/>
                    </TouchableOpacity>

                </View>

                <Text style={styles.videoText}>Video tutorial Arduino registration</Text>
                {/* <View style={styles.video}>
                    <Video source={videoGreenhouse}   // Can be a URL or a localfile.
                        ref={(ref) => {
                            this.player = ref
                            }}                                      // Store reference
                        onBuffer={this.onBuffer}
                        controls={true}                // Callback when remote video is buffering
                        onEnd={this.onEnd}                      // Callback when playback finishes
                        onError={this.videoError}               // Callback when video cannot be loaded
                        style={styles.backgroundVideo}/>
                </View> */}
            </ScrollView>

        )
    }



}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
    },

    profileButton:{
        marginBottom: -20,
        marginTop: 35,
        marginLeft: 320,
        width: 40,
        borderRadius: 100,
        backgroundColor: Colors.white
    },

    profileButtonImage:{
        height: 40,
        width: 40,
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
        fontSize: 20,
        fontFamily: 'Roboto',
        
    },
    
    timeText:{
        marginLeft: -60
    },
    headerContainerHumidity:{
        alignSelf: 'center',
        flex:1,
        marginTop: 20,
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
    headerTextHumidity:{
        color: Colors.black,
        fontSize: 22,
        fontFamily: 'serif',
    },
    statusContainerHumidity:{
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    statusTextHumidity:{
        fontSize: 20,
        marginLeft: 35,
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
    },

    videoText:{
        marginTop: 40,
        fontSize: 20,
        alignSelf: 'center',
        width: 300,
        color:Colors.white
    },

    video:{
        width: '90%',
        height: '20%'

        

    },
    backgroundVideo: {
        height: 250,
        width: '80%',
    },
});

export default Status;