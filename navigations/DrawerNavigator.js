import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import FavoritesScreen from '../screens/FavoritesScreen';
import { BottomTabNavigator } from './BottomTabNavigator';

const  Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
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
					drawerIcon: ({ color, size }) => (
						<Ionicons name='list' color={color} size={size}/>
					)
				}}
			/>
			<Drawer.Screen
				name='Favorites'
				component={FavoritesScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons name='star' color={color} size={size}/>
					)
				}}
			/>
		</Drawer.Navigator>
	)
}
