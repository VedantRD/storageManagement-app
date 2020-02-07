import React, { Component } from 'react'
import { Content } from 'native-base';
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { View, Dimensions, StatusBar } from 'react-native'
import { color } from 'react-native-reanimated';

class PieWithCenteredLabels extends Component {

    render() {
        // ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#808080'
        const deviceWidth = Dimensions.get('window').width

        const data = [
            {
                key: 1,
                amount: 40,
                svg: { fill: '#F44336' },
            },
            {
                key: 2,
                amount: 10,
                svg: { fill: '#2196F3' }
            },
            {
                key: 3,
                amount: 20,
                svg: { fill: '#cf69f5' }
            },
            {
                key: 4,
                amount: 15,
                svg: { fill: '#4CAF50' }
            },
            {
                key: 5,
                amount: 10,
                svg: { fill: '#808080' }
            }
        ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[0]}
                        y={pieCentroid[1]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={24}
                        stroke={'black'}
                        strokeWidth={0.2}
                        fontWeight='bold'

                    >
                        {data.amount}
                    </Text>
                )
            })
        }

        return (
            <Content>
                <PieChart
                    style={{ height: 200 }}
                    valueAccessor={({ item }) => item.amount}
                    data={data}
                    spacing={0}
                    outerRadius={'95%'}
                >
                    <Labels />
                </PieChart>
                <Text
                    //   onLayout={({ nativeEvent: { layout: { width } } }) => {
                    //     this.setState({ labelWidth: width });
                    //   }}
                    style={{
                        position: 'absolute',
                        // left: deviceWidth / 2 - labelWidth / 2,
                        textAlign: 'center',
                        color: 'red'
                    }}>
                    {/* {`${label} \n ${value}`} */}
                    sjadag
        </Text>
                <Text>Jaeysh</Text>
            </Content>
        )
    }

}

export default PieWithCenteredLabels