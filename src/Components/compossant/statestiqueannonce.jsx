import React, { Component } from "react";
import ReactDOM from "react-dom";
import Chart from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import Sidebar from './Slidebar'
import {URL} from '../../api/Url'
import PersoLineGraph from './statiqueuser'
let chartData = [];
let element = []
let   anees = []
class Charts extends Component {
  chartRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],

    };
  }
  chartRef = React.createRef();
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    axios
      .get(URL + "app/allannonce"
      )
      .then(res => {
        const x = res.data;
               
              x.forEach(el => {
                element.push(Number(el.datecreation.slice(3,5)))
              
              })
                let   count = 0
                let  anne = 1
            
                while( anne < 13)
                {
                    for (let i =0 ; i <element.length ; i++ )
                    { 
                        if(anne == element[i])
                        count ++
                    }
                    anees.push(count)
                    anne ++
                    count = 0
            
                }
                new Chart(myChartRef, {
                
                  type: 'bar',
                  data: {
                      //Bring in data
                      labels: ["Jan", "Feb", "March","Avril","Mai","juin","Juillet","Août","Sebtmbre","Octobre","Nouvembre","Decembre"],
                      datasets: [
                          {
                              label: "Annonce",
                              data: anees,
                              hoverBackgroundColor:"#B08EA2",
                              backgroundColor:'#006b00',
                              borderCapStyle:"pointRadius",
                              borderColor:'#006b00',
                              options:{
                                tooltips: {
                                  mode: 'nearest'
                              },
                                responsive: true,
                                maintainAspectRatio: false,
                        
                              }
                          }]}})
               
              });
              this.setState({ chartData });
          
    
           
  
    
      
  }

  render() {
    console.log("mon stat " , anees)
    return (
      <>
      <div class="team-item">
  <div class="team-item1">
    <div className="bgcolorsliderbar">
  <Sidebar/>
  </div>
  </div>
  <div class="team-item2">
    <br></br>
  <div >
  <PersoLineGraph/> 
      <div  class ="team-item2" style={{marginTop:"30px"}}>
      <h5 className="text-center"> statestique Annonce par moi</h5>
            <canvas   id="myChart"
               
                ref={this.chartRef}
               
            />
      
        </div>
    
 
  </div>
  <br></br> <br></br>
  </div>
 
</div>
     
   
    
      </>
    );
  }
}

export default Charts;

