import React from 'react';
import { Button, Text, View } from 'react-native';

const FavoritesScreen = ({ navigation }) => {
	const openDrawerHandler = () => {
		navigation.toggleDrawer();
	};
	return (
		<View>
			<Text>the favorites screen</Text>
			<Button title='open drawer' onPress={openDrawerHandler} />
		</View>
	);
};

export default FavoritesScreen;
