import React,{ Component } from 'react';
import './App.css';
import Chart from './components/Chart';
import TableContent from './components/TableContent';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props)
    this.btnLocal = React.createRef()
    this.btnInternet = React.createRef()
    this.state = {
       source: 'local'
    }
  }

  fetchLocalData = () => {
    const btn1 = this.btnLocal.current
    const btn2 = this.btnInternet.current
    if(!btn1.classList.contains('active')){
      btn1.classList.toggle('active')
    }
    if(btn2.classList.contains('active')){
      btn2.classList.toggle('active')
    }
    this.setState({source: 'local'})
  }
  fetchInternetData = () => {
    const btn1 = this.btnLocal.current
    const btn2 = this.btnInternet.current
    if(!btn2.classList.contains('active')){
      btn2.classList.toggle('active')
    }
    if(btn1.classList.contains('active')){
      btn1.classList.toggle('active')
    }
    this.setState({source: 'internet'})
  }
  render()
  {
    return (
      <div className="App">
        <h1>React App for Data Fetching & Chart Representation</h1>
        <div className="selector">
          <button ref={this.btnLocal} onClick={this.fetchLocalData} className="active">Local Data</button>
          <button ref={this.btnInternet} onClick={this.fetchInternetData}>Data over Internet</button>
        </div>
        {this.state.source=='internet' ? <h3>Data fetched from the Fake JSON API using <a href="https://mocki.io/fake-json-api" target="_blank">mocki.io/fake-json-api</a></h3>
        : <h3>Data fetched from Local dummyData.json file stored in src folder</h3>}
        <div id="container">
          <table>
            <tr>
            <th>Id</th>
            <th>Year</th>
            <th>Medals</th>
            </tr>
            <TableContent source={this.state.source}/>
          </table>
          <Chart source={this.state.source} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
