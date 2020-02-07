import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Left, Button, Icon, Body, Title, Content, Footer, FooterTab, Container } from 'native-base';

const Base = () => {
    return (
        <Container style={{ flex: 1, height: '100%' }}>
            <Header style={styles.container}>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title style={{ color: 'white' }}>This is Base page</Title>
                </Body>
            </Header>
            <Content>
                <Text>This is Content Section</Text>
            </Content>
            <Footer>
                <FooterTab>
                    <Button full>
                        <Text>Footer</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: ''
    }
});

export default Base
