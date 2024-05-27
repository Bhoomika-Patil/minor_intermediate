import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function QuestionScreen() {
  const [classHours, setClassHours] = useState('');
  const [travelHours, setTravelHours] = useState('');
  const [studyHours, setStudyHours] = useState('');
  const [subjectData, setSubjectData] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);

  const navigation = useNavigation();

  const handleSubmit = () => {
    const total = parseInt(classHours) + parseInt(travelHours) + parseInt(studyHours);
    setTotalVotes(total);
  
    // Log data to the console
    console.log("Class Hours:", classHours);
    console.log("Travel Hours:", travelHours);
    console.log("Study Hours:", studyHours);
    console.log("Subject Data:", subjectData);
  
    // Navigate to the TimeTable component
    navigation.navigate('TimeTable');
  };
 
  const handleSubjectChange = (index, value) => {
    const newData = [...subjectData];
    newData[index] = { ...newData[index], subject: value };
    setSubjectData(newData);
  };
 var percentages = [];
 
// Extracting percentage values and storing them in an array
for (var i = 0; i < subjectData.length; i++) {
    var percentage = subjectData[i].percentage;
    // Only push non-empty percentages
    if (percentage !== "") {
        percentages.push(parseFloat(percentage)); // Convert to float if needed
    }
}
console.log("Percentages array:", percentages);
  var obj={
          q1:classHours,
          q2:travelHours,
          q3:studyHours,
          percentages: percentages
        };
        
        console.log("questions",obj);
        const ws = new WebSocket('ws://192.168.42.182:8082');
    
        ws.onopen = () => {
          console.log('WebSocket connected');
          ws.send(JSON.stringify(obj));
        };
    
        ws.onerror = (error) => {
          console.error('WebSocket error:', error);
        };
    
        ws.onclose = () => {
          console.log('WebSocket closed');
        };
  const handlePercentageChange = (index, value) => {
    const newData = [...subjectData];
    newData[index] = { ...newData[index], percentage: value };
    setSubjectData(newData);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Let's Study Smart</Text>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>How many hours do you plan to spend in classes per day?</Text>
          <TextInput
            style={styles.input}
            value={classHours}
            onChangeText={text => setClassHours(text)}
            placeholder="Enter hours"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>How many hours do you spend traveling per day?</Text>
          <TextInput
            style={styles.input}
            value={travelHours}
            onChangeText={text => setTravelHours(text)}
            placeholder="Enter hours"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>How many hours do you prefer to study per day?</Text>
          <TextInput
            style={styles.input}
            value={studyHours}
            onChangeText={text => setStudyHours(text)}
            placeholder="Enter hours"
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.title}>Prioritize your Subjects</Text>
        {subjectData.map((subject, index) => (
          <View key={index} style={styles.subjectContainer}>
            <TextInput
              style={[styles.input, styles.subjectInput]}
              value={subject.subject}
              onChangeText={text => handleSubjectChange(index, text)}
              placeholder="Subject"
            />
            <TextInput
              style={[styles.input, styles.percentageInput]}
              value={subject.percentage}
              onChangeText={text => handlePercentageChange(index, text)}
              placeholder="%"
              keyboardType="numeric"
            />
          </View>
        ))}
        <TouchableOpacity
          style={[styles.addButton, { display: subjectData.length < 6 ? 'flex' : 'none' }]}
          onPress={() => setSubjectData([...subjectData, { subject: '', percentage: '' }])}
        >
          <Text style={styles.addButtonText}>Add Subject</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '14%',
    textAlign: 'center',
    color: '#333',
  },
  questionContainer: {
    marginBottom: '3%',
  },
  question: {
    fontSize: 16,
    marginBottom: '2%',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: '3%',
    width: '100%',
    marginBottom: '4%',
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#0766ad',
    padding: '3%',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: '4%',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subjectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2%',
  },
  subjectInput: {
    flex: 2,
    marginRight: '2%',
  },
  percentageInput: {
    flex: 1,
  },
  addButton: {
    backgroundColor: '#8EA7E9',
    padding: '3%',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: '5%',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export { QuestionScreen };
