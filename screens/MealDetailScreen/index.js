import React, { useContext, useLayoutEffect } from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MealDetails from '../../components/MealDetails';
import Subtitle from '../../components/MealDetail/Subtitle';
import List from '../../components/MealDetail/List';
import IconButton from '../../components/IconButton';
import { FavoritesContext } from '../../store/context/favorites-context';
import { addFavorite, removeFavorite } from '../../store/redux/favorite/favoriteSlice';
import { MEALS } from '../../data/dummy-data';

const MealDetailScreen = ({ route, navigation }) => {
	const favoriteMealsCtx = useContext(FavoritesContext);
	const  { ids } = useSelector(state => state.favorite);

	const dispatch = useDispatch();

	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
	const mealsFavorite = ids.includes(mealId);

	const changeFavoriteStatusHandler = () => {
		if (mealIsFavorite || mealsFavorite) {
			favoriteMealsCtx.removeFavorite(mealId);
			dispatch(removeFavorite({ id: mealId }));
		} else {
			favoriteMealsCtx.addFavorite(mealId);
			dispatch(addFavorite({ id: mealId }));
		}
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					icon={(mealIsFavorite || mealsFavorite) ? 'star': 'star-outline'}
					color='white'
					onPress={changeFavoriteStatusHandler}
				/>
			)
		});
	}, [navigation, changeFavoriteStatusHandler])

	return (
		<ScrollView style={styles.rootContainer}>
			<Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}/>
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetails
				affordability={selectedMeal.affordability}
				complexity={selectedMeal.complexity}
				duration={selectedMeal.duration}
				textStyle={styles.detailText}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={selectedMeal.ingredients}/>
					<Subtitle>Steps</Subtitle>
					<List data={selectedMeal.steps}/>
				</View>
			</View>
		</ScrollView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
	},
	image: {
		width: '100%',
		height: 350,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		margin: 8,
		textAlign: 'center',
		color: 'white'
	},
	detailText: {
		color: 'white'
	},
	listOuterContainer: {
		alignItems: 'center'
	},
	listContainer: {
		width: '80%',
	}
});
