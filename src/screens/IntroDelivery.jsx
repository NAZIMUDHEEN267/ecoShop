import React, { Component } from 'react'
import IntroItems from '../components/IntroItems'
import Delivery from "../assets/svg/delivery.svg";
import { navigation } from '../constants';

export class IntroDelivery extends Component {
    constructor(props) {
        super(props);
    }

    handleEvent() {
        this.props.navigation.navigate(navigation.HOME);
    }

    render() {
        return <IntroItems svg={Delivery} event={this.handleEvent} title={"Fast Delivery"} />
    }
}

export default IntroDelivery;