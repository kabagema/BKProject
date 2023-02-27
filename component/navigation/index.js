import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { signIn } from "./screens/SignIn"
import {CreateAccount} from "./screens/SignUp"

const AuthStack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <AuthStack.navigator>
            <AuthStack.Screen name = "SignIn" component={signIn} />
            <AuthStack.Screen name = "SignUp" component={CreateAccount} />
        </AuthStack.navigator>
    </NavigationContainer>
);
