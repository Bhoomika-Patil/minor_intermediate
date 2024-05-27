import * as React from 'react'; 
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons'; 

// Importing screens
import ProfileScreen from './Profile';
import Notifications from './Notifications';
import RateAppScreen from './RateApp';

const Drawer = createDrawerNavigator();

export function DrawerContent({ navigation }) {
  return (
    <View style={styles.drawerContent}>
      <View style={styles.timeTrekSection}>
        <Text style={styles.timeTrekText}>Settings</Text>
      </View>

      <View style={styles.otherSections}>
        <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Profile')}>
          <FontAwesome5 name="user" size={20} color="#8EA7E9" /> 
          <Text style={styles.drawerItemText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Notifications')}>
          <FontAwesome5 name="bell" size={20} color="#8EA7E9" /> 
          <Text style={styles.drawerItemText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('RateApp')}>
          <FontAwesome5 name="star" size={20} color="#8EA7E9" /> 
          <Text style={styles.drawerItemText}>Rate App</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  timeTrekSection: {
    backgroundColor: '#8EA7E9',
    height: '15%',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  timeTrekText: {
    fontSize: 30,
    position:'absolute',
    bottom: 10,
    left: 10,
    fontWeight: 'normal',
  },
  otherSections: {
    flex: 1,
    paddingHorizontal: 10,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  drawerItemText: {
    fontSize: 20,
    marginLeft: 15,
  },
});