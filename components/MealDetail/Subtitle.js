import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Subtitle = ({ children }) => (
	<View style={styles.subtitleContainer}>
		<Text style={styles.subtitle}>{children}</Text>
	</View>
	);

export default Subtitle;

const styles = StyleSheet.create({
	subtitle: {
		color: '#e2b497',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	subtitleContainer: {
		padding: 6,
		marginHorizontal: 12,
		marginVertical: 4,
		borderBottomColor: '#e2b497',
		borderBottomWidth: 2
	}
});