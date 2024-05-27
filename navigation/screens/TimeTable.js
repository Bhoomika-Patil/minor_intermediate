//this is for backend code

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';

// const DaySlot = ({ day }) => (
//   <View style={styles.cell}>
//     <Text style={styles.day}>{day}</Text>
//   </View>
// );

// const TimeTable = () => {
//   const [daysOfWeek, setDaysOfWeek] = useState([]);
//   const [subjects, setSubjects] = useState([]);

//   useEffect(() => {
//     // Fetch days of the week
//     const fetchDaysOfWeek = async () => {
//       try {
//         // Make API call to fetch days of the week
//         const response = await fetch('your-api-url/daysOfWeek');
//         const data = await response.json();
//         setDaysOfWeek(data);
//       } catch (error) {
//         console.error('Error fetching days of the week:', error);
//       }
//     };

//     // Fetch subjects
//     const fetchSubjects = async () => {
//       try {
//         // Make API call to fetch subjects
//         const response = await fetch('your-api-url/subjects');
//         const data = await response.json();
//         setSubjects(data);
//       } catch (error) {
//         console.error('Error fetching subjects:', error);
//       }
//     };

//     fetchDaysOfWeek();
//     fetchSubjects();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {/* Render day slots */}
//       {daysOfWeek.map((day, index) => (
//         <DaySlot key={index} day={day} />
//       ))}

//       {/* Render dynamic subject slots */}
//       {daysOfWeek.map((day, index) => (
//         subjects.map((subject, subIndex) => (
//           <View key={`${index}-${subIndex}`} style={styles.cell}>
//             <Text>{subject}</Text>
//           </View>
//         ))
//       ))}
//     </View>
//   );
// };

// const windowWidth = Dimensions.get('window').width;

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 10,
//     width: windowWidth / 1,
//     height: windowWidth / 1, // Adjust the width as per requirement
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#f8f8f8',
//     overflow: 'hidden',
//     flexDirection: 'row',
//   },
//   cell: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//     paddingVertical: 10,
//   },
//   day: {
//     fontWeight: 'bold',
//   },
// });

// export default TimeTable;

/////////////////////////////////////////////////
//code without thumbsup

// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// const DaySlot = ({ day, subjects }) => (
//   <View style={styles.row}>
//     <Text style={[styles.cell, styles.day,{color:'#0766ad',textAlign:'left',fontWeight:'bold'}]}>{day}</Text>
//     {subjects.map((sub, index) => (
//       <View key={index} style={[styles.cell, styles.daySlot]}>
//         {sub ? <Text>{sub}</Text> : <Text>-</Text>}
//       </View>
//     ))}
//   </View>
// );

// const HeaderRow = ({ subjects }) => (
//   <View style={styles.headerRow}>
//     <Text style={[styles.cell, styles.heading, {color:'#0766ad',textAlign:'left',fontSize: 16,fontWeight:'bold'}]}>Days</Text>
//     {subjects.map((subject, index) => (
//       <View key={index} style={[styles.cell, styles.heading, styles.subjectColumn]}>
//         <Text>{subject}</Text>
//       </View>
//     ))}
//   </View>
// );

// const TimeTable = () => {
//   // Define the days of the week
//   const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//   // Define the subjects
//   const subjects = ['Subject 1', 'Subject 2', 'Subject 3'];

//   // Create an array of objects with day and subject data
//   const data = daysOfWeek.map(day => ({
//     day,
//     subjects: Array(subjects.length).fill(''), // Fill the array with empty strings initially
//   }));

//   return (
//     <View style={styles.container}>
//       {/* Header row */}
//       <HeaderRow subjects={subjects} />

//       {/* Render each row */}
//       {data.map((row, index) => (
//         <DaySlot key={index} day={row.day} subjects={row.subjects} />
//       ))}
//     </View>
//   );
// };

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: windowWidth * 0.02,
//     width: windowWidth * 1,
//     height: windowHeight * 0.5, // Adjust the height as per requirement
//     borderRadius: 10,
//     borderWidth: 8,
//     borderColor: '#D3DDF6',
//     backgroundColor: '#f8f8f8',
//     overflow: 'hidden',
//   },
//   headerRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     borderBottomWidth: 2,
//     borderColor: '#0766ad',
//     paddingVertical: windowHeight * 0.02,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     borderBottomWidth: 2,
//     borderColor: '#0766ad',
//     paddingVertical: windowHeight * 0.01,
//         paddingBottom:13,
//         paddingTop:13,
// //   },
//   cell: {
//     flex: 1,
//     textAlign: 'center',
//   },
//   day: {
//     fontWeight: 'bold',
//   },
//   daySlot: {
//     padding: windowHeight * 0.007,
//     borderRadius: 10,
//     backgroundColor: '#D3DDF6', // Changed background color
//     elevation: 5,
//     paddingHorizontal: windowWidth * 0.02,
//     marginLeft: windowWidth * 0.01,
//   },
//   heading: {
//     fontWeight: 'bold',
//   },
//   subjectColumn: {
//     borderLeftWidth: 0,
//     borderColor: 'transparent', // Adjusted border color
//   },
// });

// export default TimeTable;

///////////////////////////////////////////
//code with thumbsup

// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

// const DaySlot = ({ day, subjects }) => (
//   <View style={styles.row}>
//     <Text style={[styles.cell, styles.day,{color:'#0766ad',textAlign:'left',fontSize:15,fontWeight:'bold'}]}>{day}</Text>
//     {subjects.map((sub, index) => (
//       <View key={index} style={[styles.cell, styles.daySlot, index !== subjects.length - 1 && styles.verticalBorder]}>
//         {sub ? <Text>{sub}</Text> : <Text>-</Text>}
//       </View>
//     ))}
//   </View>
// );

// const HeaderRow = ({ subjects }) => (
//   <View style={styles.headerRow}>
//     <Text style={[styles.cell, styles.heading,{color:'#0766ad',textAlign:'left',fontSize: 16,fontWeight:'bold'}]}>Days</Text>
//     {subjects.map((subject, index) => (
//       <View key={index} style={[styles.cell, styles.heading, styles.subjectColumn, index !== subjects.length - 1 && styles.verticalBorder]}>
//         <Text>{subject}</Text>
//       </View>
//     ))}
//   </View>
// );

// const TimeTable = ({ navigation }) => {
//   // Define the days of the week
//   const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

//   // Define the subjects
//   const subjects = ['Subject 1', 'Subject 2', 'Subject 3','Subject 4'];

//   // Create an array of objects with day and subject data
//   const data = daysOfWeek.map(day => ({
//     day,
//     subjects: Array(subjects.length).fill(''), // Fill the array with empty strings initially
//   }));

//   return (
//     <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//       <View style={styles.container}>
//         {/* Header row */}
//         <HeaderRow subjects={subjects} />

//         {/* Render each row */}
//         {data.map((row, index) => (
//           <DaySlot key={index} day={row.day} subjects={row.subjects} />
//         ))}

//         {/* Thumbs up button */}
//         <TouchableOpacity style={styles.thumbsUpButton} onPress={() => navigation.navigate('Home')}>
//           <AntDesign name="like1" size={33} color="#0766ad" />
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: windowWidth * 0.02,
//     width: windowWidth * 1,
//     height: windowHeight * 0.6, // Adjust the height as per requirement
//     borderRadius: 8,
//     borderWidth: 8,
//     borderColor: '#D3DDF6',
//     backgroundColor: '#f8f8f8',
//     overflow: 'hidden',
//   },
//   headerRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     borderBottomWidth: 2,
//     borderColor: '#0766ad',
//     paddingVertical: windowHeight * 0.02,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     borderBottomWidth: 2,
//     borderColor: '#0766ad',
//     paddingVertical: windowHeight * 0.01,
//     paddingBottom:12,
//     paddingTop:12,
//   },
//   cell: {
//     flex: 1,
//     textAlign: 'center',
//   },
//   day: {
//     fontWeight: 'bold',
//   },
//   daySlot: {
//     padding: windowHeight * 0.007,
//     borderRadius: 8,
//     backgroundColor: '#D3DDF6', // Changed background color
//     elevation: 2,
//     paddingHorizontal: windowWidth * 0.02,
//     marginLeft: windowWidth * 0.01,
//   },
//   heading: {
//     fontWeight: 'bold',
//   },
//   subjectColumn: {
//     borderLeftWidth: 0,
//     borderColor: 'transparent', // Adjusted border color
//   },
  
//   thumbsUpButton: {
//     position: 'absolute',
//     bottom:0,
//     right: 5,
//     margin: 2,
//   },
// });

// export default TimeTable;


import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// const RegenerateButton = ({ onPress }) => (
//   <TouchableOpacity style={styles.regenerateButton} onPress={onPress}>
//     <AntDesign name="reload1" size={33} color="#0766ad" />
//   </TouchableOpacity>
// );

const DaySlot = ({ day, subjects }) => (
  <View style={styles.row}>
    <Text
      style={[
        styles.cell,
        styles.day,
        {
          color: "#0766ad",
          textAlign: "left",
          fontSize: 15,
          fontWeight: "bold",
        },
      ]}
    >
      {day}
    </Text>
    {subjects && Array.isArray(subjects) && subjects.map((sub, index) => (
      <View
        key={index}
        style={[
          styles.cell,
          styles.daySlot,
          index !== subjects.length - 1 && styles.verticalBorder,
        ]}
      >
        {sub ? <Text>{sub}</Text> : <Text>-</Text>}
      </View>
    ))}
  </View>
);

const HeaderRow = ({ subjects }) => (
  <View style={styles.headerRow}>
    <Text
      style={[
        styles.cell,
        styles.heading,
        {
          color: "#0766ad",
          textAlign: "left",
          fontSize: 16,
          fontWeight: "bold",
        },
      ]}
    >
      Days
    </Text>
    {subjects && Array.isArray(subjects) && subjects.map((subject, index) => (
      <View
        key={index}
        style={[
          styles.cell,
          styles.heading,
          styles.subjectColumn,
          index !== subjects.length - 1 && styles.verticalBorder,
        ]}
      >
        <Text>{subject}</Text>
      </View>
    ))}
  </View>
);

const TimeTable = ({ route }) => {
  const navigation = useNavigation();
  const { classHours, travelHours, studyHours, subjectData, totalVotes, x } = route.params;

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const subjects = subjectData.map(subject => subject.subject);

  const handleThumbsUpPress = () => {
    navigation.navigate('Home', { timetableData: x });
  };
  

  return (
    <View style={styles.container}>
      <HeaderRow subjects={subjects} />
      {daysOfWeek.map((day, index) => (
        <DaySlot key={index} day={day} subjects={x[index]} />
      ))}
      <TouchableOpacity style={styles.thumbsUpButton} onPress={handleThumbsUpPress}>
        <AntDesign name="like1" size={33} color="#0766ad" />
      </TouchableOpacity>
      {/* <RegenerateButton onPress={() => console.log("Regenerate pressed")} /> */}
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowWidth * 0.02,
    width: windowWidth * 1,
    height: windowHeight * 0.6,
    borderRadius: 8,
    borderWidth: 8,
    borderColor: "#D3DDF6",
    backgroundColor: "#f8f8f8",
    overflow: "hidden",
    position: "relative",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderColor: "#0766ad",
    paddingVertical: windowHeight * 0.02,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderColor: "#0766ad",
    paddingVertical: windowHeight * 0.01,
    paddingBottom: 12,
    paddingTop: 12,
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
  day: {
    fontWeight: "bold",
  },
  daySlot: {
    padding: windowHeight * 0.007,
    borderRadius: 8,
    backgroundColor: "#D3DDF6",
    elevation: 2,
    paddingHorizontal: windowWidth * 0.02,
    marginLeft: windowWidth * 0.01,
  },
  heading: {
    fontWeight: "bold",
  },
  subjectColumn: {
    borderLeftWidth: 0,
    borderColor: "transparent",
  },
  thumbsUpButton: {
    position: "absolute",
    bottom: 0,
    right: 5,
    margin: 2,
  },
  // regenerateButton: {
  //   position: 'absolute',
  //   bottom: 20,
  //   right: 20,
  //   backgroundColor: '#ffffff',
  //   borderRadius: 30,
  //   width: 50,
  //   height: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   elevation: 3,
  // },
});

export default TimeTable;