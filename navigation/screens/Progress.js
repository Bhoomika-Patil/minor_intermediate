// import * as React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';

// export default function ProgressPage({ navigation }) {
//   // Default values for completed and pending tasks
//   const completedTasks = [];
//   const pendingTasks = [];

//   // Sample data for the line chart
//   const chartData = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // X-axis labels
//     datasets: [
//       {
//         // data: [ 1, 2, 3, 4, 5], // Y-axis data (number of tasks)
//         data: [ 0, 0, 0, 0, 0,0,0], // Y-axis data (number of tasks)
//       },
//     ],
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Task Overview</Text>
      
//       {/* Completed Tasks Button */}
//       <TouchableOpacity
//         style={styles.button}
//         // onPress={() => console.log('Completed Tasks button pressed')}
//       >
//         <Text style={styles.buttonText}>Completed Tasks</Text>
//         <View style={styles.taskCount}>
//           <Text style={styles.taskCountText}>{completedTasks.length}</Text>
//         </View>
//       </TouchableOpacity>
  
//       {/* Pending Tasks Button */}
//       <TouchableOpacity
//         style={styles.button}
//         // onPress={() => console.log('Pending Tasks button pressed')}
//       >
//         <Text style={styles.buttonText}>Pending Tasks</Text>
//         <View style={styles.taskCount}>
//           <Text style={styles.taskCountText}>{pendingTasks.length}</Text>
//         </View>
//       </TouchableOpacity>
  
//       {/* Blue Box */}
//       <View style={styles.blueBox}>
//         <Text style={styles.blueBoxHeading}>Completion of Daily Tasks</Text>
//         {completedTasks.length === 0 && pendingTasks.length === 0 ? (
//           <Text>No task data</Text>
//         ) : (
//           <LineChart
//             data={chartData}
//             width={280}
//             height={180}
//             yAxisLabel="Tasks"
//             chartConfig={{
//               backgroundGradientFrom: '#fff',
//               backgroundGradientTo: '#fff',
//               color: (opacity = 1) => rgba(7, 102, 173, ${opacity}),
//               labelColor: (opacity = 1) => rgba(7, 102, 173, ${opacity}),
//               strokeWidth: 2,
//               barPercentage: 0.5,
//               useShadowColorFromDataset: false,
//               yAxisInterval: 1,
//               decimalPlaces: 0,
//               max: 5, // Limit to a maximum of 5 tasks
//               propsForVerticalLabels: {
//                 fontSize: 12,
//                 fontWeight: 'bold',
//                 color: '#333',
//               },
//               formatYLabel: (label) => {
//                 return label.toString(); // Convert label to string
//               },
//               decorator: (value, index) => {
//                 return (
//                   <View key={index} style={styles.verticalLine}>
//                     <Text style={styles.verticalLabelText}>{value}</Text>
//                   </View>
//                 );
//               },
//             }}
//             style={styles.chart}
//           />
//         )}
//       </View>
//     </View>
//   );
//           }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: 'center',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#0766AD',
//   },
//   button: {
//     backgroundColor: '#D3DDF6',
//     padding: 7,
//     borderRadius: 10,
//     marginBottom: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     borderColor: '#0766AD',
//     borderWidth: 1.5,
//     position: 'relative',
//   },
//   buttonText: {
//     color: '#0766AD',
//     fontWeight: 'bold',
//     flex: 1,
//   },
//   taskCount: {
//     backgroundColor: '#0766AD',
//     borderRadius: 50,
//     padding: 5,
//     width: 40,
//     height: 40,
//     position: 'absolute',
//     right: -6,
//     top: -4,
//     zIndex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   taskCountText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
  
//   chart: {
//     marginTop: 20,
//   },
//   verticalLine: {
//     width: 1,
//     height: 180, // Height of the chart
//     backgroundColor: '#333',
//     position: 'absolute',
//     left: '20%', // Adjust the position of the vertical lines
//   },
//   verticalLabelText: {
//     fontSize: 12,
//     // fontWeight: 'bold',
//     color: '#333',
//     position: 'absolute',
//     left: '10%', // Adjust the position of the labels
//     bottom: -10,
//   },
//   blueBoxHeading: {
//     fontSize: 14, // Decreased font size to 14
//     fontWeight: 'bold',
//     marginBottom: 0,
//     color: '#0766AD',
//     alignSelf: 'flex-start', // Align to the left side
//   },
//   blueBox: {
//     backgroundColor: '#D3DDF6',
//     borderRadius: 10,
//     padding: 20,
//     width: '100%',
//     alignItems: 'flex-start', // Align children to the left
//     marginTop: 20,
//   },
// });

import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function ProgressPage({ navigation }) {
  // Default values for completed and pending tasks
  const completedTasks = [];
  const pendingTasks = [];

  // Sample data for the line chart
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // X-axis labels
    datasets: [
      {
        // data: [ 1, 2, 3, 4, 5], // Y-axis data (number of tasks)
        data: [ 0, 0, 0, 0, 0,0,0], // Y-axis data (number of tasks)
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Task Overview</Text>
      
      {/* Completed Tasks Button */}
      <TouchableOpacity
        style={styles.button}
        // onPress={() => console.log('Completed Tasks button pressed')}
      >
        <Text style={styles.buttonText}>Completed Tasks</Text>
        <View style={styles.taskCount}>
          <Text style={styles.taskCountText}>{completedTasks.length}</Text>
        </View>
      </TouchableOpacity>

      {/* Pending Tasks Button */}
      <TouchableOpacity
        style={styles.button}
        // onPress={() => console.log('Pending Tasks button pressed')}
      >
        <Text style={styles.buttonText}>Pending Tasks</Text>
        <View style={styles.taskCount}>
          <Text style={styles.taskCountText}>{pendingTasks.length}</Text>
        </View>
      </TouchableOpacity>

      {/* Blue Box */}
      <View style={styles.blueBox}>
      <Text style={styles.blueBoxHeading}>Completion of Daily Tasks</Text>
        {/* Line Chart */}
        <LineChart
          data={chartData}
          width={280}
          height={180}
          yAxisLabel="Tasks"
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => `rgba(7, 102, 173, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(7, 102, 173, ${opacity})`,
            strokeWidth: 2,
            barPercentage: 0.5,
            useShadowColorFromDataset: false,
            yAxisInterval: 1,
            decimalPlaces: 0,
            max: 5, // Limit to a maximum of 5 tasks
            propsForVerticalLabels: {
              fontSize: 12,
              fontWeight: 'bold',
              color: '#333',
            },
            formatYLabel: (label) => {
              return label.toString(); // Convert label to string
            },
            decorator: (value, index) => {
              return (
                <View key={index} style={styles.verticalLine}>
                  <Text style={styles.verticalLabelText}>{value}</Text>
                </View>
              );
            },
          }}
          style={styles.chart}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0766AD',
  },
  button: {
    backgroundColor: '#D3DDF6',
    padding:10,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height:50,
    borderColor: '#0766AD',
    borderWidth: 1.3,
    position: 'relative',
  },
  buttonText: {
    color: '#0766AD',
    fontWeight: 'bold',
    flex: 1,
  },
  taskCount: {
    backgroundColor: '#0766AD',
    borderRadius: 50,
    padding: 5,
    width: 55,
    height: 55,
    position: 'absolute',
    right: -11.5,
    top: -5,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskCountText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
  chart: {
    marginTop: 20,
  },
  verticalLine: {
    width: 1,
    height: 180, // Height of the chart
    backgroundColor: '#333',
    position: 'absolute',
    left: '20%', // Adjust the position of the vertical lines
  },
  verticalLabelText: {
    fontSize: 12,
    // fontWeight: 'bold',
    color: '#333',
    position: 'absolute',
    left: '10%', // Adjust the position of the labels
    bottom: -10,
  },
  blueBoxHeading: {
    fontSize: 14, // Decreased font size to 14
    fontWeight: 'bold',
    marginBottom: 0,
    color: '#0766AD',
    alignSelf: 'flex-start', // Align to the left side
  },
  blueBox: {
    backgroundColor: '#D3DDF6',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    alignItems: 'flex-start', // Align children to the left
    marginTop: 20,
  },
});