import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './navigations/StackNavigator';
import FavoritesContextProvider from './store/context/favorites-context';

const App = () => {
	return (
		<>
			<StatusBar style='light'/>
			<FavoritesContextProvider>
				<NavigationContainer>
					<StackNavigator />
				</NavigationContainer>
			</FavoritesContextProvider>
		</>
	);
}

export default App;

const styles = StyleSheet.create({
	container: {},
});
