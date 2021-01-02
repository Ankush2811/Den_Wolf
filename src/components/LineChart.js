import React,{Component} from 'react'
import {Line} from 'react-chartjs-2'
class LineChart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['A','B','C','D','E'],
                datasets:[{
                    label:'abcde',
                    data:[
                        100,
                        200,
                        50,
                        20,
                        80
                    ],
                    backgroundColor:[
                        'rgba(255,0,0,0.6)',
                        'rgba(0,199,0,0.6)',
                        'rgba(0,0,255,0.6)',
                        'rgba(25,99,132,0.6)',
                        'rgba(255,99,32,0.6)',
                    ]
                }]
            }
        }
    }
    render(){
        return(
            <div className="chart" style={{color:'black'}}>
                Line Chart
                <Line
                data={this.state.chartData}
                height={200}
                width={100}
                options={{maintainAspectRatio:false}}
                />
            </div>
        )
    }
}
export default LineChart