import React, { Component } from 'react'
import IntroItems from '../../components/IntroItems'
import Delivery from "../../assets/svg/delivery.svg";
import { navigation } from '../../constants';
import { mapDispatchToProps, mapStateToProps } from '../../redux/slices/userData';
import { connect } from "react-redux";
import Realm from "../../config/schema"

export class IntroDelivery extends Component {
    constructor(props) {
        super(props);
    
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent() {
        this.props.navigation.navigate(navigation.BOTTOM_TAB_NAVIGATOR);
        Realm.write(() => {
            const login = Realm.objects("Login")[0];
            login.showHome = true ;
        })
    }

    render() {
        return <IntroItems svg={Delivery} event={this.handleEvent} title={"Fast Delivery"} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroDelivery);