import React, { Component } from 'react'
import Chart from "chart.js";
import {connect} from 'react-redux'
import {Getanonces} from '../../action/Annonce'
import {Getalluser} from '../../action/Personne'
import {URL} from '../../api/Url'
import axios from 'axios'
let chartData = [];
let element = []
let   anees = []
 class PersoLineGraph extends Component {
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
      
            .get(URL + "app/getalluser"
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
                              label: "User",
                              data: anees,
                              hoverBackgroundColor:"#02d6f7",
                              backgroundColor:'rgba(0, 0, 100, 0.8)',
                              options:{
                                responsive: true,
                                maintainAspectRatio: false,
                        
                              }
                          }]}})
               
              });
              this.setState({ chartData });
          
    
           
          } 
         
         
        
      
        render() {
           
          return (

            <div>
          <h5 className="text-center"> statestique utilisateur par moi</h5>
                <div>
              
                      <canvas   id="myChart"
                         
                          ref={this.chartRef}
                          width="150px" 
                      />
                
                  </div>
            <div>
           
            </div>
            </div>
          );
        }
      }
      
 

export default PersoLineGraph
