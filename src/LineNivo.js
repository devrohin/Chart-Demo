import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const data = [
    {
        id: "Japan",
        color: "hsl(214, 70%, 50%)",
        data: [
            { "x": "train", "y": 10 },
            { "x": "subway", "y": 20 },
            { "x": "bus", "y": 30 },
            { "x": "car", "y": 40 },
            { "x": "moto", "y": 50 },
            { "x": "bicycle", "y": 60 },
            { "x": "others", "y": 30 }
        ]
    },
    {
        id: "France",
        color: "hsl(285, 70%, 50%)",
        data: [
            { "x": "train", "y": 10 },
            { "x": "subway", "y": 24 },
            { "x": "bus", "y": 85 },
            { "x": "car", "y": 91 },
            { "x": "moto", "y": 17 },
            { "x": "bicycle", "y": 10 },
            { "x": "others", "y": 87 }
        ]
    }
];

const Linenivo = () => (
    <ResponsiveLine
        data={data}
        margin={{
            top: 30,
            bottom: 100,
            right: 30,
            left: 30
        }}
        xScale={{
            type: "point"
        }}
        yScale={{
            type: "linear",
            stacked: false,
            min: "0",
            max: "auto"
        }}
        minY="auto"
        maxY="auto"
        stacked={true}
        axisBottom={{
            "orient": "bottom",
            "tickSize": 0,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "TRANSPORTATION",
            "legendOffset": 36,
            "legendPosition": "middle"
        }}
        axisLeft={{
            "orient": "left",
            "tickSize": 0,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "COUNT",
            "legendOffset": -40,
            "legendPosition": "middle"
        }}
        dotSize={80}
        dotColor="inherit:darker(0.3)"
        dotBorderWidth={2}
        enablePointLabel={true}
        dotBorderColor="#ffffff"
        enableDotLabel={true}
        dotLabel="y"
        curve="linear"
        translateX={110}
        dotLabelYOffset={-12}
        animate={true}
        enableSlices="x"
        crosshairType="x"
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                anchor: "bottom",
                direction: "row",
                legendPosition: "center",
                justify: false,
                translateX: 0,
                translateY: 80,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 20,
                symbolSize: 25,
                symbolShape: "square",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemBackground: "rgba(0, 0, 0, .03)",
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
);

export default Linenivo;