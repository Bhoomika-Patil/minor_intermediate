// // Function to generate a random number between min and max (inclusive)
// function between(min, max) {  
//   return Math.floor(
//       Math.random() * (max - min + 1) + min
//   );
// }

// // Function to generate random numbers with constraints
// function generateSumEqualToX(total1, remainingHours) {
//   let sum = 0;
//   let numbers = [];
//   for (let j = 0; j < 7; j++) {
//       let max = Math.max(0, Math.min(remainingHours, total1 - sum - (7 - j) * 10));
//       let min = Math.max(0, Math.min(remainingHours, total1 - sum - (7 - j)));
//       let randomNum = between(min, max);
//       sum += randomNum;
//       numbers.push(randomNum);
//   }
//   return numbers;
// }

// let p1 = [50, 25, 25];
// let q1 = 8, q2 = 4, q3 = 6;
// const hrs = 24 - (q1 + q2 + q3);
// console.log("\nTotal hours per day: " + hrs);

// let x = new Array(7).fill(0).map(() => new Array(3).fill(0));

// // Calculate remaining hours after distributing hours for each subject
// let remainingHours = hrs - Math.min(...x.map(arr => arr.reduce((acc, curr) => acc + curr, 0)));

// // Generate hours for each subject
// for (let i = 0; i < 3; i++) {
//   let total = hrs * (p1[i] / 100);
//   let total1 = total * 7;

//   // Generate hours for each day
//   let numbers = generateSumEqualToX(total1, remainingHours);
//   for (let k = 0; k < 7; k++) {
//       x[k][i] = numbers[k];
//   }
// }

// // Display hours for each subject
// for (let i = 0; i < 3; i++) {
//   let total = hrs * (p1[i] / 100);
//   console.log("Hours of subject " + (i + 1) + " per day: " + total);
//   console.log("Total hrs per week after priority for subject " + (i + 1) + ": " + total * 7);
// }

// console.log("\nFinally all of the timetable:");
// console.log(x);
























// import  { useState,useEffect } from "react";
// import React from 'react';
// import axios from "axios";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import WebSocket from 'react-native-websocket';
  
//   const Signup = (props) => {

//     const[username,setUsername]=useState("");
//     const[email,setUseremail]=useState("");
//     const[pwd,setUserPwd]=useState("");
    
    
    
//     const handleLogin=()=>{
//       var obj={
//         name:username,
//         email:email,
//         password:pwd,
//       };
//       console.log('My Object:', obj);
//       axios.post('http://192.168.42.182:5001/minordb', obj)
//     .then(res => {
//       console.log('Registration successful');
//       props.navigation.navigate('Home');
//     })
//     .catch(err => console.log(err));
//     }
    
//     const handleChangeUsername=(text)=>{
//       setUsername(text)
//     }
//     const handleChangeEmail=(text)=>{
//       setUseremail(text)
//     }
//     const handleChangePwd=(text)=>{
//       setUserPwd(text)
//     }
    


//     return (
//       <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps='handled'>
//         <View style={styles.container}>
//           <Text style={styles.title}>Register</Text>
//           <Text style={styles.subtitle}>Create a new account</Text>
//           <View style={styles.formContainer}>
//             <TextInput
//               style={styles.input}
//               onChangeText={handleChangeUsername}
//               placeholder="First Name"
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Last Name"
//             />
//             <TextInput
//               style={styles.input}
//               onChangeText={handleChangeEmail}
//               placeholder="Email"
//               keyboardType="email-address"
//             />
//             <TextInput
//               style={styles.input}
//               onChangeText={handleChangePwd}
//               placeholder="Password"
//               secureTextEntry={true}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Confirm Password"
//               secureTextEntry={true}
//             />
//             <TouchableOpacity
//               style={styles.button}
//               onPress={handleLogin}
//               // onPress={() => }
//             >
//               <Text style={styles.buttonText} Press={handleLogin}>Signup</Text>
//             </TouchableOpacity>
//             <View style={styles.loginContainer}>
//               <Text style={styles.loginText}>Already have an account? </Text>
//               <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
//                 <Text style={styles.loginLink}>Login</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//         <WebSocket
//         url="ws://192.168.42.182:8081"
//         onOpen={() => {
//           console.log('Connected to WebSocket server');
//         }}
//         onMessage={(event) => {
//           const message = JSON.parse(event.data);
//           if (message.userid_stored) {
//             console.log(`User ID from signup.js: ${message.userid_stored}`);
//             // Handle the received userid_stored as needed
//           }
//         }}
//         onClose={() => {
//           console.log('Disconnected from WebSocket server');
//         }}
//         onError={(error) => {
//           console.error('WebSocket error:', error);
//         }}
//       />

//       </ScrollView>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     scrollView: {
//       flexGrow: 1,
//     },
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       paddingHorizontal: 20,
//     },
//     title: {
//       fontSize: 32,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       marginBottom: 15,
//     },
//     subtitle: {
//       fontSize: 18,
//       textAlign: 'center',
//       marginBottom: 20,
//     },
//     formContainer: {
//       marginBottom: -60,
//     },
//     input: {
//       borderWidth: 1,
//       borderColor: '#ddd',
//       borderRadius: 5,
//       padding: 10,
//       fontSize: 16,
//       marginBottom: 15,
//     },
//     button: {
//       backgroundColor: '#8EA7E9',
//       padding: 15,
//       borderRadius: 5,
//       alignItems: 'center',
//       marginBottom: 20,
//     },
//     buttonText: {
//       color: '#fff',
//       fontSize: 16,
//       fontWeight: 'bold',
//     },
//     loginContainer: {
//       flexDirection: 'row',
//       justifyContent: 'center',
//     },
//     loginText: {
//       fontSize: 16,
//     },
//     loginLink: {
//       fontSize: 16,
//       color: '#8EA7E9',
//       fontWeight: 'bold',
//     },
//   });
  
//   export default Signup;

