import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default class DropDownShareHolders extends Component {

    constructor(props) {
        super(props);
        //console.log("CONSTRUCT A DropDownShareHolders item!!", props);
    }

    render() {
        // console.log("I am re-rendering the DropDownShareHolders item '" + this.props.name + "' now!", this.props)
        return (
            <DropdownButton id='dropDownStockHoldersID' title={this.props.name} size='sm'>
                <Dropdown.Item
                    as="button"
                    onClick={this.props.onClick1}
                >
                    1 For 1
                </Dropdown.Item>
                <Dropdown.Item
                    as="button"
                    onClick={this.props.onClick2}
                >
                    2 For 1
                </Dropdown.Item>
                <Dropdown.Item
                    as="button"
                    onClick={this.props.onClick3}
                >
                    3 For 1
                </Dropdown.Item>
            </DropdownButton>
        );
    }
}
