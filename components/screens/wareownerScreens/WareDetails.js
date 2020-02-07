import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, List, ListItem, Button, Icon, Left, Body, Right, Title, Text, InputGroup, Input, Form, Item } from 'native-base';
import {
    LineChart,
    BarChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { PieChart } from 'react-native-svg-charts'
import Pie from './PieChart'
import ReactTooltip from 'react-tooltip';
import { AppRegistry, StyleSheet, ScrollView, StatusBar, TextInput, Dimensions, View } from 'react-native';
// import PieChart from 'react-native-pie-chart';
import { bool } from 'prop-types';
const screenWidth = Dimensions.get("window").width;

const data = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "Jun"],
    datasets: [
        {
            data: [
                parseInt(Math.random() * 100),
                parseInt(Math.random() * 100),
                parseInt(Math.random() * 100),
                parseInt(Math.random() * 100),
                parseInt(Math.random() * 100),
                parseInt(Math.random() * 100),
            ],
            // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            // strokeWidth: 2 // optional
        }
    ],
    // legend: ["Rainy Days", "Sunny Days", "Snowy Days"] // optional
};

//   const chartConfig = {
//     backgroundGradientFrom: "#fb8c00",
//     backgroundGradientTo: "#ffa726",
//     backgroundColor: "#e26a00",
//     backgroundGradientFrom: "#1E2923",
//     backgroundGradientFromOpacity: 0,
//     backgroundGradientTo: "#08130D",
//     backgroundGradientToOpacity: 0.5,
//     color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//     strokeWidth: 2, // optional, default 3
//     barPercentage: 0.5
//   };

const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
    }
}

export default class test extends Component {

    render() {


        const chart_wh = 200
        const series = [40, 10, 20, 15, 10]
        const sliceColor = ['#F44336', '#2196F3', '#cf69f5', '#4CAF50', '#808080']

        return (
            <Container>
                <Header searchBar rounded style={{}}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={{ alignItems: 'center', alignItems: 'flex-start' }}>
                        <Title style={{ fontSize: 22, fontWeight: 'bold', paddingLeft: 15 }}>Warehouse - 1</Title>
                    </Body>
                    {/* <Right /> */}
                </Header>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Icon name="ios-pie" style={{ fontSize: 22 }} />
                            <Left>
                                <Text style={styles.title}>Current Occupancy (%)</Text>
                            </Left>
                        </ListItem>

                        <ListItem>
                            {/* <View style={{ alignItems: 'flex-start', ...styles.container }}> */}
                            {/* <StatusBar
                                    hidden={false}
                                /> */}
                            {/* <Text style={styles.title}>Basic</Text> */}
                            {/* <PieChart
                                    chart_wh={chart_wh}
                                    series={series}
                                    sliceColor={sliceColor}
                                /> */}
                            {/* <PieChart
                                    chart_wh={chart_wh}
                                    series={series}
                                    sliceColor={sliceColor}
                                    doughnut={true}
                                    coverRadius={0.60}
                                    coverFill={'#FFF'}
                                /> */}
                            <Pie />
                            {/* </View> */}
                            <View style={{ alignItems: 'flex-end' }}>
                                <List>
                                    <ListItem style={styles.itemlist}>
                                        <Icon name="square" style={{ color: sliceColor[0], fontSize: 15, paddingRight: 10 }} />
                                        <Text>Cotton</Text>
                                    </ListItem>

                                    <ListItem style={styles.itemlist}>
                                        <Icon name="square" style={{ color: sliceColor[1], fontSize: 15, paddingRight: 10 }} />
                                        <Text>Rice</Text>
                                    </ListItem>

                                    <ListItem style={styles.itemlist}>
                                        <Icon name="square" style={{ color: sliceColor[2], fontSize: 15, paddingRight: 10 }} />
                                        <Text>Ground Nut</Text>
                                    </ListItem>

                                    <ListItem style={styles.itemlist}>
                                        <Icon name="square" style={{ color: sliceColor[3], fontSize: 15, paddingRight: 10 }} />
                                        <Text>Turmeric</Text>
                                    </ListItem>

                                    <ListItem style={styles.itemlist}>
                                        <Icon name="square" style={{ color: sliceColor[4], fontSize: 15, paddingRight: 10 }} />
                                        <Text>Free Space</Text>
                                    </ListItem>

                                </List>
                            </View>
                        </ListItem>

                        <ListItem itemDivider>
                            {/* <Icon name="ios-podium" style={{fontSize:22}} /> */}
                            <Icon name="ios-stats" style={{ fontSize: 22 }} />
                            <Left>
                                <Text style={styles.title}>Usage and Statistics</Text>
                            </Left>
                        </ListItem>

                        <ListItem>
                            <View style={{ alignItems: 'center', ...styles.container }}>
                                {/* <p ref={ref => this.state.value=value} data-tip='tooltip'></p> */}
                                <LineChart
                                    onDataPointClick={({ value, getColor }) => {
                                        console.log(`${value} You selected this value ${getColor(0.9)}`)
                                        // ReactTooltip.show(`${value}`);
                                        alert('Jayesh')
                                    }}

                                    style={{
                                        borderRadius: 16
                                    }}
                                    ReactTooltip
                                    fromZero={true}
                                    yAxisLabel=""
                                    yAxisSuffix="sq.ft"
                                    yLabelsOffset='5'
                                    data={data}
                                    width={screenWidth - 20}
                                    height={256}
                                    verticalLabelRotation={30}
                                    chartConfig={chartConfig}
                                    bezier
                                />
                                {/* <ReactTooltip /> */}
                                <Text style={{ fontStyle: 'italic', marginTop: 5 }}>For the year 2019-20</Text>
                                <Text style={{ alignSelf: 'flex-start', paddingTop: 5, color: 'red' }}>Prediction: July 50.10sq.ft</Text>
                            </View>
                        </ListItem>

                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    title: {
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemlist: {
        paddingRight: 30
    }
});

AppRegistry.registerComponent('test', () => test);