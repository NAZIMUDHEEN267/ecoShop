import { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import { colors, navigation, spaces } from "../constants";
import { StyledComponent } from "nativewind";
import Icon from "react-native-vector-icons/Fontisto";
import tw from "twrnc";
import typography from "../theme/typography";

export class Intro extends Component {
  render() {
    return (
      <StyledComponent component={View} style={[tw`flex-1`, {backgroundColor: colors.PRIMARY_COLOR}]}>
        <StyledComponent component={View} style={tw`h-10/12 items-center justify-center`}>
          <Icon name="opencart" size={spaces.widthSix} color={"rgba(0,0,0,.2)"}/>
        </StyledComponent>
        <StyledComponent component={View} style={tw`flex-1 items-center justify-center`}>
          <StyledComponent component={View} style={tw`flex-row items-center`}>
            <Icon name="opencart" size={25} color={colors.WHITE_COLOR} />
            <StyledComponent component={Text} style={[tw`${typography.bgText} ml-2`, { color: colors.WHITE_COLOR }]} onPress={() => this.props.navigation.navigate(navigation.INTRO_PRODUCT)}>
              Eco Shop
            </StyledComponent>
          </StyledComponent>
          <StyledComponent component={Text} style={[tw`${typography.smText}`, {color: colors.PRIMARY_LIGHT}]}>
              Buy groceries and feed yourself
          </StyledComponent>
        </StyledComponent>
      </StyledComponent>
    )
  }
}

export default Intro