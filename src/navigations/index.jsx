import { NavigationContainer } from "@react-navigation/native";
import IntroNavigation from "./IntroNavigation";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function MainNavigator () {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <IntroNavigation />
            </SafeAreaProvider>
        </NavigationContainer>
    )
}