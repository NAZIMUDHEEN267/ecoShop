import { Text, View, TouchableOpacity, Image, Button } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc";
import { CardField, confirmPayment, initPaymentSheet, presentPaymentSheet } from '@stripe/stripe-react-native';
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from '../../redux/slices/product';
import { typography } from '../../theme';
import { colors, navigation, spaces } from '../../constants';
import { Icon } from 'react-native-elements';
import { Alert } from 'react-native';

export class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            key: ""
        }

        this.fetchPaymentSheetParams = this.fetchPaymentSheetParams.bind(this);
        this.initializePaymentSheet = this.initializePaymentSheet.bind(this);
        this.openPaymentSheet = this.openPaymentSheet.bind(this);

    }
    
    componentDidMount() {
        this.initializePaymentSheet();
    }

    async fetchPaymentSheetParams() {
        const response = await fetch("http://10.0.2.2:3000/payment_sheet",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    amount: 232
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


    async openPaymentSheet() {
        const { error } = await presentPaymentSheet();

        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
            Alert.alert('Success', 'Your order is confirmed!');
        }
    }
   
    render() {
        return (
            <View style={tw`flex-1  ${spaces['p-normal']} h-full w-full items-center ${this.props.productData.cart.length > 0 && "justify-center"}`}>
                
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);