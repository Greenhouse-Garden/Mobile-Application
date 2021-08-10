import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Colors from '../res/Colors.js';

class BadgesSearch extends React.Component{
    state = {
        query: '',
    };

    handleText = query => {
        this.setState({query});
        if(this.props.onChange) {
            this.props.onChange(query);
        }
    }

    render(){
        const {query} = this.state;
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.TextInput}
                    onChangeText={this.handleText}
                    value={query}
                    placeholder="Search a crop"
                    placeholderTextColor={Colors.black}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width: '90%',
        marginLeft: 20,
        marginTop: 45,
        color: Colors.white,
    },
    TextInput:{
        borderColor: Colors.green,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
        color: Colors.charade,
    },
});

export default BadgesSearch;