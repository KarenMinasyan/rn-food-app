import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StackNavigator } from './navigations/StackNavigator';
import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store';

const App = () => {
	return (
		<>
			<StatusBar style='light'/>
			<Provider store={store}>
				<FavoritesContextProvider>
					<NavigationContainer>
						<StackNavigator/>
					</NavigationContainer>
				</FavoritesContextProvider>
			</Provider>
		</>
	);
}

export default App;

const styles = StyleSheet.create({
	container: {},
});
