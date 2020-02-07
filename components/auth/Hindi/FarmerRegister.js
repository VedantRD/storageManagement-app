import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Header, Left, Button, Icon, Body, Title, Content, Footer, FooterTab, Container, Form, Item, Label, Input, Text, View } from 'native-base';

export default class BuyerRegister extends Component {
    render() {
        return (
            <Container>
                <Content padder style={{ marginRight: 5 }}>
                    <Text style={styles.registerHeader} >Register</Text>
                    <Form style={{ paddingVertical: "5%", marginTop: '10%' }}>
                        <Item floatingLabel style={{ padding: 3, borderBottomWidth: 2 }}>
                            <Label>UserName</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={{ padding: 3, borderBottomWidth: 2 }}>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} />
                        </Item>
                        <Item floatingLabel style={{ padding: 3, borderBottomWidth: 2 }}>
                            <Label>Aadhar No.</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={{ padding: 3, borderBottomWidth: 2 }}>
                            <Label>Ph No.</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={{ padding: 3, borderBottomWidth: 2 }}>
                            <Label>Gender</Label>
                            <Input />
                        </Item>
                    </Form>
                    <View floatingLabel style={{ marginTop: '30%' }}>
                        <Button rounded danger iconLeft style={styles.registerButton}>
                            <Icon name='person' />
                            <Text style={styles.loginText}>Register</Text>
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
    registerHeader: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: '5%',
        textAlign: 'center'
    },
    registerText: {
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',

    },
    registerButton: {
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


