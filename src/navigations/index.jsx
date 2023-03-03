import { NavigationContainer } from "@react-navigation/native";
import IntroNavigation from "./IntroNavigation";

export default function MainNavigator () {
    return (
        <NavigationContainer>
            <IntroNavigation />
        </NavigationContainer>
    )
}