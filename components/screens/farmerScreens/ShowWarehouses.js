import React, { Component } from 'react';
import { Image, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, InputGroup, Input, Form, Item, List, ListItem } from 'native-base';
import StarRating from 'react-native-star-rating'
import WarehouseCard from './WarehouseCard';
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const warehouseData = require('./farmerData/WarehouseData.json')

export default class ShowWarehouses extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded style={{}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search Warehouse" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          {warehouseData.map((item) => {
            return (<WarehouseCard navigation={this.props.navigation} data={item} key={item.id}></WarehouseCard>)
          })}
          {/* TODO ============= Work on it Later =================== */}
          <List style={{ marginVertical: 10 }}>
            <ListItem itemDivider>
              <Text>Under Fumigation</Text>
            </ListItem>
          </List>
          <TouchableOpacity onPress={() => Alert.alert("Can't Book", "This Warehouse is Currently Under Fumigation")}>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require(`../../assets/warehouses/ware2.jpg`)} />
                  <Body style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Nikhil Warehouse</Text>
                    <Text style={{ fontSize: 16 }} note>Biloli, Nanded</Text>
                  </Body>
                  <Text style={{ fontWeight: 'bold', marginRight: 10, fontSize: 18 }}>4.1 Km</Text>
                </Left>
              </CardItem>
              <CardItem style={{ flexDirection: 'row' }}>
                <Left style={{ flex: 1 }}>
                  <Button transparent>
                    <StarRating disabled={false} maxStars={5} starSize={18}
                      fullStarColor={'orange'}
                      rating={3}
                    />
                  </Button>
                </Left>
                <Right style={{ flex: 1 }}>
                  <Text>
                    <Text style={{}}>Available : </Text>
                    <Text style={{ fontWeight: 'bold', color: 'green' }}>501 Sq Ft</Text>
                  </Text>
                  <Text style={{}}>Total Area : 7100 Sq Ft</Text>
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}