import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Header, Content, Card, CardItem, Thumbnail, List, ListItem, Text, Button, Icon, Left, Body, Right, Title, InputGroup, Input, Form, Item, View, Container } from 'native-base';
// import TransportOptionsData from '../../screens/farmerScreens/farmerData/Transport'
const TransportationData = require('../../screens/farmerScreens/farmerData/Transport.json')
const niceBlue = '#1E8AE9'

export default class TransportOptions extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='ios-arrow-back' style={{ color: 'white', marginLeft: 10 }}>
                            </Icon>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent style={{ justifyContent: 'center', alignItems: 'center', marginRight: 0 }}>
                            <Text style={{ marginRight: 7, fontSize: 19 }}>Skip</Text>
                            <Icon name='ios-arrow-forward' style={{ fontSize: 20 }}></Icon>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={{ justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
                        <Text style={{ textAlign: 'center', fontSize: 22, color: niceBlue, fontWeight: 'bold' }}>Available Transport Options</Text>
                    </View>
                    <Content padder>
                        {TransportationData.map((item) => {
                            return <Card style={{ flex: 0 }} key={item.id}>
                                <CardItem style={{ flexDirection: 'row' }}>
                                    <Left style={{ flex: 5 }}>
                                        <View style={{ marginRight: 5 }}>
                                            <Icon name='bus' style={{ fontSize: 45 }}></Icon>
                                        </View>
                                        <Body style={{ marginLeft: 15 }}>
                                            <Text>{item.name}</Text>
                                            <Text note>Truck</Text>
                                        </Body>
                                    </Left>
                                    <Right style={{ flex: 1 }}>
                                        <Icon name='ios-arrow-forward' style={{ fontSize: 20 }}></Icon>
                                    </Right>
                                </CardItem>
                            </Card>
                        })}
                        {/* TODO ============= Work on it Later =================== */}
                        <List style={{ marginVertical: 10 }}>
                            <ListItem itemDivider>
                                <Text>*New Services Coming Soon</Text>
                            </ListItem>
                        </List>
                        <Card style={{ flex: 0 }}>
                            <CardItem>
                                <Left>
                                    {/* <Thumbnail source={require('../../assets/orange.png')} /> */}
                                    <View style={{ marginRight: 5 }}>
                                        <Icon name='train' style={{ fontSize: 45 }}></Icon>
                                    </View>
                                    <Body style={{ justifyContent: 'center' }}>
                                        <Text>Kisaan Rail</Text>
                                        <Text note>Truck</Text>
                                    </Body>
                                </Left>
                                <Right>
                                    <Icon name='ios-arrow-forward' style={{ fontSize: 20 }}></Icon>
                                </Right>
                            </CardItem>
                        </Card>
                    </Content>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({})
