import React, { Component, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Stockrow from './stockRow';
import StockrowCalc from './stockRowCalc';
import DropDownShareHolders from './dropDownShareHolders';
import DropDownStocks from './dropDownStocks';
import Alert from 'react-bootstrap/Alert';
import "bootstrap/js/src/collapse.js";
import { ChevronDoubleUp, ChevronDoubleDown } from 'react-bootstrap-icons'

//notes
//woolworth is spelled wrong

//maps for all stock prices
let pricesAlcoa = new Map([
    [-25, 30],
    [-24, 34],
    [-23, 38],
    [-22, 42],
    [-21, 46],
    [-20, 50],
    [-19, 54],
    [-18, 58],
    [-17, 62],
    [-16, 66],
    [-15, 70],
    [-14, 74],
    [-13, 78],
    [-12, 82],
    [-11, 86],
    [-10, 90],
    [-9, 94],
    [-8, 98],
    [-7, 102],
    [-6, 106],
    [-5, 110],
    [-4, 114],
    [-3, 118],
    [-2, 122],
    [-1, 126],
    [0, 130],
    [1, 134],
    [2, 138],
    [3, 142],
    [4, 146],
    [5, 150],
    [6, 154],
    [7, 158],
    [8, 162],
    [9, 166],
    [10, 170],
    [11, 174],
    [12, 178],
    [13, 182],
    [14, 186],
    [15, 190],
    [16, 194],
    [17, 198],
    [18, 202],
    [19, 206],
    [20, 210],
    [21, 214],
    [22, 218],
    [23, 222],
    [24, 226],
    [25, 230],
])
let pricesAmericanMotors = new Map([
    [-25, 10],
    [-24, 12],
    [-23, 14],
    [-22, 16],
    [-21, 18],
    [-20, 20],
    [-19, 22],
    [-18, 24],
    [-17, 26],
    [-16, 28],
    [-15, 30],
    [-14, 32],
    [-13, 34],
    [-12, 36],
    [-11, 38],
    [-10, 40],
    [-9, 42],
    [-8, 44],
    [-7, 46],
    [-6, 48],
    [-5, 50],
    [-4, 52],
    [-3, 54],
    [-2, 56],
    [-1, 58],
    [0, 60],
    [1, 62],
    [2, 64],
    [3, 66],
    [4, 68],
    [5, 70],
    [6, 72],
    [7, 74],
    [8, 76],
    [9, 78],
    [10, 80],
    [11, 82],
    [12, 84],
    [13, 86],
    [14, 88],
    [15, 90],
    [16, 92],
    [17, 94],
    [18, 96],
    [19, 98],
    [20, 100],
    [21, 102],
    [22, 104],
    [23, 106],
    [24, 108],
    [25, 110],
])
let pricesJICase = new Map([
    [-25, 15],
    [-24, 16],
    [-23, 17],
    [-22, 18],
    [-21, 19],
    [-20, 20],
    [-19, 21],
    [-18, 22],
    [-17, 23],
    [-16, 24],
    [-15, 25],
    [-14, 26],
    [-13, 27],
    [-12, 28],
    [-11, 29],
    [-10, 30],
    [-9, 31],
    [-8, 32],
    [-7, 33],
    [-6, 34],
    [-5, 35],
    [-4, 37],
    [-3, 39],
    [-2, 41],
    [-1, 43],
    [0, 45],
    [1, 47],
    [2, 49],
    [3, 51],
    [4, 53],
    [5, 55],
    [6, 56],
    [7, 57],
    [8, 58],
    [9, 59],
    [10, 60],
    [11, 61],
    [12, 62],
    [13, 63],
    [14, 64],
    [15, 65],
    [16, 66],
    [17, 67],
    [18, 68],
    [19, 69],
    [20, 70],
    [21, 71],
    [22, 72],
    [23, 73],
    [24, 74],
    [25, 75],
])
let pricesGeneralMills = new Map([
    [-25, 18],
    [-24, 18],
    [-23, 19],
    [-22, 19],
    [-21, 20],
    [-20, 20],
    [-19, 21],
    [-18, 21],
    [-17, 22],
    [-16, 22],
    [-15, 23],
    [-14, 23],
    [-13, 24],
    [-12, 24],
    [-11, 25],
    [-10, 25],
    [-9, 26],
    [-8, 26],
    [-7, 27],
    [-6, 27],
    [-5, 28],
    [-4, 28],
    [-3, 29],
    [-2, 29],
    [-1, 30],
    [0, 30],
    [1, 30],
    [2, 31],
    [3, 31],
    [4, 32],
    [5, 32],
    [6, 33],
    [7, 33],
    [8, 34],
    [9, 34],
    [10, 35],
    [11, 35],
    [12, 36],
    [13, 36],
    [14, 37],
    [15, 37],
    [16, 38],
    [17, 38],
    [18, 39],
    [19, 39],
    [20, 40],
    [21, 40],
    [22, 41],
    [23, 41],
    [24, 42],
    [25, 42],
])
let pricesIntShoes = new Map([
    [-25, 42],
    [-24, 42],
    [-23, 41],
    [-22, 41],
    [-21, 40],
    [-20, 40],
    [-19, 39],
    [-18, 39],
    [-17, 38],
    [-16, 38],
    [-15, 37],
    [-14, 37],
    [-13, 36],
    [-12, 36],
    [-11, 35],
    [-10, 35],
    [-9, 34],
    [-8, 34],
    [-7, 33],
    [-6, 33],
    [-5, 32],
    [-4, 32],
    [-3, 31],
    [-2, 31],
    [-1, 30],
    [0, 30],
    [1, 30],
    [2, 29],
    [3, 29],
    [4, 28],
    [5, 28],
    [6, 27],
    [7, 27],
    [8, 26],
    [9, 26],
    [10, 25],
    [11, 25],
    [12, 24],
    [13, 24],
    [14, 23],
    [15, 23],
    [16, 22],
    [17, 22],
    [18, 21],
    [19, 21],
    [20, 20],
    [21, 20],
    [22, 19],
    [23, 19],
    [24, 18],
    [25, 18],
])
let pricesMayTag = new Map([
    [-25, 75],
    [-24, 74],
    [-23, 73],
    [-22, 72],
    [-21, 71],
    [-20, 70],
    [-19, 69],
    [-18, 68],
    [-17, 67],
    [-16, 66],
    [-15, 65],
    [-14, 64],
    [-13, 63],
    [-12, 62],
    [-11, 61],
    [-10, 60],
    [-9, 59],
    [-8, 58],
    [-7, 57],
    [-6, 56],
    [-5, 55],
    [-4, 53],
    [-3, 51],
    [-2, 49],
    [-1, 47],
    [0, 45],
    [1, 43],
    [2, 41],
    [3, 39],
    [4, 37],
    [5, 35],
    [6, 34],
    [7, 33],
    [8, 32],
    [9, 31],
    [10, 30],
    [11, 29],
    [12, 28],
    [13, 27],
    [14, 26],
    [15, 25],
    [16, 24],
    [17, 23],
    [18, 22],
    [19, 21],
    [20, 20],
    [21, 19],
    [22, 18],
    [23, 17],
    [24, 16],
    [25, 15],
])
let pricesWesternPublishing = new Map([
    [-25, 110],
    [-24, 108],
    [-23, 106],
    [-22, 104],
    [-21, 102],
    [-20, 100],
    [-19, 98],
    [-18, 96],
    [-17, 94],
    [-16, 92],
    [-15, 90],
    [-14, 88],
    [-13, 86],
    [-12, 84],
    [-11, 82],
    [-10, 80],
    [-9, 78],
    [-8, 76],
    [-7, 74],
    [-6, 72],
    [-5, 70],
    [-4, 68],
    [-3, 66],
    [-2, 64],
    [-1, 62],
    [0, 60],
    [1, 58],
    [2, 56],
    [3, 54],
    [4, 52],
    [5, 50],
    [6, 48],
    [7, 46],
    [8, 44],
    [9, 42],
    [10, 40],
    [11, 38],
    [12, 36],
    [13, 34],
    [14, 32],
    [15, 30],
    [16, 28],
    [17, 26],
    [18, 24],
    [19, 22],
    [20, 20],
    [21, 18],
    [22, 16],
    [23, 14],
    [24, 12],
    [25, 10],
])
let pricesWoolWorth = new Map([
    [-25, 230],
    [-24, 226],
    [-23, 222],
    [-22, 218],
    [-21, 214],
    [-20, 210],
    [-19, 206],
    [-18, 202],
    [-17, 198],
    [-16, 194],
    [-15, 190],
    [-14, 186],
    [-13, 182],
    [-12, 178],
    [-11, 174],
    [-10, 170],
    [-9, 166],
    [-8, 162],
    [-7, 158],
    [-6, 154],
    [-5, 150],
    [-4, 146],
    [-3, 142],
    [-2, 138],
    [-1, 134],
    [0, 130],
    [1, 126],
    [2, 122],
    [3, 118],
    [4, 114],
    [5, 110],
    [6, 106],
    [7, 102],
    [8, 98],
    [9, 94],
    [10, 90],
    [11, 86],
    [12, 82],
    [13, 78],
    [14, 74],
    [15, 70],
    [16, 66],
    [17, 62],
    [18, 58],
    [19, 54],
    [20, 50],
    [21, 46],
    [22, 42],
    [23, 38],
    [24, 34],
    [25, 30],
])

const current = new Date();
const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

// Alcoa, American Motors, J. I. Case, General Mills, Int. Shoe, Maytag, Western Publ. Woolwth


export default class Stocklist extends Component {


    constructor(props) {
        super(props);
        this.state = {
            //current location of stock prices
            stockLocation: 0,

            //style States
            stockLocationColor: "white",

            //define value of stock owned
            stockValueAlcoa: 0,
            stockValueAmericanMotors: 0,
            stockValueJICase: 0,
            stockValueGeneralMills: 0,
            stockValueIntShoe: 0,
            stockValueMaytag: 0,
            stockValueWesternPubl: 0,
            stockValueWoolwth: 0,

            //define stock owned
            alcoaAmount: 0,
            americanMotorsAmount: 0,
            jICaseAmount: 0,
            generalMillsAmount: 0,
            intShoeAmount: 0,
            maytagAmount: 0,
            westernPublAmount: 0,
            woolwthAmount: 0,

            //totals
            total: 0,
            brokerFee: 0,

            //define calc value of stock owned
            stockCalcValueAlcoa: 0,
            stockCalcValueAmericanMotors: 0,
            stockCalcValueJICase: 0,
            stockCalcValueGeneralMills: 0,
            stockCalcValueIntShoe: 0,
            stockCalcValueMaytag: 0,
            stockCalcValueWesternPubl: 0,
            stockCalcValueWoolwth: 0,

            //define calc stock owned
            alcoaCalcAmount: 0,
            americanMotorsCalcAmount: 0,
            jICaseCalcAmount: 0,
            generalMillsCalcAmount: 0,
            intShoeCalcAmount: 0,
            maytagCalcAmount: 0,
            westernPublCalcAmount: 0,
            woolwthCalcAmount: 0,

            //action bar states
            actionBarShareHoldersFactor: 1,
            dropDownButtonStockTitle: 'Stock',
            actionBarStockFactor: 0,

            dropDownButtonStockAddTitle: 'Stock',
            actionBarStockAddFactor: 0,
            actionBarStockAddInput: 0,

            dropDownButtonStockSubTitle: 'Stock',
            actionBarStockSubFactor: 0,
            actionBarStockSubInput: 0,

            dropDownButtonBuyStockTitle: 'Stock',
            actionBarBuyStockFactor: 0,
            actionBarBuyStockInput: 0,

            dropDownButtonSellStockTitle: 'Stock',
            actionBarSellStockFactor: 0,
            actionBarSellStockInput: 0,

            dropDownButtonSellBasePriceStockTitle: 'Stock',
            actionBarSellBasePriceFactor: 0,


            //wallet
            walletTotal: 0,
            walletAddInput: 0,
            walletSubInput: 0,

            // Collapse and expand UI sections
            actionExpanded: false,

            //alert states
            alertShowing: false,
            alertHead: "",
            alertMessage: "",

            //disable button
            buttonDisabledDividend: false,
        }
    }


    titleStyle = {
        fontSize: 15,
        backgroundColor: 'black',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    };
    totalStyle = {
        fontSize: 10,
        backgroundColor: 'black',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    };
    actionBarStyle = {
        fontSize: 15,
        backgroundColor: 'black',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
    };
    actionBarSubStyle = {
        fontSize: 10,
        backgroundColor: 'black',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    };
    walletBarStyle = {
        fontSize: 15,
        backgroundColor: 'black',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
    }
    alcoaStyle = {
        fontSize: 10,
        backgroundColor: '#be3620',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    };
    americanMotorsStyle = {
        fontSize: 10,
        backgroundColor: '#c9a521',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    };
    jICaseStyle = {
        fontSize: 10,
        backgroundColor: '#d4942c',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    };
    generalMillsStyle = {
        fontSize: 10,
        backgroundColor: '#358ac1',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    };
    intShoeStyle = {
        fontSize: 10,
        backgroundColor: '#b24075',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    };
    maytagStyle = {
        fontSize: 10,
        backgroundColor: '#3b7973',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    };
    westernPublishingStyle = {
        fontSize: 10,
        backgroundColor: '#81a04e',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    };
    whoolwrthStyle = {
        fontSize: 10,
        backgroundColor: '#ba4625',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    };

    //sets states from localstroage on first load
    //use the life cycle methods not useEffect due to this being a component class

    //componentDidMount is executed after the component is rendered.
    componentDidMount() {

        var localStorageStateDict1 = JSON.parse(window.localStorage.getItem('Stock_Market_Game_Calculator'))

        if (localStorageStateDict1 !== null) this.setState({
            stockLocation: localStorageStateDict1['dicstockLocation'],
            stockLocationColor: localStorageStateDict1['dicstockLocationColor'],
            stockValueAlcoa: localStorageStateDict1['dicstockValueAlcoa'],
            stockValueAmericanMotors: localStorageStateDict1['dicstockValueAmericanMotors'],
            stockValueJICase: localStorageStateDict1['dicstockValueJICase'],
            stockValueGeneralMills: localStorageStateDict1['dicstockValueGeneralMills'],
            stockValueIntShoe: localStorageStateDict1['dicstockValueIntShoe'],
            stockValueMaytag: localStorageStateDict1['dicstockValueMaytag'],
            stockValueWesternPubl: localStorageStateDict1['dicstockValueWesternPubl'],
            stockValueWoolwth: localStorageStateDict1['dicstockValueWoolwth'],
            alcoaAmount: localStorageStateDict1['dicalcoaAmount'],
            americanMotorsAmount: localStorageStateDict1['dicamericanMotorsAmount'],
            jICaseAmount: localStorageStateDict1['dicjICaseAmount'],
            generalMillsAmount: localStorageStateDict1['dicgeneralMillsAmount'],
            intShoeAmount: localStorageStateDict1['dicintShoeAmount'],
            maytagAmount: localStorageStateDict1['dicmaytagAmount'],
            westernPublAmount: localStorageStateDict1['dicwesternPublAmount'],
            woolwthAmount: localStorageStateDict1['dicwoolwthAmount'],
            total: localStorageStateDict1['dictotal'],
            brokerFee: localStorageStateDict1['dicbrokerFee'],
            stockCalcValueAlcoa: localStorageStateDict1['dicstockCalcValueAlcoa'],
            stockCalcValueAmericanMotors: localStorageStateDict1['dicstockCalcValueAmericanMotors'],
            stockCalcValueJICase: localStorageStateDict1['dicstockCalcValueJICase'],
            stockCalcValueGeneralMills: localStorageStateDict1['dicstockCalcValueGeneralMills'],
            stockCalcValueIntShoe: localStorageStateDict1['dicstockCalcValueIntShoe'],
            stockCalcValueMaytag: localStorageStateDict1['dicstockCalcValueMaytag'],
            stockCalcValueWesternPubl: localStorageStateDict1['dicstockCalcValueWesternPubl'],
            stockCalcValueWoolwth: localStorageStateDict1['dicstockCalcValueWoolwth'],
            alcoaCalcAmount: localStorageStateDict1['dicalcoaCalcAmount'],
            americanMotorsCalcAmount: localStorageStateDict1['dicamericanMotorsCalcAmount'],
            jICaseCalcAmount: localStorageStateDict1['dicjICaseCalcAmount'],
            generalMillsCalcAmount: localStorageStateDict1['dicgeneralMillsCalcAmount'],
            intShoeCalcAmount: localStorageStateDict1['dicintShoeCalcAmount'],
            maytagCalcAmount: localStorageStateDict1['dicmaytagCalcAmount'],
            westernPublCalcAmount: localStorageStateDict1['dicwesternPublCalcAmount'],
            woolwthCalcAmount: localStorageStateDict1['dicwoolwthCalcAmount'],
            actionBarShareHoldersFactor: localStorageStateDict1['dicactionBarShareHoldersFactor'],
            dropDownButtonStockTitle: localStorageStateDict1['dicdropDownButtonStockTitle'],
            actionBarStockFactor: localStorageStateDict1['dicactionBarStockFactor'],
            dropDownButtonStockAddTitle: localStorageStateDict1['dicdropDownButtonStockAddTitle'],
            actionBarStockAddFactor: localStorageStateDict1['dicactionBarStockAddFactor'],
            actionBarStockAddInput: localStorageStateDict1['dicactionBarStockAddInput'],
            dropDownButtonStockSubTitle: localStorageStateDict1['dicdropDownButtonStockSubTitle'],
            actionBarStockSubFactor: localStorageStateDict1['dicactionBarStockSubFactor'],
            actionBarStockSubInput: localStorageStateDict1['dicactionBarStockSubInput'],
            dropDownButtonBuyStockTitle: localStorageStateDict1['dicdropDownButtonBuyStockTitle'],
            actionBarBuyStockFactor: localStorageStateDict1['dicactionBarBuyStockFactor'],
            actionBarBuyStockInput: localStorageStateDict1['dicactionBarBuyStockInput'],
            dropDownButtonSellStockTitle: localStorageStateDict1['dicdropDownButtonSellStockTitle'],
            actionBarSellStockFactor: localStorageStateDict1['dicactionBarSellStockFactor'],
            actionBarSellStockInput: localStorageStateDict1['dicactionBarSellStockInput'],
            dropDownButtonSellBasePriceStockTitle: localStorageStateDict1['dicdropDownButtonSellBasePriceStockTitle'],
            actionBarSellBasePriceFactor: localStorageStateDict1['dicactionBarSellBasePriceFactor'],
            walletTotal: localStorageStateDict1['dicwalletTotal'],
            walletAddInput: localStorageStateDict1['dicwalletAddInput'],
            walletSubInput: localStorageStateDict1['dicwalletSubInput'],
        })

    }

    //componentDidUpdate is executed when the component is re-rendered.
    componentDidUpdate(prevProps, prevStates) {

        // turns all of the states to a dict for storage
        var localStorageStateDict = {
            'dicstockLocation': this.state.stockLocation,
            'dicstockLocationColor': this.state.stockLocationColor,
            'dicstockValueAlcoa': this.state.stockValueAlcoa,
            'dicstockValueAmericanMotors': this.state.stockValueAmericanMotors,
            'dicstockValueJICase': this.state.stockValueJICase,
            'dicstockValueGeneralMills': this.state.stockValueGeneralMills,
            'dicstockValueIntShoe': this.state.stockValueIntShoe,
            'dicstockValueMaytag': this.state.stockValueMaytag,
            'dicstockValueWesternPubl': this.state.stockValueWesternPubl,
            'dicstockValueWoolwth': this.state.stockValueWoolwth,
            'dicalcoaAmount': this.state.alcoaAmount,
            'dicamericanMotorsAmount': this.state.americanMotorsAmount,
            'dicjICaseAmount': this.state.jICaseAmount,
            'dicgeneralMillsAmount': this.state.generalMillsAmount,
            'dicintShoeAmount': this.state.intShoeAmount,
            'dicmaytagAmount': this.state.maytagAmount,
            'dicwesternPublAmount': this.state.westernPublAmount,
            'dicwoolwthAmount': this.state.woolwthAmount,
            'dictotal': this.state.total,
            'dicbrokerFee': this.state.brokerFee,
            'dicstockCalcValueAlcoa': this.state.stockCalcValueAlcoa,
            'dicstockCalcValueAmericanMotors': this.state.stockCalcValueAmericanMotors,
            'dicstockCalcValueJICase': this.state.stockCalcValueJICase,
            'dicstockCalcValueGeneralMills': this.state.stockCalcValueGeneralMills,
            'dicstockCalcValueIntShoe': this.state.stockCalcValueIntShoe,
            'dicstockCalcValueMaytag': this.state.stockCalcValueMaytag,
            'dicstockCalcValueWesternPubl': this.state.stockCalcValueWesternPubl,
            'dicstockCalcValueWoolwth': this.state.stockCalcValueWoolwth,
            'dicalcoaCalcAmount': this.state.alcoaCalcAmount,
            'dicamericanMotorsCalcAmount': this.state.americanMotorsCalcAmount,
            'dicjICaseCalcAmount': this.state.jICaseCalcAmount,
            'dicgeneralMillsCalcAmount': this.state.generalMillsCalcAmount,
            'dicintShoeCalcAmount': this.state.intShoeCalcAmount,
            'dicmaytagCalcAmount': this.state.maytagCalcAmount,
            'dicwesternPublCalcAmount': this.state.westernPublCalcAmount,
            'dicwoolwthCalcAmount': this.state.woolwthCalcAmount,
            'dicactionBarShareHoldersFactor': this.state.actionBarShareHoldersFactor,
            'dicdropDownButtonStockTitle': this.state.dropDownButtonStockTitle,
            'dicactionBarStockFactor': this.state.actionBarStockFactor,
            'dicdropDownButtonStockAddTitle': this.state.dropDownButtonStockAddTitle,
            'dicactionBarStockAddFactor': this.state.actionBarStockAddFactor,
            'dicactionBarStockAddInput': this.state.actionBarStockAddInput,
            'dicdropDownButtonStockSubTitle': this.state.dropDownButtonStockSubTitle,
            'dicactionBarStockSubFactor': this.state.actionBarStockSubFactor,
            'dicactionBarStockSubInput': this.state.actionBarStockSubInput,
            'dicdropDownButtonBuyStockTitle': this.state.dropDownButtonBuyStockTitle,
            'dicactionBarBuyStockFactor': this.state.actionBarBuyStockFactor,
            'dicactionBarBuyStockInput': this.state.actionBarBuyStockInput,
            'dicdropDownButtonSellStockTitle': this.state.dropDownButtonSellStockTitle,
            'dicactionBarSellStockFactor': this.state.actionBarSellStockFactor,
            'dicactionBarSellStockInput': this.state.actionBarSellStockInput,
            'dicdropDownButtonSellBasePriceStockTitle': this.state.dropDownButtonSellBasePriceStockTitle,
            'dicactionBarSellBasePriceFactor': this.state.actionBarSellBasePriceFactor,
            'dicwalletTotal': this.state.walletTotal,
            'dicwalletAddInput': this.state.walletAddInput,
            'dicwalletSubInput': this.state.walletSubInput
        }

        window.localStorage.setItem('Stock_Market_Game_Calculator', JSON.stringify(localStorageStateDict))

    }




    render() {

        //console.log("I am rendering now!" + this.props)
        return (
            <div style={{ backgroundColor: 'grey' }}>
                <div>
                    <h1 style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        Player Shares
                    </h1>
                </div>

                {this.state.alertShowing ? < Alert varient="info" >
                    <Alert.Heading>{this.state.alertHead}</Alert.Heading>
                    <p>{this.state.alertMessage}</p>
                </Alert > : <></>}

                <Table style={{ fontSize: 10 }} bordered hover size="sm">
                    <thead style={this.titleStyle} align='center'>
                        <tr>
                            <th>Stock</th>
                            <th>Current Price</th>
                            <th>Stock Owned</th>
                            <th>Stock Value</th>
                            <td><span className="m-1">Div/Broker Fee</span></td>
                            <td><span className="m-1">Pos Div/{"\n"}Total</span></td>
                        </tr>
                    </thead>
                    <tbody>
                        <Stockrow
                            style={this.alcoaStyle}
                            name="Alcoa (Broken)"
                            price={this.formatAlcoaPrice()}
                            amount={this.state.alcoaAmount}
                            buttonToggle={this.state.buttonDisabledDividend}
                            onChange={(e) => this.setState({ alcoaAmount: e.target.value })}
                            onClick={() => this.state.buttonDisabledDividend ? console.log("Dividend button is disabled. buttonDisabledDividend: " + this.state.buttonDisabledDividend)
                                : this.dividendAlert("Dividend Recived", "Alcoa has paid you", this.state.alcoaAmount, 4)}
                            posibleDiv={(parseInt(this.state.alcoaAmount) * 4)}
                        />
                        <Stockrow
                            style={this.americanMotorsStyle}
                            name="Am. Motors."
                            price={this.formatAmericanMotorsaPrice()}
                            amount={this.state.americanMotorsAmount}
                            buttonToggle={this.state.buttonDisabledDividend}
                            onChange={(e) => this.setState({ americanMotorsAmount: e.target.value })}
                            onClick={() => this.state.buttonDisabledDividend ? console.log("Dividend button is disabled. buttonDisabledDividend: " + this.state.buttonDisabledDividend)
                                : this.dividendAlert("Dividend Recived", "American Motors has paid you", this.state.americanMotorsAmount, 3)}
                            posibleDiv={(parseInt(this.state.americanMotorsAmount) * 3)}
                        />
                        <Stockrow
                            style={this.jICaseStyle}
                            name="J. I. Case"
                            price={this.formatJICasePrice()}
                            amount={this.state.jICaseAmount}
                            buttonToggle={this.state.buttonDisabledDividend}
                            onChange={(e) => this.setState({ jICaseAmount: e.target.value })}
                            onClick={() => this.state.buttonDisabledDividend ? console.log("Dividend button is disabled. buttonDisabledDividend: " + this.state.buttonDisabledDividend)
                                : this.dividendAlert("Dividend Recived", "J. I. Case has paid you", this.state.jICaseAmount, 2)}
                            posibleDiv={(parseInt(this.state.jICaseAmount) * 2)}
                        />
                        <Stockrow
                            style={this.generalMillsStyle}
                            name="General Mills"
                            price={this.formatGeneralMillsPrice()}
                            amount={this.state.generalMillsAmount}
                            buttonToggle={this.state.buttonDisabledDividend}
                            onChange={(e) => this.setState({ generalMillsAmount: e.target.value })}
                            onClick={() => this.state.buttonDisabledDividend ? console.log("Dividend button is disabled. buttonDisabledDividend: " + this.state.buttonDisabledDividend)
                                : this.dividendAlert("Dividend Recived", "General Mills has paid you", this.state.generalMillsAmount, 1)}
                            posibleDiv={(parseInt(this.state.generalMillsAmount) * 1)}
                        />
                        <Stockrow
                            style={this.intShoeStyle}
                            name="Int. Shoe"
                            price={this.formatIntShoesPrice()}
                            amount={this.state.intShoeAmount}
                            buttonToggle={this.state.buttonDisabledDividend}
                            onChange={(e) => this.setState({ intShoeAmount: e.target.value })}
                            onClick={() => this.state.buttonDisabledDividend ? console.log("Dividend button is disabled. buttonDisabledDividend: " + this.state.buttonDisabledDividend)
                                : this.dividendAlert("Dividend Recived", "Int. Shoe has paid you", this.state.intShoeAmount, 1)}
                            posibleDiv={(parseInt(this.state.intShoeAmount) * 1)}
                        />
                        <Stockrow
                            style={this.maytagStyle}
                            name="Maytag"
                            price={this.formatMayTagPrice()}
                            amount={this.state.maytagAmount}
                            buttonToggle={this.state.buttonDisabledDividend}
                            onChange={(e) => this.setState({ maytagAmount: e.target.value })}
                            onClick={() => this.state.buttonDisabledDividend ? console.log("Dividend button is disabled. buttonDisabledDividend: " + this.state.buttonDisabledDividend)
                                : this.dividendAlert("Dividend Recived", "Maytag has paid you", this.state.maytagAmount, 2)}
                            posibleDiv={(parseInt(this.state.maytagAmount) * 2)}
                        />
                        <Stockrow
                            style={this.westernPublishingStyle}
                            name="Western Publ."
                            price={this.formatWesternPublishingPrice()}
                            amount={this.state.westernPublAmount}
                            buttonToggle={this.state.buttonDisabledDividend}
                            onChange={(e) => this.setState({ westernPublAmount: e.target.value })}
                            onClick={() => this.state.buttonDisabledDividend ? console.log("Dividend button is disabled. buttonDisabledDividend: " + this.state.buttonDisabledDividend)
                                : this.dividendAlert("Dividend Recived", "Western Publ. has paid you", this.state.westernPublAmount, 3)}
                            posibleDiv={(parseInt(this.state.westernPublAmount) * 3)}
                        />
                        <Stockrow
                            style={this.whoolwrthStyle}
                            name="Woolworth"
                            price={this.formatWoolWrthPrice()}
                            amount={this.state.woolwthAmount}
                            buttonToggle={this.state.buttonDisabledDividend}
                            onChange={(e) => this.setState({ woolwthAmount: e.target.value })}
                            onClick={() => this.state.buttonDisabledDividend ? console.log("Dividend button is disabled. buttonDisabledDividend: " + this.state.buttonDisabledDividend)
                                : this.dividendAlert("Dividend Recived", "Woolworth has paid you", this.state.woolwthAmount, 4)}
                            posibleDiv={(parseInt(this.state.woolwthAmount) * 4)}
                        />
                        <tr style={this.totalStyle}>
                            <td colspan='4'></td>
                            <td className="m-1" align='center' valign='center'><span>${
                                this.currencyFormat(
                                    (this.state.alcoaAmount * 10) +
                                    (this.state.americanMotorsAmount * 10) +
                                    (this.state.jICaseAmount * 10) +
                                    (this.state.generalMillsAmount * 10) +
                                    (this.state.intShoeAmount * 10) +
                                    (this.state.maytagAmount * 10) +
                                    (this.state.westernPublAmount * 10) +
                                    (this.state.woolwthAmount * 10)
                                )
                            }</span></td>
                            <td className="m-1" align='center' valign='center'><span>${
                                this.currencyFormat(
                                    (this.state.alcoaAmount * this.formatAlcoaPrice()) +
                                    (this.state.americanMotorsAmount * this.formatAmericanMotorsaPrice()) +
                                    (this.state.jICaseAmount * this.formatJICasePrice()) +
                                    (this.state.generalMillsAmount * this.formatGeneralMillsPrice()) +
                                    (this.state.intShoeAmount * this.formatIntShoesPrice()) +
                                    (this.state.maytagAmount * this.formatMayTagPrice()) +
                                    (this.state.westernPublAmount * this.formatWesternPublishingPrice()) +
                                    (this.state.woolwthAmount * this.formatWoolWrthPrice())
                                )
                            }</span></td>
                        </tr>
                        <tr style={this.totalStyle} align='center'>
                            <td colspan='4'></td>
                            <td>Wallet: </td>
                            <td><span>${this.currencyFormat(this.state.walletTotal)}</span></td>
                        </tr>
                        <tr style={this.totalStyle} align='center'>
                            <td colspan='4'></td>
                            <td>Networth: </td>
                            <td><span>${
                                this.currencyFormat(
                                    parseInt(this.state.walletTotal) +
                                    (this.state.alcoaAmount * this.formatAlcoaPrice()) +
                                    (this.state.americanMotorsAmount * this.formatAmericanMotorsaPrice()) +
                                    (this.state.jICaseAmount * this.formatJICasePrice()) +
                                    (this.state.generalMillsAmount * this.formatGeneralMillsPrice()) +
                                    (this.state.intShoeAmount * this.formatIntShoesPrice()) +
                                    (this.state.maytagAmount * this.formatMayTagPrice()) +
                                    (this.state.westernPublAmount * this.formatWesternPublishingPrice()) +
                                    (this.state.woolwthAmount * this.formatWoolWrthPrice())
                                )
                            }
                            </span></td>
                        </tr>
                    </tbody>
                </Table>

                <Table /*Action Bar*/>
                    <thead align='center' valign='center'>
                        <tr onClick={() => this.setState({ actionExpanded: !this.state.actionExpanded })}>
                            <th
                                style={this.actionBarStyle}
                                colspan='3'
                                className='square border'
                            >
                                Action Bar {this.state.actionExpanded ? <ChevronDoubleUp /> : <ChevronDoubleDown />}
                            </th>
                        </tr>
                    </thead>
                    {this.state.actionExpanded ?
                        <tbody>
                            <tr>
                                <td style={{ backgroundColor: 'black', color: 'white', width: '12.5%' }} align='center' colspan='1' className="square border-start">
                                    <DropDownShareHolders
                                        name={this.state.actionBarShareHoldersFactor == 1 ? "1 for 1" : this.state.actionBarShareHoldersFactor == 2 ? "2 for 1" : "3 for 1"}
                                        onClick1={() => this.setState({ actionBarShareHoldersFactor: 1 })}
                                        onClick2={() => this.setState({ actionBarShareHoldersFactor: 2 })}
                                        onClick3={() => this.setState({ actionBarShareHoldersFactor: 3 })}
                                    />
                                </td>
                                <td style={{ backgroundColor: 'black', color: 'white', }} align='center' colspan='1' >
                                    <DropDownStocks
                                        name={this.state.dropDownButtonStockTitle}
                                        onClick1={() => this.setState({
                                            dropDownButtonStockTitle: 'Alcoa',
                                            actionBarStockFactor: 1,
                                        })}
                                        onClick2={() => this.setState({
                                            dropDownButtonStockTitle: 'American Motors',
                                            actionBarStockFactor: 2,
                                        })}
                                        onClick3={() => this.setState({
                                            dropDownButtonStockTitle: 'J. I. Case',
                                            actionBarStockFactor: 3,
                                        })}
                                        onClick4={() => this.setState({
                                            dropDownButtonStockTitle: 'General Mills',
                                            actionBarStockFactor: 4,
                                        })}
                                        onClick5={() => this.setState({
                                            dropDownButtonStockTitle: 'Int. Shoe',
                                            actionBarStockFactor: 5,
                                        })}
                                        onClick6={() => this.setState({
                                            dropDownButtonStockTitle: 'Maytag',
                                            actionBarStockFactor: 6,
                                        })}
                                        onClick7={() => this.setState({
                                            dropDownButtonStockTitle: 'Western Publ.',
                                            actionBarStockFactor: 7,
                                        })}
                                        onClick8={() => this.setState({
                                            dropDownButtonStockTitle: 'Woolworth',
                                            actionBarStockFactor: 8,
                                        })}
                                    />
                                </td>
                                <td style={{ backgroundColor: 'black', color: 'white', }} colspan='1' className="square border-end">
                                    <button
                                        onClick={() => this.handleActionBarStockApplyButton()}
                                        className="m-1"
                                        style={{ backgroundColor: '#0d6efd', color: 'white', height: '100%' }}
                                    >
                                        <b>Apply</b>

                                    </button>
                                </td>
                            </tr>

                            <tr style={{ backgroundColor: 'black', color: 'white', }} align='center'>
                                <td colspan='3' style={{ backgroundColor: 'black', color: 'green', width: '50%', fontSize: 15 }} className="square border-start border-end">
                                    Add Stock
                                </td>
                            </tr>
                            <tr style={{ backgroundColor: 'black', color: 'white', fontSize: 10 }} align='center'>
                                <td style={{ backgroundColor: 'black', color: 'white', }} align='center' colspan='1' className="square border-start">
                                    <DropDownStocks
                                        name={this.state.dropDownButtonStockAddTitle}
                                        onClick1={() => this.setState({
                                            dropDownButtonStockAddTitle: 'Alcoa',
                                            actionBarStockAddFactor: 1,
                                        })}
                                        onClick2={() => this.setState({
                                            dropDownButtonStockAddTitle: 'American Motors',
                                            actionBarStockAddFactor: 2,
                                        })}
                                        onClick3={() => this.setState({
                                            dropDownButtonStockAddTitle: 'J. I. Case',
                                            actionBarStockAddFactor: 3,
                                        })}
                                        onClick4={() => this.setState({
                                            dropDownButtonStockAddTitle: 'General Mills',
                                            actionBarStockAddFactor: 4,
                                        })}
                                        onClick5={() => this.setState({
                                            dropDownButtonStockAddTitle: 'Int. Shoe',
                                            actionBarStockAddFactor: 5,
                                        })}
                                        onClick6={() => this.setState({
                                            dropDownButtonStockAddTitle: 'Maytag',
                                            actionBarStockAddFactor: 6,
                                        })}
                                        onClick7={() => this.setState({
                                            dropDownButtonStockAddTitle: 'Western Publ.',
                                            actionBarStockAddFactor: 7,
                                        })}
                                        onClick8={() => this.setState({
                                            dropDownButtonStockAddTitle: 'Woolworth',
                                            actionBarStockAddFactor: 8,
                                        })}
                                    />
                                </td>
                                <td align='center'><input
                                    inputProps={{ inputMode: 'numeric' }}
                                    pattern="[0-9]*"
                                    style={{ width: "100%" }}
                                    type="number"
                                    placeholder={this.state.actionBarStockAddInput}
                                    onChange={(e) => this.setState({ actionBarStockAddInput: e.target.value })}
                                    onBlur={(event) => event.target.value = null}
                                />
                                </td>
                                <td colspan='1' className="square border-end" align='center'>
                                    <button
                                        onClick={() => this.handleActionBarApplyAddButton()}
                                        className="m-1"
                                        style={{ backgroundColor: '#0d6efd', color: 'white', height: '100%' }}
                                    >
                                        <b>Apply</b>

                                    </button>
                                </td>
                            </tr>

                            <tr style={{ backgroundColor: 'black', color: 'white', }} align='center'>
                                <td colspan='3' style={{ backgroundColor: 'black', color: 'red', width: '50%', fontSize: 15 }} className="square border-start border-end">
                                    Sub. Stock
                                </td>
                            </tr>
                            <tr style={{ backgroundColor: 'black', color: 'white', fontSize: 10 }} align='center'>
                                <td style={{ backgroundColor: 'black', color: 'white', }} align='center' colspan='1' className="square border-start">
                                    <DropDownStocks
                                        name={this.state.dropDownButtonStockSubTitle}
                                        onClick1={() => this.setState({
                                            dropDownButtonStockSubTitle: 'Alcoa',
                                            actionBarStockSubFactor: 1,
                                        })}
                                        onClick2={() => this.setState({
                                            dropDownButtonStockSubTitle: 'American Motors',
                                            actionBarStockSubFactor: 2,
                                        })}
                                        onClick3={() => this.setState({
                                            dropDownButtonStockSubTitle: 'J. I. Case',
                                            actionBarStockSubFactor: 3,
                                        })}
                                        onClick4={() => this.setState({
                                            dropDownButtonStockSubTitle: 'General Mills',
                                            actionBarStockSubFactor: 4,
                                        })}
                                        onClick5={() => this.setState({
                                            dropDownButtonStockSubTitle: 'Int. Shoe',
                                            actionBarStockSubFactor: 5,
                                        })}
                                        onClick6={() => this.setState({
                                            dropDownButtonStockSubTitle: 'Maytag',
                                            actionBarStockSubFactor: 6,
                                        })}
                                        onClick7={() => this.setState({
                                            dropDownButtonStockSubTitle: 'Western Publ.',
                                            actionBarStockSubFactor: 7,
                                        })}
                                        onClick8={() => this.setState({
                                            dropDownButtonStockSubTitle: 'Woolworth',
                                            actionBarStockSubFactor: 8,
                                        })}
                                    />
                                </td>
                                <td align='center'><input
                                    inputProps={{ inputMode: 'numeric' }}
                                    pattern="[0-9]*"
                                    style={{ width: "100%" }}
                                    type="number"
                                    placeholder={this.state.actionBarStockSubInput}
                                    onChange={(e) => this.setState({ actionBarStockSubInput: e.target.value })}
                                    onBlur={(event) => event.target.value = null}
                                />
                                </td>
                                <td colspan='1' className="square border-end" align='center'>
                                    <button
                                        onClick={() => this.handleActionBarApplySubButton()}
                                        className="m-1"
                                        style={{ backgroundColor: '#0d6efd', color: 'white', height: '100%' }}
                                    >
                                        <b>Apply</b>

                                    </button>
                                </td>
                            </tr>

                            <tr style={{ backgroundColor: 'black', color: 'white', }} align='center'>
                                <td colspan='3' style={{ backgroundColor: 'black', color: 'green', width: '50%', fontSize: 15 }} className="square border-start border-end">
                                    Buy Stock
                                </td>
                            </tr>
                            <tr style={{ backgroundColor: 'black', color: 'white', fontSize: 10 }} align='center'>
                                <td style={{ backgroundColor: 'black', color: 'white', }} align='center' colspan='1' className="square border-start">
                                    <DropDownStocks
                                        name={this.state.dropDownButtonBuyStockTitle}
                                        onClick1={() => this.setState({
                                            dropDownButtonBuyStockTitle: 'Alcoa',
                                            actionBarBuyStockFactor: 1,
                                        })}
                                        onClick2={() => this.setState({
                                            dropDownButtonBuyStockTitle: 'American Motors',
                                            actionBarBuyStockFactor: 2,
                                        })}
                                        onClick3={() => this.setState({
                                            dropDownButtonBuyStockTitle: 'J. I. Case',
                                            actionBarBuyStockFactor: 3,
                                        })}
                                        onClick4={() => this.setState({
                                            dropDownButtonBuyStockTitle: 'General Mills',
                                            actionBarBuyStockFactor: 4,
                                        })}
                                        onClick5={() => this.setState({
                                            dropDownButtonBuyStockTitle: 'Int. Shoe',
                                            actionBarBuyStockFactor: 5,
                                        })}
                                        onClick6={() => this.setState({
                                            dropDownButtonBuyStockTitle: 'Maytag',
                                            actionBarBuyStockFactor: 6,
                                        })}
                                        onClick7={() => this.setState({
                                            dropDownButtonBuyStockTitle: 'Western Publ.',
                                            actionBarBuyStockFactor: 7,
                                        })}
                                        onClick8={() => this.setState({
                                            dropDownButtonBuyStockTitle: 'Woolworth',
                                            actionBarBuyStockFactor: 8,
                                        })}
                                    />
                                </td>
                                <td align='center'><input
                                    inputProps={{ inputMode: 'numeric' }}
                                    pattern="[0-9]*"
                                    style={{ width: "100%" }}
                                    type="number"
                                    placeholder={this.state.actionBarBuyStockInput}
                                    onChange={(e) => this.setState({ actionBarBuyStockInput: e.target.value })}
                                    onBlur={(event) => event.target.value = null}
                                />
                                </td>
                                <td colspan='1' className="square border-end" align='center'>
                                    <button
                                        onClick={() => this.handleActionBarApplyBuyButton()}
                                        className="m-1"
                                        style={{ backgroundColor: '#0d6efd', color: 'white', height: '100%' }}
                                    >
                                        <b>Apply</b>

                                    </button>
                                </td>
                            </tr>

                            <tr style={{ backgroundColor: 'black', color: 'white', }} align='center'>
                                <td colspan='3' style={{ backgroundColor: 'black', color: 'red', width: '50%', fontSize: 15 }} className="square border-start border-end">
                                    Sell Stock
                                </td>
                            </tr>
                            <tr style={{ backgroundColor: 'black', color: 'white', fontSize: 10 }} align='center'>
                                <td style={{ backgroundColor: 'black', color: 'white', }} align='center' colspan='1' className="square border-start">
                                    <DropDownStocks
                                        name={this.state.dropDownButtonSellStockTitle}
                                        onClick1={() => this.setState({
                                            dropDownButtonSellStockTitle: 'Alcoa',
                                            actionBarSellStockFactor: 1,
                                        })}
                                        onClick2={() => this.setState({
                                            dropDownButtonSellStockTitle: 'American Motors',
                                            actionBarSellStockFactor: 2,
                                        })}
                                        onClick3={() => this.setState({
                                            dropDownButtonSellStockTitle: 'J. I. Case',
                                            actionBarSellStockFactor: 3,
                                        })}
                                        onClick4={() => this.setState({
                                            dropDownButtonSellStockTitle: 'General Mills',
                                            actionBarSellStockFactor: 4,
                                        })}
                                        onClick5={() => this.setState({
                                            dropDownButtonSellStockTitle: 'Int. Shoe',
                                            actionBarSellStockFactor: 5,
                                        })}
                                        onClick6={() => this.setState({
                                            dropDownButtonSellStockTitle: 'Maytag',
                                            actionBarSellStockFactor: 6,
                                        })}
                                        onClick7={() => this.setState({
                                            dropDownButtonSellStockTitle: 'Western Publ.',
                                            actionBarSellStockFactor: 7,
                                        })}
                                        onClick8={() => this.setState({
                                            dropDownButtonSellStockTitle: 'Woolworth',
                                            actionBarSellStockFactor: 8,
                                        })}
                                    />
                                </td>
                                <td align='center'><input
                                    inputProps={{ inputMode: 'numeric' }}
                                    pattern="[0-9]*"
                                    style={{ width: "100%" }}
                                    type="number"
                                    placeholder={this.state.actionBarSellStockInput}
                                    onChange={(e) => this.setState({ actionBarSellStockInput: e.target.value })}
                                    onBlur={(event) => event.target.value = null}
                                />
                                </td>
                                <td colspan='1' className="square border-end" align='center'>
                                    <button
                                        onClick={() => this.handleActionBarApplySellButton()}
                                        className="m-1"
                                        style={{ backgroundColor: '#0d6efd', color: 'white', height: '100%' }}
                                    >
                                        <b>Apply</b>

                                    </button>
                                </td>
                            </tr>

                            <tr style={{ backgroundColor: 'black', color: 'white', }} align='center'>
                                <td colspan='3' style={{ backgroundColor: 'black', color: 'red', width: '50%', fontSize: 15 }} className="square border-start border-end">
                                    Sell At Base Price
                                </td>
                            </tr>
                            <tr style={{ backgroundColor: 'black', color: 'white', fontSize: 10 }} align='center'>
                                <td style={{ backgroundColor: 'black', color: 'white', }} align='center' colspan='1' className="square border-start">
                                    <DropDownStocks
                                        name={this.state.dropDownButtonSellBasePriceStockTitle}
                                        onClick1={() => this.setState({
                                            dropDownButtonSellBasePriceStockTitle: 'Alcoa',
                                            actionBarSellBasePriceFactor: 1,
                                        })}
                                        onClick2={() => this.setState({
                                            dropDownButtonSellBasePriceStockTitle: 'American Motors',
                                            actionBarSellBasePriceFactor: 2,
                                        })}
                                        onClick3={() => this.setState({
                                            dropDownButtonSellBasePriceStockTitle: 'J. I. Case',
                                            actionBarSellBasePriceFactor: 3,
                                        })}
                                        onClick4={() => this.setState({
                                            dropDownButtonSellBasePriceStockTitle: 'General Mills',
                                            actionBarSellBasePriceFactor: 4,
                                        })}
                                        onClick5={() => this.setState({
                                            dropDownButtonSellBasePriceStockTitle: 'Int. Shoe',
                                            actionBarSellBasePriceFactor: 5,
                                        })}
                                        onClick6={() => this.setState({
                                            dropDownButtonSellBasePriceStockTitle: 'Maytag',
                                            actionBarSellBasePriceFactor: 6,
                                        })}
                                        onClick7={() => this.setState({
                                            dropDownButtonSellBasePriceStockTitle: 'Western Publ.',
                                            actionBarSellBasePriceFactor: 7,
                                        })}
                                        onClick8={() => this.setState({
                                            dropDownButtonSellBasePriceStockTitle: 'Woolworth',
                                            actionBarSellBasePriceFactor: 8,
                                        })}
                                    />
                                </td>
                                <td colspan='2' className="square border-end" align='center'>
                                    <button
                                        onClick={() => this.handleActionBarSellBasePriceButton()}
                                        className="m-1"
                                        style={{ backgroundColor: '#0d6efd', color: 'white', height: '100%' }}
                                    >
                                        <b>Apply</b>

                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        : <tbody></tbody>}
                </Table>

                <div style={{
                    backgroundColor: 'black',
                }}>
                    <hr />
                    <h1 style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                    }}>
                        Stock Controls
                    </h1>
                    <p style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                    }}>
                        Stock Location: &nbsp; <span
                            style={{
                                color: this.state.stockLocationColor,
                            }}
                        >
                            {this.state.stockLocation}
                        </span>
                    </p>
                </div>

                <Table /*Stock Control*/ style={{ fontSize: 10 }} striped bordered hover size="sm">
                    <thead style={this.titleStyle} align='center'>
                        <tr>
                            <th>
                                <button
                                    onClick={() => this.handleStockPriceIncrement(5)}
                                    className="m-1"
                                    style={{ backgroundColor: 'green', color: 'white' }}
                                >
                                    Up 20
                                </button>
                            </th>
                            <th>
                                <button
                                    onClick={() => this.handleStockPriceIncrement(4)}
                                    className="m-1"
                                    style={{ backgroundColor: 'green', color: 'white' }}
                                >
                                    Up 5
                                </button>
                            </th>
                            <th>
                                <button
                                    onClick={() => this.handleStockPriceIncrement(3)}
                                    className="m-1"
                                    style={{ backgroundColor: 'green', color: 'white' }}
                                >
                                    Up 4
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody style={this.titleStyle} align='center'>
                        <tr>
                            <th>
                                <button
                                    onClick={() => this.handleStockPriceIncrement(2)}
                                    className="m-1"
                                    style={{ backgroundColor: 'green', color: 'white' }}
                                >
                                    Up 3
                                </button>
                            </th>
                            <th>
                                <button
                                    onClick={() => this.handleStockPriceIncrement(1)}
                                    className="m-1"
                                    style={{ backgroundColor: 'green', color: 'white' }}
                                >
                                    Up 2
                                </button>
                            </th>
                            <th>
                                <button
                                    onClick={() => this.handleStockPriceIncrement(0)}
                                    className="m-1"
                                    style={{ backgroundColor: 'green', color: 'white' }}
                                >
                                    Up&nbsp; 1
                                </button>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <button
                                    onClick={() => this.handleStockPriceIncrement(11)}
                                    className="m-1"
                                    style={{ backgroundColor: 'red', color: 'white' }}
                                >
                                    Dwn 20
                                </button>
                            </th>
                            <th>
                                <button
                                    onClick={() => this.handleStockPriceIncrement(10)}
                                    className="m-1"
                                    style={{ backgroundColor: 'red', color: 'white' }}
                                >
                                    Dwn 5
                                </button>
                            </th>
                            <th>
                                <button
                                    onClick={() => this.handleStockPriceIncrement(9)}
                                    className="m-1"
                                    style={{ backgroundColor: 'red', color: 'white' }}
                                >
                                    Dwn 4
                                </button>
                            </th>

                        </tr>

                        <tr>
                            <th>
                                <button
                                    onClick={() => this.handleStockPriceIncrement(8)}
                                    className="m-1"
                                    style={{ backgroundColor: 'red', color: 'white' }}
                                >
                                    Dwn 3
                                </button>
                            </th>
                            <th>
                                <button
                                    onClick={() => this.handleStockPriceIncrement(7)}
                                    className="m-1"
                                    style={{ backgroundColor: 'red', color: 'white' }}
                                >
                                    Dwn 2
                                </button>
                            </th>
                            <th>
                                <button
                                    onClick={() => this.handleStockPriceIncrement(6)}
                                    className="m-1"
                                    style={{ backgroundColor: 'red', color: 'white' }}
                                >
                                    Dwn 1
                                </button>
                            </th>
                        </tr>
                    </tbody>
                </Table>

                <Table /*Wallet Table*/>
                    <thead align='center' valign='center'>
                        <tr>
                            <th
                                colspan='4'
                                style={this.walletBarStyle}
                                className='square border'
                            >
                                Wallet
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '30%', backgroundColor: 'black', color: 'white' }} align='center' colspan='4' className="square border-start border-end">
                                <span>${this.currencyFormat(this.state.walletTotal)}</span>
                            </td>
                        </tr>
                        <tr style={{ backgroundColor: 'black', color: 'white', }} align='center' className="square border-start">
                            <td colspan='2' className="square border-end">
                                Add Funds
                            </td>
                            <td colspan='2' className=" border-end">
                                Sub. Funds
                            </td>
                        </tr>
                        <tr style={{ backgroundColor: 'black', color: 'white', }} align='center'>
                            <td align='center' className="square border-start"><input
                                inputProps={{ inputMode: 'numeric' }}
                                pattern="[0-9]*"
                                style={{ width: "100%" }}
                                type="number"
                                placeholder={this.state.walletAddInput}
                                onChange={(e) => this.setState({ walletAddInput: e.target.value })}
                                onBlur={(event) => event.target.value = null}
                            />
                            </td>
                            <td colspan='1' className="square border-end" align='center'>
                                <button
                                    onClick={() => this.handleApplyButtonAddFunds()}
                                    className="m-1"
                                    style={{ backgroundColor: '#0d6efd', color: 'white', height: '100%' }}
                                >
                                    <b>Apply</b>

                                </button>
                            </td>
                            <td align='center'><input
                                inputProps={{ inputMode: 'numeric' }}
                                pattern="[0-9]*"
                                style={{ width: "100%" }}
                                type="number"
                                placeholder={this.state.walletSubInput}
                                onChange={(e) => this.setState({ walletSubInput: e.target.value })}
                                onBlur={(event) => event.target.value = null}
                            />
                            </td>
                            <td colspan='1' className="square border-end" align='center' className=" border-end">
                                <button
                                    onClick={() => this.handleApplyButtonSubFunds()}
                                    className="m-1"
                                    style={{ backgroundColor: '#0d6efd', color: 'white', height: '100%' }}
                                >
                                    <b>Apply</b>

                                </button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <div>
                    <hr />
                    <h1 style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        Buy Calculator
                    </h1>
                    <i style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        Warning - This is not your actual stock!
                    </i>
                    <p></p>
                </div>

                <Table  /*Buy Calculator*/ style={{ fontSize: 10 }} bordered hover responsive size="sm">
                    <thead style={this.titleStyle} align='center'>
                        <tr>
                            <th>Stock</th>
                            <th>Current Price</th>
                            <th>Stock Owned</th>
                            <th>Stock Value</th>
                            <td><span className="m-1">Total</span></td>
                        </tr>
                    </thead>
                    <tbody>
                        <StockrowCalc
                            style={this.alcoaStyle}
                            name="Alcoa"
                            price={this.formatAlcoaPrice()}
                            amount={this.state.alcoaCalcAmount}
                            onChange={(e) => this.setState({ alcoaCalcAmount: e.target.value })}
                        />
                        <StockrowCalc
                            style={this.americanMotorsStyle}
                            name="Am. Motors."
                            price={this.formatAmericanMotorsaPrice()}
                            amount={this.state.americanMotorsCalcAmount}
                            onChange={(e) => this.setState({ americanMotorsCalcAmount: e.target.value })}
                        />
                        <StockrowCalc
                            style={this.jICaseStyle}
                            name="J. I. Case"
                            price={this.formatJICasePrice()}
                            amount={this.state.jICaseCalcAmount}
                            onChange={(e) => this.setState({ jICaseCalcAmount: e.target.value })}
                        />
                        <StockrowCalc
                            style={this.generalMillsStyle}
                            name="General Mills"
                            price={this.formatGeneralMillsPrice()}
                            amount={this.state.generalMillsCalcAmount}
                            onChange={(e) => this.setState({ generalMillsCalcAmount: e.target.value })}
                        />
                        <StockrowCalc
                            style={this.intShoeStyle}
                            name="Int. Shoe"
                            price={this.formatIntShoesPrice()}
                            amount={this.state.intShoeCalcAmount}
                            onChange={(e) => this.setState({ intShoeCalcAmount: e.target.value })}
                        />
                        <StockrowCalc
                            style={this.maytagStyle}
                            name="Maytag"
                            price={this.formatMayTagPrice()}
                            amount={this.state.maytagCalcAmount}
                            onChange={(e) => this.setState({ maytagCalcAmount: e.target.value })}
                        />
                        <StockrowCalc
                            style={this.westernPublishingStyle}
                            name="Western Publ."
                            price={this.formatWesternPublishingPrice()}
                            amount={this.state.westernPublCalcAmount}
                            onChange={(e) => this.setState({ westernPublCalcAmount: e.target.value })}
                        />
                        <StockrowCalc
                            style={this.whoolwrthStyle}
                            name="Whoolworth"
                            price={this.formatWoolWrthPrice()}
                            amount={this.state.woolwthCalcAmount}
                            onChange={(e) => this.setState({ woolwthCalcAmount: e.target.value })}
                        />
                        <tr style={this.totalStyle}>
                            <td className="m-1"><span></span></td>
                            <td className="m-1"><span></span></td>
                            <td className="m-1" align='center'>
                                <button
                                    onClick={() => this.handleClearButtonCalc()}
                                    className="m-1"
                                    style={{ backgroundColor: 'red', color: 'white' }}
                                >
                                    <b>Clear</b>
                                </button>
                            </td>
                            <td className="m-1"><span></span></td>
                            <td className="m-1" align='center'><span>${
                                (this.state.alcoaCalcAmount * this.formatAlcoaPrice()) +
                                (this.state.americanMotorsCalcAmount * this.formatAmericanMotorsaPrice()) +
                                (this.state.jICaseCalcAmount * this.formatJICasePrice()) +
                                (this.state.generalMillsCalcAmount * this.formatGeneralMillsPrice()) +
                                (this.state.intShoeCalcAmount * this.formatIntShoesPrice()) +
                                (this.state.maytagCalcAmount * this.formatMayTagPrice()) +
                                (this.state.westernPublCalcAmount * this.formatWesternPublishingPrice()) +
                                (this.state.woolwthCalcAmount * this.formatWoolWrthPrice())
                            }</span></td>
                        </tr>
                    </tbody>
                </Table>

                <div><button
                    onClick={() => this.onShowClearConfim()}
                    className="m-1"
                    style={{ backgroundColor: 'green', color: 'white' }}
                >
                    Reset Data
                </button>
                    <span>(Clears LocalStorage)</span>
                </div>

                <div>
                    <p style={{
                        display: 'flex',
                        alignItems: 'left',
                        justifyContent: 'left',
                    }}>

                    </p>
                    <footer style={{
                        display: 'flex',
                        alignItems: 'left',
                        justifyContent: 'left',
                    }}>
                        &copy; {current.getFullYear()} &nbsp; <em></em>  Designed and Created by: Benjamin Brown
                    </footer>
                </div>
            </div >
        );
    }
    //some style funcitons

    stockLocationColorDecider() {

        if (this.state.stockLocation > 0) {

            this.setState({ stockLocationColor: "green" })

        } else if (this.state.stockLocation === 0) {

            this.setState({ stockLocationColor: "white" })

        } else if (this.state.stockLocation < 0) {

            this.setState({ stockLocationColor: "red" })

        }

    }

    //alert funcitons for the players shares table

    dividendAlert(heading, message, stockAmount, divAmount) {
        let dividend = (parseInt(stockAmount) * divAmount)
        {
            window.confirm(message + " $" + this.currencyFormat(dividend) + ".")
            /*
            this.setState({
                alertShowing: true,
                alertHead: heading,
                alertMessage: message + " $" + this.currencyFormat(dividend) + ".",
                walletTotal: (parseInt(this.state.walletTotal) + dividend),
            })
            */

            this.setState({
                buttonDisabledDividend: true,
                walletTotal: (parseInt(this.state.walletTotal) + dividend),
            })

            setTimeout(() => this.setState({ buttonDisabledDividend: false }), 5000)
        }
    }

    buyAlert(heading, stockAmount, price, stock) {
        let buyTotal = (parseInt(stockAmount) * price)
        console.log(heading, stockAmount, price, stock, buyTotal)
        window.confirm("You bought " + stockAmount + " shares of " + stock + " for $" + this.currencyFormat(buyTotal) + ".")
        /*
        this.setState({
            alertShowing: true,
            alertHead: heading,
            // You bought ## shares of alcoa for $##.
            alertMessage: "You bought " + stockAmount + " shares of " + stock + " for $" + this.currencyFormat(buyTotal) + ".",
        })
        */

    }

    sellAlert(heading, stockAmount, price, stock) {
        let sellTotal = (parseInt(stockAmount) * price)
        console.log(heading, stockAmount, price, stock, sellTotal)
        window.confirm("You sold " + stockAmount + " shares of " + stock + " for $" + this.currencyFormat(sellTotal) + ".")
        /*
        this.setState({
            alertShowing: true,
            alertHead: heading,
            // You sold ## shares of alcoa for $##.
            alertMessage: "You sold " + stockAmount + " shares of " + stock + " for $" + this.currencyFormat(sellTotal) + ".",
        })
        */

    }

    sellBasePriceAlert(heading, stockAmount, price, stock) {
        let sellTotal = (parseInt(stockAmount) * price)
        window.confirm("You have sold " + stockAmount + " shares of " + stock + " at a price of $" + price + " per share for a total of $" + this.currencyFormat(sellTotal) + ".")
        /*
        this.setState({
            alertShowing: true,
            alertHead: heading,
            // You have sold ## shares of Alcoa at a price of $## per share for a total of $##.
            alertMessage: "You have sold " + stockAmount + " shares of " + stock + " at a price of $" + price + " per share for a total of $" + this.currencyFormat(sellTotal) + ".",
            walletTotal: (parseInt(this.state.walletTotal) + sellTotal),
        })
        */

    }

    stockHoldersAlert(heading, stockAmount, stockHolderFactor) {

        if (stockHolderFactor === 2) {

            let tempStockHolder = '1 For 1'
            let tempStockEarned = stockAmount * (stockHolderFactor - 1)
            window.confirm("Congraduations for landing on " + tempStockHolder + ". You earned " + tempStockEarned + " shares.")
            /*
            this.setState({
                alertShowing: true,
                alertHead: heading,
                // Congraduations for landing on {1 For 1, 2 For 2, 3 For 3}. You earned ## shares.
                alertMessage: "Congraduations for landing on " + tempStockHolder + ". You earned " + tempStockEarned + " shares.",
            })
            */

        } else if (stockHolderFactor === 3) {

            let tempStockHolder = '2 For 1'
            let tempStockEarned = stockAmount * (stockHolderFactor - 1)
            window.confirm("Congraduations for landing on " + tempStockHolder + ". You earned " + tempStockEarned + " shares.")
            /*
            this.setState({
                alertShowing: true,
                alertHead: heading,
                // Congraduations for landing on {1 For 1, 2 For 2, 3 For 3}. You earned ## shares.
                alertMessage: "Congraduations for landing on " + tempStockHolder + ". You earned " + tempStockEarned + " shares.",
            })
            */

        } else if (stockHolderFactor === 4) {

            let tempStockHolder = '3 For 1'
            let tempStockEarned = stockAmount * (stockHolderFactor - 1)
            window.confirm("Congraduations for landing on " + tempStockHolder + ". You earned " + tempStockEarned + " shares.")
            /*
            this.setState({
                alertShowing: true,
                alertHead: heading,
                // Congraduations for landing on {1 For 1, 2 For 2, 3 For 3}. You earned ## shares.
                alertMessage: "Congraduations for landing on " + tempStockHolder + ". You earned " + tempStockEarned + " shares.",
            })
            */

        }

    }


    //format money example: 10000 = 10,000

    currencyFormat(num) {
        return num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    //handle clear button press

    onShowClearConfim() {

        let tempBool = window.confirm("This will erase everything in the app. Do you wish to continue?")

        if (tempBool === true) {

            localStorage.clear();

            this.setState({
                //current location of stock prices
                stockLocation: 0,

                //style States
                stockLocationColor: "black",

                //define value of stock owned
                stockValueAlcoa: 0,
                stockValueAmericanMotors: 0,
                stockValueJICase: 0,
                stockValueGeneralMills: 0,
                stockValueIntShoe: 0,
                stockValueMaytag: 0,
                stockValueWesternPubl: 0,
                stockValueWoolwth: 0,

                //define stock owned
                alcoaAmount: 0,
                americanMotorsAmount: 0,
                jICaseAmount: 0,
                generalMillsAmount: 0,
                intShoeAmount: 0,
                maytagAmount: 0,
                westernPublAmount: 0,
                woolwthAmount: 0,

                //totals
                total: 0,
                brokerFee: 0,

                //define calc value of stock owned
                stockCalcValueAlcoa: 0,
                stockCalcValueAmericanMotors: 0,
                stockCalcValueJICase: 0,
                stockCalcValueGeneralMills: 0,
                stockCalcValueIntShoe: 0,
                stockCalcValueMaytag: 0,
                stockCalcValueWesternPubl: 0,
                stockCalcValueWoolwth: 0,

                //define calc stock owned
                alcoaCalcAmount: 0,
                americanMotorsCalcAmount: 0,
                jICaseCalcAmount: 0,
                generalMillsCalcAmount: 0,
                intShoeCalcAmount: 0,
                maytagCalcAmount: 0,
                westernPublCalcAmount: 0,
                woolwthCalcAmount: 0,

                //action bar states
                actionBarShareHoldersFactor: 1,
                dropDownButtonStockTitle: 'Stock',
                actionBarStockFactor: 0,

                dropDownButtonStockAddTitle: 'Stock',
                actionBarStockAddFactor: 0,
                actionBarStockAddInput: 0,

                dropDownButtonStockSubTitle: 'Stock',
                actionBarStockSubFactor: 0,
                actionBarStockSubInput: 0,

                dropDownButtonBuyStockTitle: 'Stock',
                actionBarBuyStockFactor: 0,
                actionBarBuyStockInput: 0,

                dropDownButtonSellStockTitle: 'Stock',
                actionBarSellStockFactor: 0,
                actionBarSellStockInput: 0,

                dropDownButtonSellBasePriceStockTitle: 'Stock',
                actionBarSellBasePriceFactor: 0,

                //wallet
                walletTotal: 0,
                walletAddInput: 0,
                walletSubInput: 0,

                // Collapse and expand UI sections
                actionExpanded: false,
            })

        }

    }

    //Wallet Handlers

    handleApplyButtonAddFunds() {
        let tempFundsVar = (parseInt(this.state.walletTotal) + parseInt(this.state.walletAddInput))
        this.setState({ walletTotal: tempFundsVar })

        this.setState({
            walletAddInput: 0,
        })
    }

    handleApplyButtonSubFunds() {

        if (this.state.walletSubInput < ((parseInt(this.state.walletTotal) + 1))) {

            let tempFundsVar = ((parseInt(this.state.walletTotal) - parseInt(this.state.walletSubInput)))
            this.setState({ walletTotal: tempFundsVar })

            this.setState({
                walletSubInput: 0,
            })

        } else {
            console.log('Error: handleApplyButtonSubFunds incorrect total: [walletTotal] = ' + this.state.walletTotal + ' [walletSubInput] = ' + this.state.walletSubInput)

            this.setState({
                walletSubInput: 'Invalid Input: Input exceeds your wallets total. Please try again.',
            })

        }


    }

    //handle reset localstorage date

    handleResetLocalStorageData() {
        this.setState({
            //current location of stock prices
            stockLocation: 0,

            //define value of stock owned
            stockValueAlcoa: 0,
            stockValueAmericanMotors: 0,
            stockValueJICase: 0,
            stockValueGeneralMills: 0,
            stockValueIntShoe: 0,
            stockValueMaytag: 0,
            stockValueWesternPubl: 0,
            stockValueWoolwth: 0,

            //define stock owned
            alcoaAmount: 0,
            americanMotorsAmount: 0,
            jICaseAmount: 0,
            generalMillsAmount: 0,
            intShoeAmount: 0,
            maytagAmount: 0,
            westernPublAmount: 0,
            woolwthAmount: 0,

            //totals
            total: 0,
            brokerFee: 0,

            //define calc value of stock owned
            stockCalcValueAlcoa: 0,
            stockCalcValueAmericanMotors: 0,
            stockCalcValueJICase: 0,
            stockCalcValueGeneralMills: 0,
            stockCalcValueIntShoe: 0,
            stockCalcValueMaytag: 0,
            stockCalcValueWesternPubl: 0,
            stockCalcValueWoolwth: 0,

            //define calc stock owned
            alcoaCalcAmount: 0,
            americanMotorsCalcAmount: 0,
            jICaseCalcAmount: 0,
            generalMillsCalcAmount: 0,
            intShoeCalcAmount: 0,
            maytagCalcAmount: 0,
            westernPublCalcAmount: 0,
            woolwthCalcAmount: 0,

            //action bar states
            actionBarShareHoldersFactor: 1,
            dropDownButtonStockTitle: 'Stock',
            actionBarStockFactor: 0,

            dropDownButtonStockAddTitle: 'Stock',
            actionBarStockAddFactor: 0,
            actionBarStockAddInput: 0,

            dropDownButtonStockSubTitle: 'Stock',
            actionBarStockSubFactor: 0,
            actionBarStockSubInput: 0,

            dropDownButtonBuyStockTitle: 'Stock',
            actionBarBuyStockFactor: 0,
            actionBarBuyStockInput: 0,

            dropDownButtonSellStockTitle: 'Stock',
            actionBarSellStockFactor: 0,
            actionBarSellStockInput: 0,

            //wallet
            walletTotal: 0,
            walletAddInput: 0,
            walletSubInput: 0
        })
    }

    //Aciton Bar Dropdown Methods

    handleActionBarSellBasePriceButton() {

        if (this.state.actionBarSellBasePriceFactor > 0) {
            if (this.state.actionBarSellBasePriceFactor === 1) {
                this.sellBasePriceAlert('Sell all Alcoa', this.state.alcoaAmount, 30, 'Alcoa')
                this.setState({
                    alcoaAmount: 0,
                    dropDownButtonSellBasePriceStockTitle: 'Stock',
                    actionBarSellBasePriceFactor: 0,
                })

            } else if (this.state.actionBarSellBasePriceFactor === 2) {
                this.sellBasePriceAlert('Sell all American Motors', this.state.americanMotorsAmount, 10, 'American Motors')
                this.setState({
                    americanMotorsAmount: 0,
                    dropDownButtonSellBasePriceStockTitle: 'Stock',
                    actionBarSellBasePriceFactor: 0,
                })

            } else if (this.state.actionBarSellBasePriceFactor === 3) {
                this.sellBasePriceAlert('Sell all J. I. Case', this.state.jICaseAmount, 15, 'J. I. Case')
                this.setState({
                    jICaseAmount: 0,
                    dropDownButtonSellBasePriceStockTitle: 'Stock',
                    actionBarSellBasePriceFactor: 0,
                })

            } else if (this.state.actionBarSellBasePriceFactor === 4) {
                this.sellBasePriceAlert('Sell all General Mills', this.state.generalMillsAmount, 18, 'General Mills')
                this.setState({
                    generalMillsAmount: 0,
                    dropDownButtonSellBasePriceStockTitle: 'Stock',
                    actionBarSellBasePriceFactor: 0,
                })

            } else if (this.state.actionBarSellBasePriceFactor === 5) {
                this.sellBasePriceAlert('Sell all Int. Shoe', this.state.intShoeAmount, 18, 'Int. Shoe')
                this.setState({
                    intShoeAmount: 0,
                    dropDownButtonSellBasePriceStockTitle: 'Stock',
                    actionBarSellBasePriceFactor: 0,
                })

            } else if (this.state.actionBarSellBasePriceFactor === 6) {
                this.sellBasePriceAlert('Sell all Maytag', this.state.maytagAmount, 15, 'Maytag')
                this.setState({
                    maytagAmount: 0,
                    dropDownButtonSellBasePriceStockTitle: 'Stock',
                    actionBarSellBasePriceFactor: 0,
                })

            } else if (this.state.actionBarSellBasePriceFactor === 7) {
                this.sellBasePriceAlert('Sell all Western Publ.', this.state.westernPublAmount, 10, 'Western Publ.')
                this.setState({
                    westernPublAmount: 0,
                    dropDownButtonSellBasePriceStockTitle: 'Stock',
                    actionBarSellBasePriceFactor: 0,
                })

            } else if (this.state.actionBarSellBasePriceFactor === 8) {
                this.sellBasePriceAlert('Sell all Woolworth', this.state.woolwthAmount, 30, 'Woolworth')
                this.setState({
                    woolwthAmount: 0,
                    dropDownButtonSellBasePriceStockTitle: 'Stock',
                    actionBarSellBasePriceFactor: 0,
                })

            }
        } else {

        }
    }

    handleActionBarApplyBuyButton() {

        if (this.state.actionBarBuyStockInput < 0) {

            console.log(
                "Error: handleActionBarApplyBuyButton did not funciton as intened. "
                + " [actionBarBuyStockFactor] = " + this.state.actionBarBuyStockFactor
                + ", [actionBarBuyStockInput] = " + this.state.actionBarBuyStockInput
            )

            this.setState({
                actionBarBuyStockInput: 'Invalid Input: Negative stock is not accepted. Please try again.',
            })

        } else if (this.state.actionBarBuyStockFactor > 0) {
            if (this.state.actionBarBuyStockFactor === 1) {

                if (((this.state.actionBarBuyStockInput * pricesAlcoa.get(this.state.stockLocation)) < parseInt(this.state.walletTotal) + 1)) {
                    //Alcoa
                    let tempPriceVar = (parseInt(this.state.actionBarBuyStockInput) * pricesAlcoa.get(this.state.stockLocation))
                    let tempTotalVar = (parseInt(this.state.walletTotal) - tempPriceVar)
                    let tempAmountVar = (parseInt(this.state.alcoaAmount) + parseInt(this.state.actionBarBuyStockInput))
                    this.buyAlert('Buying Alcoa', this.state.actionBarBuyStockInput, parseInt(this.formatAlcoaPrice()), 'Alcoa')
                    this.setState({
                        walletTotal: tempTotalVar,
                        alcoaAmount: tempAmountVar,
                        dropDownButtonBuyStockTitle: 'Stock',
                        actionBarBuyStockFactor: 0,
                        actionBarBuyStockInput: 0,
                    })
                } else {

                    this.setState({
                        actionBarBuyStockInput: 'Invalid Input: Not enough liquid cash to purchase stock. Please try again.',
                    })

                }

            } else if (this.state.actionBarBuyStockFactor === 2) {

                if (((this.state.actionBarBuyStockInput * pricesAmericanMotors.get(this.state.stockLocation)) < parseInt(this.state.walletTotal) + 1)) {
                    //American Motors
                    let tempPriceVar = (parseInt(this.state.actionBarBuyStockInput) * pricesAmericanMotors.get(this.state.stockLocation))
                    let tempTotalVar = (parseInt(this.state.walletTotal) - tempPriceVar)
                    let tempAmountVar = (parseInt(this.state.americanMotorsAmount) + parseInt(this.state.actionBarBuyStockInput))
                    this.buyAlert('Buying American Motors', this.state.actionBarBuyStockInput, parseInt(this.formatAmericanMotorsaPrice()), 'American Motors')
                    this.setState({
                        walletTotal: tempTotalVar,
                        americanMotorsAmount: tempAmountVar,
                        dropDownButtonBuyStockTitle: 'Stock',
                        actionBarBuyStockFactor: 0,
                        actionBarBuyStockInput: 0,
                    })
                } else {

                    this.setState({
                        actionBarBuyStockInput: 'Invalid Input: Not enough liquid cash to purchase stock. Please try again.',
                    })

                }


            } else if (this.state.actionBarBuyStockFactor === 3) {

                if (((this.state.actionBarBuyStockInput * pricesJICase.get(this.state.stockLocation)) < parseInt(this.state.walletTotal) + 1)) {
                    //J. I. Case
                    let tempPriceVar = (parseInt(this.state.actionBarBuyStockInput) * pricesJICase.get(this.state.stockLocation))
                    let tempTotalVar = (parseInt(this.state.walletTotal) - tempPriceVar)
                    let tempAmountVar = (parseInt(this.state.jICaseAmount) + parseInt(this.state.actionBarBuyStockInput))
                    this.buyAlert('Buying J. I. Case', this.state.actionBarBuyStockInput, parseInt(this.formatJICasePrice()), 'J. I. Case')
                    this.setState({
                        walletTotal: tempTotalVar,
                        jICaseAmount: tempAmountVar,
                        dropDownButtonBuyStockTitle: 'Stock',
                        actionBarBuyStockFactor: 0,
                        actionBarBuyStockInput: 0,
                    })
                } else {

                    this.setState({
                        actionBarBuyStockInput: 'Invalid Input: Not enough liquid cash to purchase stock. Please try again.',
                    })

                }


            } else if (this.state.actionBarBuyStockFactor === 4) {

                if (((this.state.actionBarBuyStockInput * pricesGeneralMills.get(this.state.stockLocation)) < parseInt(this.state.walletTotal) + 1)) {
                    //General Mills
                    let tempPriceVar = (parseInt(this.state.actionBarBuyStockInput) * pricesGeneralMills.get(this.state.stockLocation))
                    let tempTotalVar = (parseInt(this.state.walletTotal) - tempPriceVar)
                    let tempAmountVar = (parseInt(this.state.generalMillsAmount) + parseInt(this.state.actionBarBuyStockInput))
                    this.buyAlert('Buying General Mills', this.state.actionBarBuyStockInput, parseInt(this.formatGeneralMillsPrice()), 'General Mills')
                    this.setState({
                        walletTotal: tempTotalVar,
                        generalMillsAmount: tempAmountVar,
                        dropDownButtonBuyStockTitle: 'Stock',
                        actionBarBuyStockFactor: 0,
                        actionBarBuyStockInput: 0,
                    })
                } else {

                    this.setState({
                        actionBarBuyStockInput: 'Invalid Input: Not enough liquid cash to purchase stock. Please try again.',
                    })

                }


            } else if (this.state.actionBarBuyStockFactor === 5) {

                if (((this.state.actionBarBuyStockInput * pricesIntShoes.get(this.state.stockLocation)) < parseInt(this.state.walletTotal) + 1)) {
                    //Int. Shoe
                    let tempPriceVar = (parseInt(this.state.actionBarBuyStockInput) * pricesIntShoes.get(this.state.stockLocation))
                    let tempTotalVar = (parseInt(this.state.walletTotal) - tempPriceVar)
                    let tempAmountVar = (parseInt(this.state.intShoeAmount) + parseInt(this.state.actionBarBuyStockInput))
                    this.buyAlert('Buying Int. Shoe', this.state.actionBarBuyStockInput, parseInt(this.formatIntShoesPrice()), 'Int. Shoe')
                    this.setState({
                        walletTotal: tempTotalVar,
                        intShoeAmount: tempAmountVar,
                        dropDownButtonBuyStockTitle: 'Stock',
                        actionBarBuyStockFactor: 0,
                        actionBarBuyStockInput: 0,
                    })
                } else {

                    this.setState({
                        actionBarBuyStockInput: 'Invalid Input: Not enough liquid cash to purchase stock. Please try again.',
                    })

                }


            } else if (this.state.actionBarBuyStockFactor === 6) {

                if (((this.state.actionBarBuyStockInput * pricesMayTag.get(this.state.stockLocation)) < parseInt(this.state.walletTotal) + 1)) {
                    //Maytag
                    let tempPriceVar = (parseInt(this.state.actionBarBuyStockInput) * pricesMayTag.get(this.state.stockLocation))
                    let tempTotalVar = (parseInt(this.state.walletTotal) - tempPriceVar)
                    let tempAmountVar = (parseInt(this.state.maytagAmount) + parseInt(this.state.actionBarBuyStockInput))
                    this.buyAlert('Buying Maytag', this.state.actionBarBuyStockInput, parseInt(this.formatMayTagPrice), 'Maytag')
                    this.setState({
                        walletTotal: tempTotalVar,
                        maytagAmount: tempAmountVar,
                        dropDownButtonBuyStockTitle: 'Stock',
                        actionBarBuyStockFactor: 0,
                        actionBarBuyStockInput: 0,
                    })
                } else {

                    this.setState({
                        actionBarBuyStockInput: 'Invalid Input: Not enough liquid cash to purchase stock. Please try again.',
                    })

                }


            } else if (this.state.actionBarBuyStockFactor === 7) {

                if (((this.state.actionBarBuyStockInput * pricesWesternPublishing.get(this.state.stockLocation)) < parseInt(this.state.walletTotal) + 1)) {
                    //Western Publ.
                    let tempPriceVar = (parseInt(this.state.actionBarBuyStockInput) * pricesWesternPublishing.get(this.state.stockLocation))
                    let tempTotalVar = (parseInt(this.state.walletTotal) - tempPriceVar)
                    let tempAmountVar = (parseInt(this.state.westernPublAmount) + parseInt(this.state.actionBarBuyStockInput))
                    this.buyAlert('Buying Western Publ.', this.state.actionBarBuyStockInput, parseInt(this.formatWesternPublishingPrice), 'Western Publ.')
                    this.setState({
                        walletTotal: tempTotalVar,
                        westernPublAmount: tempAmountVar,
                        dropDownButtonBuyStockTitle: 'Stock',
                        actionBarBuyStockFactor: 0,
                        actionBarBuyStockInput: 0,
                    })
                } else {

                    this.setState({
                        actionBarBuyStockInput: 'Invalid Input: Not enough liquid cash to purchase stock. Please try again.',
                    })

                }


            } else if (this.state.actionBarBuyStockFactor === 8) {

                if (((this.state.actionBarBuyStockInput * pricesWoolWorth.get(this.state.stockLocation)) < parseInt(this.state.walletTotal) + 1)) {
                    //Woolworth
                    let tempPriceVar = (parseInt(this.state.actionBarBuyStockInput) * pricesWoolWorth.get(this.state.stockLocation))
                    let tempTotalVar = (parseInt(this.state.walletTotal) - tempPriceVar)
                    let tempAmountVar = (parseInt(this.state.woolwthAmount) + parseInt(this.state.actionBarBuyStockInput))
                    this.buyAlert('Buying Woolworth', this.state.actionBarBuyStockInput, parseInt(this.formatWoolWrthPrice()), 'Woolworth')
                    this.setState({
                        walletTotal: tempTotalVar,
                        woolwthAmount: tempAmountVar,
                        dropDownButtonBuyStockTitle: 'Stock',
                        actionBarBuyStockFactor: 0,
                        actionBarBuyStockInput: 0,
                    })
                } else {

                    this.setState({
                        actionBarBuyStockInput: 'Invalid Input: Not enough liquid cash to purchase stock. Please try again.',
                    })

                }


            }
        } else {

            this.setState({
                actionBarBuyStockInput: 'Stock not selected. Please select a stock and try again.',
            })

        }
    }

    handleActionBarApplySellButton() {


        if (this.state.actionBarSellStockInput < 0) {

            console.log(
                "Error: handleActionBarApplyBuyButton did not funciton as intened. "
                + " [actionBarSellStockFactor] = " + this.state.actionBarSellStockFactor
                + ", [actionBarSellStockInput] = " + this.state.actionBarSellStockInput
            )

            this.setState({
                actionBarSellStockInput: 'Invalid Input: Negative stock is not accepted. Please try again.',
            })

        } else if (this.state.actionBarSellStockFactor > 0) {
            if (this.state.actionBarSellStockFactor === 1) {

                if (this.state.actionBarSellStockInput < parseInt(this.state.alcoaAmount) + 1) {
                    //Alcoa
                    let tempPriceVar = (parseInt(this.state.actionBarSellStockInput) * pricesAlcoa.get(this.state.stockLocation))
                    let tempTotalVar = (parseInt(this.state.walletTotal) + tempPriceVar)
                    let tempAmountVar = (parseInt(this.state.alcoaAmount) - parseInt(this.state.actionBarSellStockInput))
                    this.sellAlert('Selling Alcoa', this.state.actionBarSellStockInput, parseInt(this.formatAlcoaPrice()), 'Alcoa')
                    this.setState({
                        walletTotal: tempTotalVar,
                        alcoaAmount: tempAmountVar,
                        dropDownButtonSellStockTitle: 'Stock',
                        actionBarBuyStockFactor: 0,
                        actionBarSellStockInput: 0,
                    })
                } else {

                    this.setState({
                        actionBarSellStockInput: 'Invalid Input: Input exceeds stock owned. Please try again.',
                    })

                }

            } else if (this.state.actionBarSellStockFactor === 2) {

                if (this.state.actionBarSellStockInput < parseInt(this.state.americanMotorsAmount) + 1) {
                    //American Motors
                    let tempPriceVar = (parseInt(this.state.actionBarSellStockInput) * pricesAmericanMotors.get(this.state.stockLocation))
                    let tempTotalVar = (parseInt(this.state.walletTotal) + tempPriceVar)
                    let tempAmountVar = (parseInt(this.state.americanMotorsAmount) - parseInt(this.state.actionBarSellStockInput))
                    this.sellAlert('Selling American Motors', this.state.actionBarSellStockInput, parseInt(this.formatAmericanMotorsaPrice()), 'American Motors')
                    this.setState({
                        walletTotal: tempTotalVar,
                        americanMotorsAmount: tempAmountVar,
                        dropDownButtonSellStockTitle: 'Stock',
                        actionBarBuyStockFactor: 0,
                        actionBarSellStockInput: 0,
                    })
                } else {

                    this.setState({
                        actionBarSellStockInput: 'Invalid Input: Input exceeds stock owned. Please try again.',
                    })

                }


            } else if (this.state.actionBarSellStockFactor === 3) {

                if (this.state.actionBarSellStockInput < parseInt(this.state.jICaseAmount) + 1) {
                    //J. I. Case
                    let tempPriceVar = (parseInt(this.state.actionBarSellStockInput) * pricesJICase.get(this.state.stockLocation))
                    let tempTotalVar = (parseInt(this.state.walletTotal) + tempPriceVar)
                    let tempAmountVar = (parseInt(this.state.jICaseAmount) - parseInt(this.state.actionBarSellStockInput))
                    this.sellAlert('Selling J. I. Case', this.state.actionBarSellStockInput, parseInt(this.formatJICasePrice()), 'J. I. Case')
                    this.setState({
                        walletTotal: tempTotalVar,
                        jICaseAmount: tempAmountVar,
                        dropDownButtonSellStockTitle: 'Stock',
                        actionBarBuyStockFactor: 0,
                        actionBarSellStockInput: 0,
                    })
                } else {

                    this.setState({
                        actionBarSellStockInput: 'Invalid Input: Input exceeds stock owned. Please try again.',
                    })

                }


            } else if (this.state.actionBarSellStockFactor === 4) {

                if (this.state.actionBarSellStockInput < parseInt(this.state.generalMillsAmount) + 1) {
                    //General Mills
                    let tempPriceVar = (parseInt(this.state.actionBarSellStockInput) * pricesGeneralMills.get(this.state.stockLocation))
                    let tempTotalVar = (parseInt(this.state.walletTotal) + tempPriceVar)
                    let tempAmountVar = (parseInt(this.state.generalMillsAmount) - parseInt(this.state.actionBarSellStockInput))
                    this.sellAlert('Selling General Mills', this.state.actionBarSellStockInput, parseInt(this.formatGeneralMillsPrice()), 'General Mills')
                    this.setState({
                        walletTotal: tempTotalVar,
                        generalMillsAmount: tempAmountVar,
                        dropDownButtonSellStockTitle: 'Stock',
                        actionBarBuyStockFactor: 0,
                        actionBarSellStockInput: 0,
                    })
                } else {

                    this.setState({
                        actionBarSellStockInput: 'Invalid Input: Input exceeds stock owned. Please try again.',
                    })

                }


            } else if (this.state.actionBarSellStockFactor === 5) {

                if (this.state.actionBarSellStockInput < parseInt(this.state.intShoeAmount) + 1) {
                    //Int. Shoe
                    let tempPriceVar = (parseInt(this.state.actionBarSellStockInput) * pricesIntShoes.get(this.state.stockLocation))
                    let tempTotalVar = (parseInt(this.state.walletTotal) + tempPriceVar)
                    let tempAmountVar = (parseInt(this.state.intShoeAmount) - parseInt(this.state.actionBarSellStockInput))
                    this.sellAlert('Selling Int. Shoe', this.state.actionBarSellStockInput, parseInt(this.formatIntShoesPrice()), 'Int. Shoe')
                    this.setState({
                        walletTotal: tempTotalVar,
                        intShoeAmount: tempAmountVar,
                        dropDownButtonSellStockTitle: 'Stock',
                        actionBarBuyStockFactor: 0,
                        actionBarSellStockInput: 0,
                    })
                } else {

                    this.setState({
                        actionBarSellStockInput: 'Invalid Input: Input exceeds stock owned. Please try again.',
                    })

                }


            } else if (this.state.actionBarSellStockFactor === 6) {

                if (this.state.actionBarSellStockInput < parseInt(this.state.maytagAmount) + 1) {
                    //Maytag
                    let tempPriceVar = (parseInt(this.state.actionBarSellStockInput) * pricesMayTag.get(this.state.stockLocation))
                    let tempTotalVar = (parseInt(this.state.walletTotal) + tempPriceVar)
                    let tempAmountVar = (parseInt(this.state.maytagAmount) - parseInt(this.state.actionBarSellStockInput))
                    this.sellAlert('Selling Maytag', this.state.actionBarSellStockInput, parseInt(this.formatMayTagPrice), 'Maytag')
                    this.setState({
                        walletTotal: tempTotalVar,
                        maytagAmount: tempAmountVar,
                        dropDownButtonSellStockTitle: 'Stock',
                        actionBarBuyStockFactor: 0,
                        actionBarSellStockInput: 0,
                    })
                } else {

                    this.setState({
                        actionBarSellStockInput: 'Invalid Input: Input exceeds stock owned. Please try again.',
                    })

                }


            } else if (this.state.actionBarSellStockFactor === 7) {

                if (this.state.actionBarSellStockInput < parseInt(this.state.westernPublAmount) + 1) {
                    //Western Publ.
                    let tempPriceVar = (parseInt(this.state.actionBarSellStockInput) * pricesWesternPublishing.get(this.state.stockLocation))
                    let tempTotalVar = (parseInt(this.state.walletTotal) + tempPriceVar)
                    let tempAmountVar = (parseInt(this.state.westernPublAmount) - parseInt(this.state.actionBarSellStockInput))
                    this.sellAlert('Selling Western Publ.', this.state.actionBarSellStockInput, parseInt(this.formatWesternPublishingPrice), 'Western Publ.')
                    this.setState({
                        walletTotal: tempTotalVar,
                        westernPublAmount: tempAmountVar,
                        dropDownButtonSellStockTitle: 'Stock',
                        actionBarBuyStockFactor: 0,
                        actionBarSellStockInput: 0,
                    })
                } else {

                    this.setState({
                        actionBarSellStockInput: 'Invalid Input: Input exceeds stock owned. Please try again.',
                    })

                }


            } else if (this.state.actionBarSellStockFactor === 8) {

                if (this.state.actionBarSellStockInput < parseInt(this.state.woolwthAmount) + 1) {
                    //Woolworth
                    let tempPriceVar = (parseInt(this.state.actionBarSellStockInput) * pricesWoolWorth.get(this.state.stockLocation))
                    let tempTotalVar = (parseInt(this.state.walletTotal) + tempPriceVar)
                    let tempAmountVar = (parseInt(this.state.woolwthAmount) - parseInt(this.state.actionBarSellStockInput))
                    this.sellAlert('Selling Woolworth', this.state.actionBarSellStockInput, parseInt(this.formatWoolWrthPrice()), 'Woolworth')
                    this.setState({
                        walletTotal: tempTotalVar,
                        woolwthAmount: tempAmountVar,
                        dropDownButtonSellStockTitle: 'Stock',
                        actionBarBuyStockFactor: 0,
                        actionBarSellStockInput: 0,
                    })
                } else {

                    this.setState({
                        actionBarSellStockInput: 'Invalid Input: Input exceeds stock owned. Please try again.',
                    })

                }


            }
        } else {

            this.setState({
                actionBarSellStockInput: 'Stock not selected. Please select a stock and try again.',
            })

        }
    }

    handleActionBarApplyAddButton() {

        if (this.state.actionBarStockAddInput < 0) {

            console.log(
                "Error: handleActionBarApplyAddButton did not funciton as intened. "
                + " [actionBarStockAddFactor] = " + this.state.actionBarStockAddFactor
                + ", [actionBarStockAddInput] = " + this.state.actionBarStockAddInput
            )

            this.setState({
                actionBarStockAddInput: 'Invalid Input: Negative stock is not accepted. Please try again.',
            })
        } else if (this.state.actionBarStockAddFactor > 0) {

            if (this.state.actionBarStockAddFactor === 1) {
                //Alcoa
                let tempAmountVar = (parseInt(this.state.alcoaAmount) + parseInt(this.state.actionBarStockAddInput))
                this.setState({ alcoaAmount: tempAmountVar })
            } else if (this.state.actionBarStockAddFactor === 2) {
                //American Motors
                let tempAmountVar = (parseInt(this.state.americanMotorsAmount) + parseInt(this.state.actionBarStockAddInput))
                this.setState({ americanMotorsAmount: tempAmountVar })
            } else if (this.state.actionBarStockAddFactor === 3) {
                //J. I. Case
                let tempAmountVar = (parseInt(this.state.jICaseAmount) + parseInt(this.state.actionBarStockAddInput))
                this.setState({ jICaseAmount: tempAmountVar })
            } else if (this.state.actionBarStockAddFactor === 4) {
                //General Mills
                let tempAmountVar = (parseInt(this.state.generalMillsAmount) + parseInt(this.state.actionBarStockAddInput))
                this.setState({ generalMillsAmount: tempAmountVar })
            } else if (this.state.actionBarStockAddFactor === 5) {
                //Int. Shoe
                let tempAmountVar = (parseInt(this.state.intShoeAmount) + parseInt(this.state.actionBarStockAddInput))
                this.setState({ intShoeAmount: tempAmountVar })
            } else if (this.state.actionBarStockAddFactor === 6) {
                //Maytag
                let tempAmountVar = (parseInt(this.state.maytagAmount) + parseInt(this.state.actionBarStockAddInput))
                this.setState({ maytagAmount: tempAmountVar })
            } else if (this.state.actionBarStockAddFactor === 7) {
                //Western Publ.
                let tempAmountVar = (parseInt(this.state.westernPublAmount) + parseInt(this.state.actionBarStockAddInput))
                this.setState({ westernPublAmount: tempAmountVar })
            } else if (this.state.actionBarStockAddFactor === 8) {
                //Woolworth
                let tempAmountVar = (parseInt(this.state.woolwthAmount) + parseInt(this.state.actionBarStockAddInput))
                this.setState({ woolwthAmount: tempAmountVar })
            } else {
                console.log(
                    "Error: handleActionBarApplyAddButton did not funciton as intened. "
                    + " [actionBarStockAddFactor] = " + this.state.actionBarStockAddFactor
                    + ", [actionBarStockAddInput] = " + this.state.actionBarStockAddInput
                )
            }


            this.setState({
                dropDownButtonStockAddTitle: 'Stock',
                actionBarStockAddFactor: 0,
                actionBarStockAddInput: 0,
            })

        } else {

            this.setState({
                actionBarStockAddInput: 'Stock not selected. Please select a stock and try again.',
            })

        }

    }

    handleActionBarApplySubButton() {

        if (this.state.actionBarStockSubInput < 0) {

            console.log(
                "Error: handleActionBarApplyAddButton did not funciton as intened. "
                + " [actionBarStockSubFactor] = " + this.state.actionBarStockSubFactor
                + ", [actionBarStockSubInput] = " + this.state.actionBarStockAddInput
            )

            this.setState({
                actionBarStockSubInput: 'Invalid Input: Negative stock is not accepted. Please try again.',
            })
        } else if (this.state.actionBarStockSubInput > 0) {
            if (this.state.actionBarStockSubFactor === 1) {
                //Alcoa

                if (this.state.actionBarStockSubInput < ((parseInt(this.state.alcoaAmount) + 1))) {
                    let tempAmountVar = (parseInt(this.state.alcoaAmount) - parseInt(this.state.actionBarStockSubInput))
                    this.setState({ alcoaAmount: tempAmountVar })

                    this.setState({
                        dropDownButtonStockSubTitle: 'Stock',
                        actionBarStockSubFactor: 0,
                        actionBarStockSubInput: 0,
                    })
                } else {
                    this.setState({
                        actionBarStockSubInput: 'Invalid Input: Input exceeds your total stock holdings. Please try again.',
                    })
                }
            } else if (this.state.actionBarStockSubFactor === 2) {
                //American Motors
                if (this.state.actionBarStockSubInput < ((parseInt(this.state.americanMotorsAmount) + 1))) {
                    let tempAmountVar = (parseInt(this.state.americanMotorsAmount) - parseInt(this.state.actionBarStockSubInput))
                    this.setState({ americanMotorsAmount: tempAmountVar })

                    this.setState({
                        dropDownButtonStockSubTitle: 'Stock',
                        actionBarStockSubFactor: 0,
                        actionBarStockSubInput: 0,
                    })
                } else {
                    this.setState({
                        actionBarStockSubInput: 'Invalid Input: Input exceeds your total stock holdings. Please try again.',
                    })
                }
            } else if (this.state.actionBarStockSubFactor === 3) {
                //J. I. Case
                if (this.state.actionBarStockSubInput < ((parseInt(this.state.jICaseAmount) + 1))) {
                    let tempAmountVar = (parseInt(this.state.jICaseAmount) - parseInt(this.state.actionBarStockSubInput))
                    this.setState({ jICaseAmount: tempAmountVar })

                    this.setState({
                        dropDownButtonStockSubTitle: 'Stock',
                        actionBarStockSubFactor: 0,
                        actionBarStockSubInput: 0,
                    })
                } else {
                    this.setState({
                        actionBarStockSubInput: 'Invalid Input: Input exceeds your total stock holdings. Please try again.',
                    })
                }
            } else if (this.state.actionBarStockSubFactor === 4) {
                //General Mills
                if (this.state.actionBarStockSubInput < ((parseInt(this.state.generalMillsAmount) + 1))) {
                    let tempAmountVar = (parseInt(this.state.generalMillsAmount) - parseInt(this.state.actionBarStockSubInput))
                    this.setState({ generalMillsAmount: tempAmountVar })

                    this.setState({
                        dropDownButtonStockSubTitle: 'Stock',
                        actionBarStockSubFactor: 0,
                        actionBarStockSubInput: 0,
                    })
                } else {
                    this.setState({
                        actionBarStockSubInput: 'Invalid Input: Input exceeds your total stock holdings. Please try again.',
                    })
                }
            } else if (this.state.actionBarStockSubFactor === 5) {
                //Int. Shoe
                if (this.state.actionBarStockSubInput < ((parseInt(this.state.intShoeAmount) + 1))) {
                    let tempAmountVar = (parseInt(this.state.intShoeAmount) - parseInt(this.state.actionBarStockSubInput))
                    this.setState({ intShoeAmount: tempAmountVar })

                    this.setState({
                        dropDownButtonStockSubTitle: 'Stock',
                        actionBarStockSubFactor: 0,
                        actionBarStockSubInput: 0,
                    })
                } else {
                    this.setState({
                        actionBarStockSubInput: 'Invalid Input: Input exceeds your total stock holdings. Please try again.',
                    })
                }
            } else if (this.state.actionBarStockSubFactor === 6) {
                //Maytag
                if (this.state.actionBarStockSubInput < ((parseInt(this.state.maytagAmount) + 1))) {
                    let tempAmountVar = (parseInt(this.state.maytagAmount) - parseInt(this.state.actionBarStockSubInput))
                    this.setState({ maytagAmount: tempAmountVar })

                    this.setState({
                        dropDownButtonStockSubTitle: 'Stock',
                        actionBarStockSubFactor: 0,
                        actionBarStockSubInput: 0,
                    })
                } else {
                    this.setState({
                        actionBarStockSubInput: 'Invalid Input: Input exceeds your total stock holdings. Please try again.',
                    })
                }
            } else if (this.state.actionBarStockSubFactor === 7) {
                //Western Publ.
                if (this.state.actionBarStockSubInput < ((parseInt(this.state.westernPublAmount) + 1))) {
                    let tempAmountVar = (parseInt(this.state.westernPublAmount) - parseInt(this.state.actionBarStockSubInput))
                    this.setState({ westernPublAmount: tempAmountVar })

                    this.setState({
                        dropDownButtonStockSubTitle: 'Stock',
                        actionBarStockSubFactor: 0,
                        actionBarStockSubInput: 0,
                    })
                } else {
                    this.setState({
                        actionBarStockSubInput: 'Invalid Input: Input exceeds your total stock holdings. Please try again.',
                    })
                }
            } else if (this.state.actionBarStockSubFactor === 8) {
                //Woolworth
                if (this.state.actionBarStockSubInput < ((parseInt(this.state.woolwthAmount) + 1))) {
                    let tempAmountVar = (parseInt(this.state.woolwthAmount) - parseInt(this.state.actionBarStockSubInput))
                    this.setState({ woolwthAmount: tempAmountVar })

                    this.setState({
                        dropDownButtonStockSubTitle: 'Stock',
                        actionBarStockSubFactor: 0,
                        actionBarStockSubInput: 0,
                    })
                } else {
                    this.setState({
                        actionBarStockSubInput: 'Invalid Input: Input exceeds your total stock holdings. Please try again.',
                    })
                }
            } else {
                console.log(
                    "Error: handleActionBarApplyAddButton did not funciton as intened. "
                    + " [actionBarStockSubFactor] = " + this.state.actionBarStockSubFactor
                    + ", [actionBarStockSubInput] = " + this.state.actionBarStockSubInput
                    + ", [dropDownButtonStockAddTitle] = " + this.state.dropDownButtonStockAddTitle
                )

                this.setState({
                    dropDownButtonStockAddTitle: 'Stock',
                    actionBarStockSubFactor: 0,
                    actionBarStockSubInput: 0,

                })
            }
        } else {

            this.setState({
                actionBarStockSubInput: 'Stock not selected. Please select a stock and try again.',
            })

        }



    }

    handleActionBarStockApplyButton() {

        if (this.state.actionBarShareHoldersFactor === 1) {
            //1 for 1
            //2 does the total aka. 50 share, 1 * 50 = 50 better yet 50 + 50 = 100, or 2 * 50 = 100.
            //this can be applied to the other ones
            this.actionBarShareHoldersMathHandler(2)

        } else if (this.state.actionBarShareHoldersFactor === 2) {
            //2 for 1
            this.actionBarShareHoldersMathHandler(3)

        } else if (this.state.actionBarShareHoldersFactor === 3) {
            //3 for 1
            this.actionBarShareHoldersMathHandler(4)

        }


        this.setState({
            dropDownButtonStockTitle: 'Stock',
            actionBarShareHoldersFactor: 1,
            actionBarStockFactor: 0,
        })
    }

    actionBarShareHoldersMathHandler(stockMultiplier) {

        if (this.state.actionBarStockFactor === 1) {
            //Alcoa
            let tempAmountVar = this.state.alcoaAmount * stockMultiplier
            this.setState({ alcoaAmount: tempAmountVar })
            this.stockHoldersAlert('Congraduations!', this.state.alcoaAmount, stockMultiplier)
            //console.log("[alcoaAmount] = " + this.state.alcoaAmount + "[stockMultiplier] = " + stockMultiplier + "[tempAmountVar] = " + tempAmountVar)
        } else if (this.state.actionBarStockFactor === 2) {
            //American Motors
            let tempAmountVar = this.state.americanMotorsAmount * stockMultiplier
            this.setState({ americanMotorsAmount: tempAmountVar })
            this.stockHoldersAlert('Congraduations!', this.state.americanMotorsAmount, stockMultiplier)
        } else if (this.state.actionBarStockFactor === 3) {
            //J. I. Case
            let tempAmountVar = this.state.jICaseAmount * stockMultiplier
            this.setState({ jICaseAmount: tempAmountVar })
            this.stockHoldersAlert('Congraduations!', this.state.jICaseAmount, stockMultiplier)
        } else if (this.state.actionBarStockFactor === 4) {
            //General Mills
            let tempAmountVar = this.state.generalMillsAmount * stockMultiplier
            this.setState({ generalMillsAmount: tempAmountVar })
            this.stockHoldersAlert('Congraduations!', this.state.generalMillsAmount, stockMultiplier)
        } else if (this.state.actionBarStockFactor === 5) {
            //Int. Shoe
            let tempAmountVar = this.state.intShoeAmount * stockMultiplier
            this.setState({ intShoeAmount: tempAmountVar })
            this.stockHoldersAlert('Congraduations!', this.state.intShoeAmount, stockMultiplier)
        } else if (this.state.actionBarStockFactor === 6) {
            //Maytag
            let tempAmountVar = this.state.maytagAmount * stockMultiplier
            this.setState({ maytagAmount: tempAmountVar })
            this.stockHoldersAlert('Congraduations!', this.state.maytagAmount, stockMultiplier)
        } else if (this.state.actionBarStockFactor === 7) {
            //Western Publ.
            let tempAmountVar = this.state.westernPublAmount * stockMultiplier
            this.setState({ westernPublAmount: tempAmountVar })
            this.stockHoldersAlert('Congraduations!', this.state.westernPublAmount, stockMultiplier)
        } else if (this.state.actionBarStockFactor === 8) {
            //Woolworth
            let tempAmountVar = this.state.woolwthAmount * stockMultiplier
            this.setState({ woolwthAmount: tempAmountVar })
            this.stockHoldersAlert('Congraduations!', this.state.woolwthAmount, stockMultiplier)
        } else {
            console.log(
                "Error: actionBarShareHoldersMathHandler did not funciton as intened. "
                + " [actionBarShareHoldersFactor] = " + this.state.actionBarShareHoldersFactor
                + ", [actionBarStockFactor] = " + this.state.actionBarStockFactor
            )
        }
    }

    //method for the clear button

    handleClearButton() {
        console.log("Debug: handleClearButton resets states.")

        this.setState({
            alcoaAmount: 0,
            americanMotorsAmount: 0,
            jICaseAmount: 0,
            generalMillsAmount: 0,
            intShoeAmount: 0,
            maytagAmount: 0,
            westernPublAmount: 0,
            woolwthAmount: 0,
        })
    }

    handleClearButtonCalc() {
        console.log("Debug: handleClearButton resets states.")

        this.setState({
            alcoaCalcAmount: 0,
            americanMotorsCalcAmount: 0,
            jICaseCalcAmount: 0,
            generalMillsCalcAmount: 0,
            intShoeCalcAmount: 0,
            maytagCalcAmount: 0,
            westernPublCalcAmount: 0,
            woolwthCalcAmount: 0,
        })
    }


    //methods for easy formating later on

    formatAlcoaPrice() {
        let tempVar = pricesAlcoa.get(this.state.stockLocation)
        return tempVar;

    }

    formatAmericanMotorsaPrice() {

        return pricesAmericanMotors.get(this.state.stockLocation);

    }

    formatJICasePrice() {

        return pricesJICase.get(this.state.stockLocation);

    }

    formatGeneralMillsPrice() {

        return pricesGeneralMills.get(this.state.stockLocation);

    }

    formatIntShoesPrice() {

        return pricesIntShoes.get(this.state.stockLocation);

    }

    formatMayTagPrice() {

        return pricesMayTag.get(this.state.stockLocation);

    }

    formatWesternPublishingPrice() {

        return pricesWesternPublishing.get(this.state.stockLocation);

    }

    formatWoolWrthPrice() {

        return pricesWoolWorth.get(this.state.stockLocation);

    };

    //method for increasing/decreasing stockLocaiton
    //stockType range from 0 - 11
    /*
    0 = 1 +1
    1 = 2 +2
    2 = 3 +3
    3 = 4 +4
    4 = 5 +5
    5 = 6 +20
    6 = 7 -1
    7 = 8 -2
    8 = 9 -3
    9 = 10 -4
    10 = 11 -5
    11 = 12 -20
    */
    handleStockPriceIncrement(stockType) {
        //console.log('handleStockPriceIncrement')
        let checkStockLoaction1;
        let checkStockLoaction2;
        if (stockType === 0) {
            console.log('Increment Clicked, Changing this.state.stockLocation by up1');
            if (this.state.stockLocation === 25) {
                this.setState({ stockLocation: this.state.stockLocation - 1 });
            } else {
                this.setState({ stockLocation: this.state.stockLocation + 1 });
            }
            console.log('this.state.stockLocation = ' + this.state.stockLocation);

        } else if (stockType === 1) {
            console.log('Increment Clicked, Changing this.state.stockLocation by up2');
            if (this.state.stockLocation + 2 > 25) {
                const y = (((this.state.stockLocation + 2) - 25) * -1) + 25;
                this.setState({ stockLocation: this.state.stockLocation = y });
            } else {
                this.setState({ stockLocation: this.state.stockLocation + 2 });
            }
            console.log('this.state.stockLocation = ' + this.state.stockLocation);

        } else if (stockType === 2) {
            console.log('Increment Clicked, Changing this.state.stockLocation by up3');
            if (this.state.stockLocation + 3 > 25) {
                const y = (((this.state.stockLocation + 3) - 25) * -1) + 25;
                this.setState({ stockLocation: this.state.stockLocation = y });
            } else {
                this.setState({ stockLocation: this.state.stockLocation + 3 });
            }
            console.log('this.state.stockLocation = ' + this.state.stockLocation);

        } else if (stockType === 3) {
            console.log('Increment Clicked, Changing this.state.stockLocation by up4');
            if (this.state.stockLocation + 4 > 25) {
                const y = (((this.state.stockLocation + 4) - 25) * -1) + 25;
                this.setState({ stockLocation: this.state.stockLocation = y });
            } else {
                this.setState({ stockLocation: this.state.stockLocation + 4 });
            }
            console.log('this.state.stockLocation = ' + this.state.stockLocation);

        } else if (stockType === 4) {
            console.log('Increment Clicked, Changing this.state.stockLocation by up5');
            if (this.state.stockLocation + 5 > 25) {
                const y = (((this.state.stockLocation + 5) - 25) * -1) + 25;
                this.setState({ stockLocation: this.state.stockLocation = y });
            } else {
                this.setState({ stockLocation: this.state.stockLocation + 5 });
            }
            console.log('this.state.stockLocation = ' + this.state.stockLocation);

        } else if (stockType === 5) {
            console.log('Increment Clicked, Changing this.state.stockLocation by up20');
            if (this.state.stockLocation + 20 > 25) {
                const y = (((this.state.stockLocation + 20) - 25) * -1) + 25;
                this.setState({ stockLocation: this.state.stockLocation = y });
            } else {
                this.setState({ stockLocation: this.state.stockLocation + 20 });
            }
            console.log('this.state.stockLocation = ' + this.state.stockLocation);

        } else if (stockType === 6) {
            console.log('Increment Clicked, Changing this.state.stockLocation by dwn1');
            if (this.state.stockLocation === -25) {
                this.setState({ stockLocation: this.state.stockLocation + 1 });
            } else {
                this.setState({ stockLocation: this.state.stockLocation - 1 });
            }
            console.log('this.state.stockLocation = ' + this.state.stockLocation);

        } else if (stockType === 7) {
            console.log('Increment Clicked, Changing this.state.stockLocation by dwn2');
            if (this.state.stockLocation - 2 < -25) {
                const y = (((this.state.stockLocation - 2) + 25) * -1) - 25;
                this.setState({ stockLocation: this.state.stockLocation = y });
            } else {
                this.setState({ stockLocation: this.state.stockLocation - 2 });
            }
            console.log('this.state.stockLocation = ' + this.state.stockLocation);

        } else if (stockType === 8) {
            console.log('Increment Clicked, Changing this.state.stockLocation bydwn-3');
            if (this.state.stockLocation - 3 < -25) {
                const y = (((this.state.stockLocation - 3) + 25) * -1) - 25;
                this.setState({ stockLocation: this.state.stockLocation = y });
            } else {
                this.setState({ stockLocation: this.state.stockLocation - 3 });
            }
            console.log('this.state.stockLocation = ' + this.state.stockLocation);

        } else if (stockType === 9) {
            console.log('Increment Clicked, Changing this.state.stockLocation by dwn4');
            if (this.state.stockLocation - 4 < -25) {
                const y = (((this.state.stockLocation - 4) + 25) * -1) - 25;
                this.setState({ stockLocation: this.state.stockLocation = y });
            } else {
                this.setState({ stockLocation: this.state.stockLocation - 4 });
            }
            console.log('this.state.stockLocation = ' + this.state.stockLocation);

        } else if (stockType === 10) {
            console.log('Increment Clicked, Changing this.state.stockLocation by dwn5');
            if (this.state.stockLocation - 5 < -25) {
                const y = (((this.state.stockLocation - 5) + 25) * -1) - 25;
                this.setState({ stockLocation: this.state.stockLocation = y });
            } else {
                this.setState({ stockLocation: this.state.stockLocation - 5 });
            }
            console.log('this.state.stockLocation = ' + this.state.stockLocation);

        } else if (stockType === 11) {
            console.log('Increment Clicked, Changing this.state.stockLocation by dwn20');
            if (this.state.stockLocation - 20 < -25) {
                const y = (((this.state.stockLocation - 20) + 25) * -1) - 25;
                this.setState({ stockLocation: this.state.stockLocation = y });
            } else {
                this.setState({ stockLocation: this.state.stockLocation - 20 });
            }
            console.log('this.state.stockLocation = ' + this.state.stockLocation);

        } else {
            console.log('Error: Method:handleStockPriceIncrement - stockType not valid')
        }
        setTimeout(() => this.stockLocationColorDecider(), 10)

    }



    /*
    removespaces() {
        let str = "a b c d\te\nf\vg"
 
        let spaceCharacters = new array(256)
        spaceCharacters[" "] = true
        spaceCharacters["\n"] = true
        spaceCharacters["\v"] = true
        spaceCharacters["\t"] = true
 
        let out = ""
        for (let i = 0; i < str.length(); i++) {
            let c = str[i]
            let isSpace = spaceCharacters[c]
            if (isSpace) {
            } else {
                out = out + c
            }
        }
 
    }*/
}




