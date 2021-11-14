import React, { Component } from 'react'
import axios from 'axios';
import LocalData from '../dummyData.json'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

class Chart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             chartWidth:600
        }
    }
    componentDidMount(){
        window.addEventListener('resize',this.widthHandler);
        this.widthHandler()
        axios.get('https://mocki.io/v1/446428bf-b305-478c-8b8d-05522bdf23e2')
            .then(response => {this.setState({InternetData: response.data})})
            .catch()      
    }
    widthHandler = () =>{
        if(window.innerWidth>1000){
            this.setState({chartWidth:600})
        }else if(window.innerWidth>600){
            this.setState({chartWidth:500})
        }else if(window.innerWidth>450){
            this.setState({chartWidth:400})
        }else{this.setState({chartWidth:320})}
    }
    render() {
        
        const Data = this.props.source=='internet' ? this.state.InternetData : LocalData
        return (
            <div>
                <LineChart width={this.state.chartWidth} height={300} data={Data}>
                    <Line type="monotone" dataKey="Medals" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="Year" />
                    <YAxis />
                </LineChart>
            </div>
        )
    }
}

export default Chart
