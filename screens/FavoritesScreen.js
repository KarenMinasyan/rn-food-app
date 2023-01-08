import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = ({ navigation }) => {
	const favoriteMealsCtx = useContext(FavoritesContext);

	const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

	const openDrawerHandler = () => {
		navigation.toggleDrawer();
	};

	if (!Boolean(favoriteMeals.length)) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>You have no favorite meals yet.</Text>
			</View>
		)
	}

	return (
		<>
			<Button title='open drawer' onPress={openDrawerHandler}/>
			<MealsList items={favoriteMeals}/>
		</>
	);
};

export default FavoritesScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white'
	}
});
