import React, {Component} from 'react'
import {Text, View} from 'react-native'

class Home extends Component{
    state ={
        myState:'If today is the lastday of my life what I want to do today ? What I am about to do today ?'
    }
    updateState = () => this.setState({myState:'The state is updated'})
    render(){
        return (
            <View>
                <Text onPress = {this.updateState}>
                    {this.state.myState}
                </Text>
            </View>
        )
    }
}

export default Home;
