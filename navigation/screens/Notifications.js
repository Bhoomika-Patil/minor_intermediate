import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Vibration } from 'react-native';

export default function Notifications() {
  const [isTimeTrekReminderEnabled, setTimeTrekReminderEnabled] = useState(false);
  const [isMessageNotificationsEnabled, setMessageNotificationsEnabled] = useState(true);
  const [isVibrateEnabled, setVibrateEnabled] = useState(true);

  const toggleTimeTrekReminder = () => {
    setTimeTrekReminderEnabled(prevValue => !prevValue);
  };

  const toggleMessageNotifications = () => {
    setMessageNotificationsEnabled(prevValue => !prevValue);
  };

  const toggleVibrate = () => {
    setVibrateEnabled(prevValue => !prevValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subheading}>Daily reminder</Text>

      <View style={styles.notificationItem}>
        <Text style={styles.notificationLabel}>Time-trek reminder</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#8EA7E9' }}
          thumbColor={isTimeTrekReminderEnabled ? '#0766ad' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTimeTrekReminder}
          value={isTimeTrekReminderEnabled}
        />
      </View>

      <View style={styles.notificationItem}>
        <Text style={styles.notificationLabel}>Task Notifications</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#8EA7E9' }}
          thumbColor={isMessageNotificationsEnabled ? '#0766ad' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleMessageNotifications}
          value={isMessageNotificationsEnabled}
        />
      </View>

      <View style={styles.notificationItem}>
        <Text style={styles.notificationLabel}>Vibrate</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#8EA7E9' }}
          thumbColor={isVibrateEnabled ? '#0766ad' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleVibrate}
          value={isVibrateEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start', // Align items to the start of the container
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  subheading: {
    fontSize:15,
    fontWeight: 'normal',
    marginBottom: 20,
    color:'#666666'
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  notificationLabel: {
    fontSize: 18,
    marginRight: 10,
  },
});