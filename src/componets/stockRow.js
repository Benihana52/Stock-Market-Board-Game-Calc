import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export default class Stockrow extends Component {
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
        // console.log("I am re-rendering the Stockrow item '" + this.props.name + "' now!", this.props)
        return (
            <tr style={this.props.style} align='center' valign='center'>
                <td><span className="m-1">{this.props.name}</span></td>
                <td><span className="m-1">${this.props.price}</span></td>
                <td><input
                    inputProps={{ inputMode: 'numeric' }}
                    pattern="[0-9]*"
                    style={{ width: "100%" }}
                    type="number"
                    placeholder={this.props.amount}
                    onChange={this.props.onChange}
                    onBlur={(event) => event.target.value = null}
                />
                </td>
                <td><span className="m-1">${this.currencyFormat(this.props.amount * this.props.price)}</span></td>
                <td className="m-1" align='center'>
                    {this.props.buttonToggle ? <button
                        disable={this.props.buttonToggle}
                        onClick={() => this.props.onClick()}
                        className="m-1"
                        style={{ backgroundColor: 'grey', color: 'black' }}
                    >
                        <b>Div</b>
                    </button> : <button
                        disable={this.props.buttonToggle}
                        onClick={() => this.props.onClick()}
                        className="m-1"
                        style={{ backgroundColor: 'green', color: 'white' }}
                    >
                        <b>Div</b>
                    </button>}
                </td>
                <td><span>{this.props.posibleDiv}</span></td>
            </tr>
        )
    }
}