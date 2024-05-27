// import * as React from 'react';
// import { View, Text, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
// import CustomCalendar from 'react-native-calendars/src/calendar';
// import { useNavigation, useFocusEffect } from '@react-navigation/native'; // Import useNavigation and useFocusEffect hooks
// import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from Expo icons
// // import { useNavigation } from '@react-navigation/native';


// export default function CalendarScreen() {
//   const navigation = useNavigation();
//   const [showModal, setShowModal] = React.useState(true);
//   const [showAddEventModal, setShowAddEventModal] = React.useState(false);
//   const [selectedDate, setSelectedDate] = React.useState('');
//   const [event, setEvent] = React.useState('');

//   // Reset the showModal state when the screen is focused
//   useFocusEffect(
//     React.useCallback(() => {
//       setShowModal(true);
//       return () => setShowModal(false); // Clean up function
//     }, [])
//   );

//   const handleAddEvent = () => {
//     // Validate the selectedDate format
//     const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
//     if (!selectedDate || !dateRegex.test(selectedDate)) {
//       Alert.alert('Error', 'Please enter a valid date in YYYY-MM-DD format');
//       return;
//     }
  
//     if (!event) {
//       Alert.alert('Error', 'Please enter an event');
//       return;
//     }
  
//     // Add your logic to add the event to the calendar
//     console.log('Adding event:', { date: selectedDate, event });
//     setSelectedDate('');
//     setEvent('');
//     setShowAddEventModal(false);
//   };
  

//   return (
//     <View style={{ flex: 1 }}>
//       <Modal visible={showModal} animationType='fade' transparent={true}>
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
//           <View style={{ backgroundColor: 'white', borderRadius: 10, width: '85%', height: '65%', padding: 20, position: 'relative' }}>
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.05)', maxHeight: '80%' }}>
//               <CustomCalendar />
//               <TouchableOpacity
//                 onPress={() => setShowAddEventModal(true)}
//                 style={{
//                   position: 'absolute',
//                   bottom: -20,
//                   right: -12,
//                   backgroundColor: '#8EA7E9',
//                   borderRadius: 20,
//                   padding: 10,
//                   width: 40,
//                   height: 40,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <FontAwesome name="plus" size={20} color="white" />
//               </TouchableOpacity>
//             </View>
//             <TouchableOpacity
//               onPress={() => {
//                 setShowModal(false);
//                 navigation.navigate('Home'); // Navigate to 'Home' screen
//               }}
//               style={{
//                 marginTop: 40,
//                 backgroundColor: '#8EA7E9',
//                 borderRadius: 20,
//                 padding: 10,
//                 width: '60%',
//                 alignSelf: 'center',
//                 alignItems: 'center',
//               }}>
//               <Text style={{ color: 'white', fontSize: 16 }}>Close Calendar</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* Modal for adding event */}
//       <Modal visible={showAddEventModal} animationType='slide' transparent={true}>
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
//           <View style={{ backgroundColor: 'white', borderRadius: 10, width: '80%', padding: 20 }}>
//           <Text style={{ fontSize: 16, marginBottom: 10 }}>Add Subject:</Text>
//             <TextInput
//               style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 5, marginBottom: 10 }}
//               value={event}
//               onChangeText={setEvent}
//               placeholder="Enter event description"
//             />
//             <Text style={{ fontSize: 16, marginBottom: 10 }}>Enter Date:</Text>
//             <TextInput
//               style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 5, marginBottom: 10 }}
//               value={selectedDate}
//               onChangeText={setSelectedDate}
//               placeholder="YYYY-MM-DD"
//             />
            
//             <TouchableOpacity
//               onPress={handleAddEvent}
//               style={{
//                 backgroundColor: '#8EA7E9',
//                 borderRadius: 20,
//                 padding: 10,
//                 width: '60%',
//                 alignSelf: 'center',
//                 alignItems: 'center',
//               }}>
//               <Text style={{ color: 'white', fontSize: 16 }}>Add Event</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => setShowAddEventModal(false)}
//               style={{
//                 marginTop: 10,
//                 backgroundColor: '#ccc',
//                 borderRadius: 20,
//                 padding: 10,
//                 width: '60%',
//                 alignSelf: 'center',
//                 alignItems: 'center',
//               }}>
//               <Text style={{ color: 'black', fontSize: 16 }}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

import * as React from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import CustomCalendar from 'react-native-calendars/src/calendar';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { DatePickerModal, registerTranslation } from 'react-native-paper-dates';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns'; // Import the format function from date-fns
import axios from 'axios';



const en = {
  save: 'Save',
  close: 'Close',
  selectSingle: 'Select Date',
  selectMultiple: 'Select Dates',
  selectRange: 'Select Range',
  notAccordingToDateFormat: (inputFormat) => `Date format must be ${inputFormat}`,
  mustBeHigherThan: (date) => `Must be later than ${date}`,
  mustBeLowerThan: (date) => `Must be earlier than ${date}`,
  mustBeBetween: (startDate, endDate) => `Must be between ${startDate} - ${endDate}`,
  dateIsDisabled: 'Day is not allowed',
  previous: 'Previous',
  next: 'Next',
  typeInDate: 'Type in date',
  pickDateFromCalendar: 'Pick date from calendar',
  closePicker: 'Close picker'
};

registerTranslation('en', en);

export default function CalendarScreen() {
  const navigation = useNavigation();
  const [showModal, setShowModal] = React.useState(true);
  const [showAddEventModal, setShowAddEventModal] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState('');
  const [event, setEvent] = React.useState('');
  const [eventTime, setEventTime] = React.useState('');
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [showTimePicker, setShowTimePicker] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setShowModal(true);
      return () => setShowModal(false);
    }, [])
  );

  const handleAddEvent = () => {
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    const timeRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i;

    if (!selectedDate || !dateRegex.test(selectedDate)) {
      Alert.alert('Error', 'Please select a valid date');
      return;
    }
    
    if (!eventTime || !timeRegex.test(eventTime)) {
      Alert.alert('Error', 'Please enter a valid time in HH:MM AM/PM format');
      return;
    }
  
    if (!event) {
      Alert.alert('Error', 'Please enter an event');
      return;
    }
    setSelectedDate('');
    setEvent('');
    setEventTime('');
    setShowAddEventModal(false);
  

  var events={ date: selectedDate, time: eventTime, event };
console.log("Events" ,events);

axios.post('http://192.168.42.182:5001/minordb', events)
      .then(res => {
        console.log('addition successful');
        // props.navigation.navigate('Home');
      })
      .catch(err => console.log(err));
  

};


  const onConfirmDate = (params) => {
    const formattedDate = format(params.date, 'dd-MM-yyyy'); // Format the date in DD-MM-YYYY
    setSelectedDate(formattedDate);
    setShowDatePicker(false);
  };

  const onConfirmTime = (time) => {
    const formattedTime = time.toLocaleTimeString('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true }); // Format the time in Indian format
    setEventTime(formattedTime);
    setShowTimePicker(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal visible={showModal} animationType='fade' transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', borderRadius: 10, width: '85%', height: '65%', padding: 20, position: 'relative' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.05)', maxHeight: '80%' }}>
              <CustomCalendar />
              <TouchableOpacity
                onPress={() => setShowAddEventModal(true)}
                style={{
                  position: 'absolute',
                  bottom: -20,
                  right: -12,
                  backgroundColor: '#8EA7E9',
                  borderRadius: 20,
                  padding: 10,
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesome name="plus" size={20} color="white" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                setShowModal(false);
                navigation.navigate('Home');
              }}
              style={{
                marginTop: 40,
                backgroundColor: '#8EA7E9',
                borderRadius: 20,
                padding: 10,
                width: '60%',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 16 }}>Close Calendar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal for adding event */}
      <Modal visible={showAddEventModal} animationType='slide' transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', borderRadius: 10, width: '80%', padding: 20 }}>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>Add Subject:</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: '#0766ad', borderRadius: 5, padding: 5, marginBottom: 10 }}
              value={event}
              onChangeText={setEvent}
              placeholder="Enter event description"
            />
            <Text style={{ fontSize: 16, marginBottom: 10 }}>Enter Date:</Text>
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={{
                borderWidth: 1,
                borderColor: '#0766ads',
                borderRadius: 5,
                padding: 10,
                marginBottom: 10,
                justifyContent: 'center',
              }}>
              <Text>{selectedDate ? selectedDate : 'Select Date'}</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>Enter Time:</Text>
            <TouchableOpacity
              onPress={() => setShowTimePicker(true)}
              style={{
                borderWidth: 1,
                borderColor: '#0766ad',
                borderRadius: 5,
                padding: 10,
                marginBottom: 10,
                justifyContent: 'center',
              }}>
              <Text>{eventTime ? eventTime : 'Select Time'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleAddEvent}
              style={{
                backgroundColor: '#8EA7E9',
                borderRadius: 20,
                padding: 10,
                width: '60%',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 16 }}>Add Event</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowAddEventModal(false)}
              style={{
                marginTop: 10,
                backgroundColor: '#ccc',
                borderRadius: 20,
                padding: 10,
                width: '60%',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'black', fontSize: 16 }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <DatePickerModal
        locale="en"
        mode="single"
        visible={showDatePicker}
        onDismiss={() => setShowDatePicker(false)}
        date={new Date()}
        onConfirm={onConfirmDate}
      />

      <DateTimePickerModal
        isVisible={showTimePicker}
        mode="time"
        onConfirm={onConfirmTime}
        onCancel={() => setShowTimePicker(false)}
      />
    </View>
  );
}