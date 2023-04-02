import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default class DropDownStocks extends Component {

    constructor(props) {
        super(props);
        //console.log("CONSTRUCT A DropDownStocks item!!", props);
    }

    render() {
        // console.log("I am re-rendering the DropDownStocks item '" + this.props.name + "_Dropdown' now!", this.props)
        return (
            <DropdownButton id='dropDownStockNamesID' title={this.props.name} size='sm'>
                <Dropdown.Item
                    as="button"
                    onClick={this.props.onClick1}
                >
                    Alcoa
                </Dropdown.Item>
                <Dropdown.Item
                    as="button"
                    onClick={this.props.onClick2}
                >
                    American Motors
                </Dropdown.Item>
                <Dropdown.Item
                    as="button"
                    onClick={this.props.onClick3}
                >
                    J. I. Case
                </Dropdown.Item>
                <Dropdown.Item
                    as="button"
                    onClick={this.props.onClick4}
                >
                    General Mills
                </Dropdown.Item>
                <Dropdown.Item
                    as="button"
                    onClick={this.props.onClick5}
                >
                    Int. Shoe
                </Dropdown.Item>
                <Dropdown.Item
                    as="button"
                    onClick={this.props.onClick6}
                >
                    Maytag
                </Dropdown.Item>
                <Dropdown.Item
                    as="button"
                    onClick={this.props.onClick7}
                >
                    Western Publ.
                </Dropdown.Item>
                <Dropdown.Item
                    as="button"
                    onClick={this.props.onClick8}
                >
                    Woolworth
                </Dropdown.Item>
            </DropdownButton>
        );
    }
}
