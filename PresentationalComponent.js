import React, {Component} from 'react'
import {Text, View ,StyleSheet} from 'react-native'

const PresentaionalComponent = (props) => {
    return (
        <View>
            <Text onPress={props.updateState}>
                {props.myState}
            </Text>
        </View>

    )
}

const Home = (props) =>{
    return (
        <View style = {styles.container}>
            <View style = {styles.redbox}/>
            <View style = {styles.bluebox}/>
            <View style = {styles.bluebox}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    myState:{
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    }
})