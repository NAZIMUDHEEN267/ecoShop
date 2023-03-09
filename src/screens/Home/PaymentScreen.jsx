import { useStripe, CardField } from "@stripe/stripe-react-native";
import { View, Text, Alert } from 'react-native'
import React from 'react'
import { TouchableOpacity } from "react-native-gesture-handler";

const PaymentScreen = () => {
    const { confirmPayment } = useStripe();

    return (
        <View>
            <TouchableOpacity onPress={confirmPayment}>
                <Text>helk</Text>
            </TouchableOpacity>

            <CardField 
                postalCodeEnabled={false}
                style={{
                    height: 50,
                    width: "100%"
                }}
            />
        </View>
    )
}

export default PaymentScreen