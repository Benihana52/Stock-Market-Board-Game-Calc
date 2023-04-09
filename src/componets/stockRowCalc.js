import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export default class StockrowCalc extends Component {
    //props = {
    //    style: {},
    //    name: "NOTHING",
    //    amount: 0,
    //    price: 0,
    //    onChange: function (event) { }
    //};

    constructor(props) {
        super(props);
        //console.log("CONSTRUCT A Stockrow item!!", props);
    }

    currencyFormat(num) {
        return num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    render() {
        // console.log("I am re-rendering the StockrowCalc item '" + this.props.name + "' now!", this.props)
        return (
            <tr style={this.props.style} key={this.props.name} align='center' valign='center'>
                <td><span className="m-1">{this.props.name}</span></td>
                <td><span className="m-1">${this.props.price}</span></td>
                <td><input
                    inputprops={{ inputMode: 'numeric' }}
                    pattern="[0-9]*"
                    style={{ width: "100%" }}
                    type="number"
                    placeholder={this.props.amount}
                    onChange={this.props.onChange}
                    onBlur={(event) => event.target.value = null}
                />
                </td>
                <td><span className="m-1">${this.currencyFormat(this.props.amount * this.props.price)}</span></td>
                <td></td>
            </tr>
        )
    }
}