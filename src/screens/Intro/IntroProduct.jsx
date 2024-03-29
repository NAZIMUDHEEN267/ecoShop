import React, { Component } from 'react'
import IntroItems from '../../components/IntroItems'
import Shopping from "../../assets/svg/shopping.svg";
import { navigation } from '../../constants';

export class IntroProduct extends Component {
    constructor(props) {
        super(props);

        this.handleEvent = this.handleEvent.bind(this);
    }
    
    handleEvent() {
        this.props.navigation.navigate(navigation.INTRO_PAYMENT);
    }
    
    render() {
    return <IntroItems svg={Shopping} event={this.handleEvent} title={"Choose Product"} nav={this.props.navigation}/>
  }
}

export default IntroProduct