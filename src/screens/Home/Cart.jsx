import React, { Component } from 'react'
import tw from "twrnc";
import { initPaymentSheet, presentPaymentSheet } from '@stripe/stripe-react-native';
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from '../../redux/slices/product';
import { spaces } from '../../constants';
import { Alert } from 'react-native';
import CartItem from '../../components/CartItem';
import { ScrollView } from 'react-native-gesture-handler';

export class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            amount: 10
        }

        this.fetchPaymentSheetParams = this.fetchPaymentSheetParams.bind(this);
        this.initializePaymentSheet = this.initializePaymentSheet.bind(this);
        this.openPaymentSheet = this.openPaymentSheet.bind(this);
    }

    componentDidMount() {
        this.initializePaymentSheet();
        this.setState({ ...this.state, data: this.props.productData.cart });
    }

    callback() {
        this.setState({ ...this.state, data: this.props.productData.cart });
    }

    async fetchPaymentSheetParams() {
        const response = await fetch("http://10.0.2.2:3000/payment_sheet",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    amount: this.state.amount
                })
            });

        const { paymentIntent, ephemeralKey, customer } = await response.json();

        return {
            paymentIntent,
            ephemeralKey,
            customer,
        };
    }

    initializePaymentSheet = async () => {
        const {
            paymentIntent,
            ephemeralKey,
            customer,
        } = await this.fetchPaymentSheetParams();

        const { error } = await initPaymentSheet({
            merchantDisplayName: "Example, Inc.",
            customerId: customer,
            customerEphemeralKeySecret: ephemeralKey,
            paymentIntentClientSecret: paymentIntent,
            allowsDelayedPaymentMethods: true,
            defaultBillingDetails: {
                name: 'Jane Doe',
            }
        });
    };


    async openPaymentSheet(amount) {
        // this.setState({...this.state, amount})
        const { error } = await presentPaymentSheet();

        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
            Alert.alert('Success', 'Your order is confirmed!');
        }
    }

    render() {
        return (
            <ScrollView style={tw`flex-1 ${spaces['p-normal']}`}>
                {
                    this.state.data.map((product, i) => <CartItem key={i} item={product} callback={this.callback.bind(this)} openSheet={this.openPaymentSheet.bind(this)}/>)
                }
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);