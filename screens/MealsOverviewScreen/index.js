import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from '../../components/MealItem';
import { MEALS } from '../../data/dummy-data';
//import { useRoute } from '@react-navigation/native';

const MealsOverviewScreen = ({ route }) => {
	//const route = useRoute(); route.params.categoryId;
	const catId = route.params.categoryId;
	const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(catId) >= 0);

	const renderMealItem = (itemData) => {
		const item = itemData.item;
		const mealItemProps = {
			title: item.title,
			imageUrl: item.imageUrl,
			affordability: item.affordability,
			complexity: item.complexity,
			duration: item.duration,
		};

		return <MealItem {...mealItemProps} />
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={item => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	}
});
