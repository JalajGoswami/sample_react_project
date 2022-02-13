import React, { Component } from 'react'
import LocalData from '../dummyData.json'
import axios from 'axios'

class TableContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            InternetData: []
        }
    }
    componentDidMount(){
        axios.get('https://mocki.io/v1/446428bf-b305-478c-8b8d-05522bdf23e2')
            .then(response => {this.setState({InternetData: response.data})})
            .catch()       
    }
    render() {
        const Data = this.props.source=='internet' ? this.state.InternetData : LocalData
        return (
            <>
                {Data.map((data)=>( data.Id )).map(i=>(
                    <tr>
                    <td>{Data.map((data)=>( data.Id ))[i-1]}</td>
                    <td>{Data.map((data)=>( data.Year ))[i-1]}</td>
                    <td>{Data.map((data)=>( data.Medals ))[i-1]}</td>
                    </tr>
                ))}
            </>
        )
    }
}

export default TableContent
