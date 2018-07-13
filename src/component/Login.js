import React, { Component } from 'react'
import { Container, Content, Text, Form, Item, Label, Input, Button } from 'native-base'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import {StackActions, NavigationActions} from 'react-navigation'

export default class Login extends Component<> {
    constructor() {
        super()
        this.state = {
            email:'',
            password:''
        }
    }

    componentDidMount() {
            if(firebase.auth().currentUser !== null) {
                this.props.navigation.dispatch(home)
            }
    }

    handleLogin() {
        const { navigate } = this.props.navigation
        firebase.auth()
        .signInAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.dispatch(home))
        .catch(error => Alert.alert('Error!',error.message))
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <Container>
                <Content>
                  <Form>
                    <Item stackedLabel>
                      <Label>Email {this.state.user}</Label>
                      <Input keyboardType='email-address' onChangeText={(email) => this.setState({email})} />
                    </Item>
                    <Item stackedLabel>
                      <Label>Password</Label>
                      <Input secureTextEntry onChangeText={(password) => this.setState({password})} />
                    </Item>
                  <Button full style={{margin: 10}} onPress={() => {this.handleLogin()}}>
                    <Text>Login</Text>
                  </Button>
                  <Button full style={{margin: 10}} onPress={() => navigate('SignUp') }>
                    <Text>Sign Up</Text>
                  </Button>
                  </Form>
                </Content>
              </Container>
        )
    }
}

const home = StackActions.reset({
    index:0,
    actions: [
    NavigationActions.navigate({routeName: 'Home'})]
})