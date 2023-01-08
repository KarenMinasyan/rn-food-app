import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './navigations/StackNavigator';

const App = () => {
	return (
		<>
			<StatusBar style='light'/>
			<NavigationContainer>
				<StackNavigator />
			</NavigationContainer>
		</>
	);
}

export default App;

const styles = StyleSheet.create({
	container: {},
});
