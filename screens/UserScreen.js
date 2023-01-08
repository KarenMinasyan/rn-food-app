import React from 'react';
import { Button, Text, View } from 'react-native';

const UserScreen = ({ navigation }) => {

	const openDrawerHandler = () => {
			navigation.toggleDrawer();
	};

	return (
		<View>
			<Text>user screen</Text>
			<Button title='open drawer' onPress={openDrawerHandler} />
		</View>
	);
};

export default UserScreen;
