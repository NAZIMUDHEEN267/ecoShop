import { Animated, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react';
import Shopping from "../assets/svg/shopping.svg";
import { colors, spaces } from '../constants';
import tw from "twrnc";
import { StyledComponent } from "nativewind";
import { typography } from '../theme';

export class IntroItems extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledComponent component={View} style={tw`${spaces['p-normal']}`}>
                {
                    this.props.title === "Choose Product" && 
                    (<StyledComponent component={Text} style={tw`text-right ${typography.smText}`}>
                        Skip
                    </StyledComponent>)
                }
                <this.props.svg height={spaces.heightHalf} width={spaces.width - 32} />
                <StyledComponent component={View} style={{ height: spaces.heightHalf, width: spaces.width }}>
                    <StyledComponent component={Text} style={[tw`${typography.bgText} text-center mt-4`, { color: colors.BOX_BLACK }]}>
                        {this.props.title}
                    </StyledComponent>
                    <StyledComponent component={Text} style={[tw`${typography.smText}`, { color: colors.TEXT_LIGHT }]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis tempora repudiandae accusantium! Itaque suscipit animi fugit, odit magnam eos, totam quidem autem earum nam at. Iure et commodi eius.
                    </StyledComponent>
                    <StyledComponent component={Text} style={[tw`absolute bottom-1/3 z-10 left-41 ${typography.smText}`, { color: colors.WHITE_COLOR }]}>
                        Next
                    </StyledComponent>
                    <StyledComponent component={TouchableOpacity} onPress={this.props.event} style={[tw`flex-1 rounded-full items-center justify-center`, { width: spaces.widthSix, backgroundColor: colors.PRIMARY_COLOR, transform: [{ translateX: 62 }, { translateY: 70 }] }]} />
                </StyledComponent>
            </StyledComponent>
        )
    }
}

export default IntroItems