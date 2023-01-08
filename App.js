import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
//import WelcomeScreen from './screens/WelcomeScreen';
//import UserScreen from './screens/UserScreen';

const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<>
			<StatusBar style='light'/>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='MealsCategories'
					screenOptions={{
						headerStyle: { backgroundColor: '#351401' },
						headerTintColor: 'white',
						contentStyle: { backgroundColor: '#3f2f25' }
					}}
				>
					<Stack.Screen
						name='MealsCategories'
						component={CategoriesScreen}
						options={{ title: 'All Categories' }}
					/>
					<Stack.Screen
						name='MealsOverview'
						component={MealsOverviewScreen}
						// options={({ route, navigation }) => {
						// 	const catId = route.params.categoryId;
						// 	return { title: catId }
						// }}
					/>
					<Stack.Screen
						name='MealDetail'
						component={MealDetailScreen}
						// options={{ headerRight: () => <Button title='Tap me!' onPress={} /> }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
			{/*<NavigationContainer>*/}
			{/*<Drawer.Navigator*/}
			{/*	screenOptions={{*/}
			{/*		headerStyle: { backgroundColor: '#3c0a6b' },*/}
			{/*		headerTintColor: 'white',*/}
			{/*		drawerActiveBackgroundColor: '#f0e1ff',*/}
			{/*		drawerActiveTintColor: '#3c0a6b',*/}
			{/*		//drawerStyle: { backgroundColor: '#ccc' }*/}
			{/*	}}*/}
			{/*>*/}
			{/*	<Drawer.Screen*/}
			{/*		name='Welcome' component={WelcomeScreen}*/}
			{/*		options={{*/}
			{/*			drawerLabel: 'Welcome Screen',*/}
			{/*     drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />  */}
			{/*		}}*/}
			{/*	/>*/}
			{/*	<Drawer.Screen name='User' component={UserScreen}
			{/*		options={{*/}
			{/*     drawerIcon: ({color, size}) => <Ionicons name='person' color={color} size={size} />  */}
			{/*		}}*/}
			{/*/>*!/*/}
			{/*</Drawer.Navigator>*/}
			{/*</NavigationContainer>*/}
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
