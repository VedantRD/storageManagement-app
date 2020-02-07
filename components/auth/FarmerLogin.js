import { StyleSheet, Alert } from 'react-native'
import { Header, Left, Button, Icon, Body, Title, Content, Footer, FooterTab, Container, Form, Item, Label, Input, Text, View } from 'native-base';
import React, { Component } from 'react'

const userData = require('./userData.json')

export default class FarmerLogin extends Component {

    state = {
        username: "",
        password: "",
    }
    //user
    userAuth = () => {
        const users = userData.map((data) => data.username)
        const passes = userData.map((data) => data.password)
        if ((Object.values(users).indexOf(this.state.username) > -1) && (Object.values(passes).indexOf(this.state.password) > -1)) {
            return true
        }
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Text style={styles.loginHeader}>Login</Text>
                    <Button transparent onPress={() => this.props.navigation.navigate('FarmerRegister')}>
                        <Text>
                            <Text style={styles.registerText}>Dont have Account ?</Text>
                            <Text style={{ color: 'red', fontWeight: 'bold' }}> Register</Text>
                        </Text>
                    </Button>
                    <Form style={{ padding: "5%", marginTop: '10%' }}>
                        <Item floatingLabel style={{ padding: 7, borderBottomWidth: 2 }}>
                            <Label>Username</Label>
                            <Input onChangeText={(username) => this.setState({ username })} />
                        </Item>
                        <Item floatingLabel style={{ padding: 7, borderBottomWidth: 2 }}>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />
                        </Item>
                    </Form>
                    <View style={{ marginTop: '40%' }}>
                        <Button rounded danger iconLeft style={styles.loginButton} onPress={() => this.userAuth() ? this.props.navigation.navigate('FarmerTabNavigator', { name: this.state.username }) : Alert.alert('Login Failed', 'Invalid Username or Password')}>
                            <Icon name='person' />
                            <Text style={styles.loginText}>Login</Text>
                        </Button>
                    </View>
                </Content>
            </Container >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },
    loginHeader: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: '40%',
        marginLeft: "3.6%"
    },
    registerText: {
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',

    },
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingHorizontal: '10%',
        marginHorizontal: '20%'
    },
    loginText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 19,

    }
});

