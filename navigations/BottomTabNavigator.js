import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import { Ionicons } from '@expo/vector-icons';
import WelcomeScreen from '../screens/WelcomeScreen';
import UserScreen from '../screens/UserScreen';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
	return (
		<BottomTab.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: '#3c0a6b' },
				headerTintColor: 'white',
				tabsContentSize: { backgroundColor: '#351401' },
				tabBarInactiveTintColor: 'white',
				tabBarActiveTintColor: '#e4baa1',
				tabBarStyle: { backgroundColor: '#351401' },
			}}
			sceneContainerStyle ={{ backgroundColor: '#3f2f25' }}
		>
			<BottomTab.Screen
				name='Categories'
				component={CategoriesScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='albums' color={color} size={size}/>
					)
				}}
			/>
			<BottomTab.Screen
				name='Home'
				component={WelcomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='home' color={color} size={size}/>
					)
				}}
			/>
			<BottomTab.Screen
				name='User'
				component={UserScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='person' color={color} size={size}/>
					)
				}}
			/>
		</BottomTab.Navigator>
	)
}
