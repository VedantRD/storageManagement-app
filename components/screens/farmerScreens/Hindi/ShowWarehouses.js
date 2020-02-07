import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, InputGroup, Input, Form, Item, List, ListItem } from 'native-base';
import StarRating from 'react-native-star-rating'
import WarehouseCard from './WarehouseCard';
import { StyleSheet } from 'react-native'

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
              <Text>Under Fermintation</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}