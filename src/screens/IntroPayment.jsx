import React, { Component } from 'react'
import IntroItems from '../components/IntroItems'
import Payment from "../assets/svg/payment.svg";
import { navigation } from '../constants';

export class IntroPayment extends Component {
    constructor(props) {
        super(props);
    }

    handleEvent() {
        this.props.navigation.navigate(navigation.INTRO_DELIVERY);
    }

    render() {
        return <IntroItems svg={Payment} event={this.handleEvent} title={"Make Your Payment"} />
    }
}

export default IntroPayment