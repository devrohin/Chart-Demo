import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 200, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

const options = {
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
            fullWidth: true,
            reverse: false,
        },
        title: {
            align: 'left',
            display: true,
            position: 'Top',
            font: { weight: 'bold' },
            text: 'Custom Chart Title',
            padding: '20'
        }
    },

    layout: {
        padding: 30
    },

    datasets: {
        doughnut: {
            cutout: 160,
            radius: 100
        }
    }
};

function DoughnutComponent() {
    return (
        <div style={{ height: '500px', width: '500px' }}>
            <h2>Doughnut Example - Chart.js</h2>
            <Doughnut data={data} options={options} />
        </div>
    );
}
export default DoughnutComponent;