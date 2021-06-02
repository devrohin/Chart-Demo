import React from "react";
import { ResponsivePie } from "@nivo/pie";

const dataExample = [
    { id: "php", label: "php", value: 287, color: "hsl(297, 70%, 50%)" },
    { id: "haskell", label: "haskell", value: 336, color: "hsl(65, 70%, 50%)" },
    { id: "lisp", label: "lisp", value: 182, color: "hsl(135, 70%, 50%)" },
    { id: "sass", label: "sass", value: 70, color: "hsl(43, 70%, 50%)" },
    { id: "go", label: "go", value: 247, color: "hsl(199, 70%, 50%)" }
];

const Doughnutnivo = ({ data /* see data tab */ }) => (
    <ResponsivePie
        data={dataExample}
        margin={{
            top: 30,
            bottom: 80,
            right: 100,
            left: 120
        }}
        innerRadius={0.75}
        padAngle={0.7}
        cornerRadius={2}
        colors={{
            scheme: "nivo"
        }}
        borderWidth={2}
        borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]]
        }}
        enableArcLabels={true}
        enableArcLinkLabels={true}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{
            from: "color"
        }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                anchor: "bottom",
                direction: "row",
                legendPosition: "center",
                justify: false,
                translateY: 50,
                itemWidth: 100,
                itemHeight: 25,
                itemsSpacing: -30,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                symbolSize: 22,
                symbolShape: "circle", //circle,square also works
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemTextColor: "#000000"
                        }
                    }
                ]
            }
        ]}
    />
);

export default Doughnutnivo;
