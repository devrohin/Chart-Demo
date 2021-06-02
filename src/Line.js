import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js';


const data = {
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ],
    datasets: [{
        type: 'line',
        label: 'Line 1 Dataset',
        data: [10, 20, 30, 40, 50, 60, 70],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)'
    }, {
        type: 'line',
        label: 'Line 2 Dataset',
        data: [40, 55, 50, 20, 80, 52, 44],
        fill: false,
        borderColor: 'rgb(54, 162, 235)'
    }]
};

const options = {
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
            fullWidth: true,
            reverse: false
        }
    },

    layout: {
        padding: 20
    }
    // datasets: {
    //     line: {
    //         cutout: 120,
    //         radius: 5
    //     }
    // }
};

function LineComponent() {
    return (
        <div style={{ height: '400px', width: '400px' }}>

            <h2>Line Chart - Chart.js</h2>
            <Line data={data} options={options} />
        </div>
    );
}

export default LineComponent;