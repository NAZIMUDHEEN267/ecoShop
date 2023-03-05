import React, { Component } from 'react'
import IntroItems from '../components/IntroItems'
import Delivery from "../assets/svg/delivery.svg";
import { navigation } from '../constants';

export class IntroDelivery extends Component {
    constructor(props) {
        super(props);
    
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent() {
        this.props.navigation.navigate(navigation.BOTTOM_TAB_NAVIGATOR);
    }

    render() {
        return <IntroItems svg={Delivery} event={this.handleEvent} title={"Fast Delivery"} />
    }
}

export default IntroDelivery;