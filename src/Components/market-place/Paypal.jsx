import React,{Component} from 'react'
import ReactDOM from 'react-dom'

       let PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

       export default class Main extends Component {

            createOrder(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: this.props.somme
                        }
                    }]
                });
            }

            onApprove(data, actions) {
                return actions.order.capture();
            }

            render() {
                return (
                   <PayPalButton 
                        createOrder={ (data, actions) => this.createOrder(data, actions) }
                        onApprove={ (data, actions) => this.onApprove(data, actions) }
                    />
                  
                );
            }
        }