import { CardField, CardFieldInput, useStripe, PaymentSheet } from "@stripe/stripe-react-native";
import { View, Text } from 'react-native'
import React, {useState} from 'react'

const PaymentScreen = () => {
    const [card, setCard] = useState(CardFieldInput.Details | null);
    const { confirmPayment, handleCardAction } = useStripe();

    return (
       <PaymentSheet />
    )
}

export default PaymentScreen