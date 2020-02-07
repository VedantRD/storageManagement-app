import React from 'react'
import { LineChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Circle, G, Line, Rect, Text } from 'react-native-svg'


export default Tooltip = ({ x, y }) => (
    <G
        x={ x(5) - (75 / 2) }
        key={ 'tooltip' }
        onPress={ () => console.log('tooltip clicked') }
    >
        <G y={ 50 }>
            <Rect
                height={ 40 }
                width={ 75 }
                stroke={ 'grey' }
                fill={ 'white' }
                ry={ 10 }
                rx={ 10 }
            />
            <Text
                x={ 75 / 2 }
                dy={ 20 }
                alignmentBaseline={ 'middle' }
                textAnchor={ 'middle' }
                stroke={ 'rgb(134, 65, 244)' }
            >
                { `${chosenPoint}sq.ft` }
            </Text>
        </G>
        <G x={ 75 / 2 }>
            <Line
                y1={ 50 + 40 }
                y2={ y(data[ 5 ]) }
                stroke={ 'grey' }
                strokeWidth={ 2 }
            />
            <Circle
                cy={ y(data[ 5 ]) }
                r={ 6 }
                stroke={ 'rgb(134, 65, 244)' }
                strokeWidth={ 2 }
                fill={ 'white' }
            />
        </G>
    </G>
)