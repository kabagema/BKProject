import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";
const Tab = createBottomTabNavigator();

// Bottom Nav

function MyTabs() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
				/>
				<Tab.Screen
					name="Log Out"
					component={LogOutScreen}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
