import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import './statistics.css';
import Footer from '../Footer/footer';


class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
                datasets:[
                    {
                        label: 'Veteran Suicides',
                        data:[
                            6056,
                            5968,
                            6174,
                            6489,
                            6455,
                            6472,
                            6375,
                            6383,
                            6443,
                            6587,
                            6554,
                            6310,
                            6399,
                            6435,
                        ], 
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }
                ]
            }
        }
    }
    
    render() { 
        return ( 
            <React.Fragment>
                 <div className="chart">
                <h1>Annual Veteran Suicides</h1>
               <Bar
                    data={this.state.chartData}
                    options={{ 
                        title:{
                            display: true,
                            text: 'Veteran Suicides By Year'
                        },
                        legend: {
                            display: false,
                            position: 'right'
                        }
                    }}
                />
            </div>
            <Footer />
            </React.Fragment>
          
         );
    }
}

export default Chart;