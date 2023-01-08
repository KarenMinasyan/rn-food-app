import React, { useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../../data/dummy-data';
import MealsList from '../../components/MealsList/MealsList';
//import { useRoute } from '@react-navigation/native';

const MealsOverviewScreen = ({ route, navigation }) => {
	//const route = useRoute(); route.params.categoryId;
	const catId = route.params.categoryId;
	const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(catId) >= 0);

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(category => category.id === catId).title;
		navigation.setOptions({ title: categoryTitle });
	}, [catId, navigation]);

  return <MealsList items={displayedMeals} />
};

export default MealsOverviewScreen;
