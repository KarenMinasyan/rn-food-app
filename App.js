import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import UserScreen from './screens/UserScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: '#351401' },
				headerTintColor: 'white',
				sceneContainerStyle: { backgroundColor: '#3f2f25' },
				drawerContentStyle: { backgroundColor: '#351401' },
				drawerInactiveTintColor: 'white',
				drawerActiveTintColor: '#351401',
				drawerActiveBackgroundColor: '#e4baa1'
			}}
		>
			<Drawer.Screen
				name='Categories Screen'
				component={BottomTabNavigator}
				options={{
					title: 'All Categories',
					drawerIcon: ({color, size}) => (
						<Ionicons name='list' color={color} size={size} />
					)
			}}
			/>
			<Drawer.Screen
				name='Favorites'
				component={FavoritesScreen}
				options={{
					drawerIcon: ({color, size}) => (
						<Ionicons name='star' color={color} size={size} />
					)
				}}
			/>
		</Drawer.Navigator>
	)
}

const BottomTabNavigator  = () => {
	return (
		<BottomTab.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: '#3c0a6b' },
				headerTintColor: 'white',
				sceneContainerStyle: { backgroundColor: 'red' },
				tabsContentSize: { backgroundColor: '#351401' },
				tabBarInactiveTintColor: '#368dff',
				tabBarActiveTintColor: '#f54242',
			}}
		>
			<BottomTab.Screen
				name='Categories'
				component={CategoriesScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='albums' color={color} size={size} />
					)
			}}
			/>
			<BottomTab.Screen
				name='Home'
				component={WelcomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='home' color={color} size={size} />
					)
				}}
			/>
			<BottomTab.Screen
				name='User'
				component={UserScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='person' color={color} size={size} />
					)
				}}
			/>
		</BottomTab.Navigator>
	)
}

export default function App() {
	return (
		<>
			<StatusBar style='light'/>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: '#351401' },
						headerTintColor: 'white',
						contentStyle: { backgroundColor: '#3f2f25' }
					}}
				>
					<Stack.Screen
						name='Drawer'
						component={DrawerNavigator}
						options={{ headerShown: false }}
					/>
					<Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
					<Stack.Screen
						name='MealDetail'
						component={MealDetailScreen}
						options={{ title: 'About the Meal' }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
