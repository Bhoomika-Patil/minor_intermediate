import React from 'react';
import { View, Text, Button, Linking, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

const RateAppScreen = () => {
  const handleRatePress = () => {
    // Handle the rate action
    console.log('Rate Pressed');
    // You can implement your own logic for rating the app
  };

  const handleFeedbackPress = () => {
    // Redirect to email for feedback
    Linking.openURL('mailto:support@example.com?subject=Feedback%20for%20App');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enjoying our app?</Text>
      <Text style={styles.subtitle}>Please take a moment to rate it.</Text>
      <AirbnbRating
        count={5}
        reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
        defaultRating={5}
        size={25}
      />
      <View style={styles.buttonContainer}>
        <Button title="Rate" onPress={handleRatePress}  color="#8EA7E9" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Give Feedback" onPress={handleFeedbackPress} color="#8EA7E9"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    // backgroundColor: '#00000', // Set background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333', // Set text color
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666666', // Set text color
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 50,
    width: '50%', // Set button container width
  },
});

export default RateAppScreen;