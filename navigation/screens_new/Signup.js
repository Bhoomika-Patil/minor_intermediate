import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleLogin = () => {
    var obj = {
      name: username,
      email: email,
      password: pwd,
    };
    console.log('My Object:', obj);
    axios.post('http://192.168.42.182:5001/minordb', obj)
      .then(res => {
        console.log('Registration successful');
        props.navigation.navigate('Login');
      })
      .catch(err => console.log(err));
  }
  const handleChangeUsername=(text)=>{
          setUsername(text)
        }
        const handleChangeEmail=(text)=>{
          setUseremail(text)
        }
        const handleChangePwd=(text)=>{
          setUserPwd(text)
        }
        
    
  return (
    <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps='handled'>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Create a new account</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            onChangeText={handleChangeUsername}
            placeholder="First Name"
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={handleChangeEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            onChangeText={handleChangePwd}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}  // Call handleLogin on press
          >
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  formContainer: {
    marginBottom: -60,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#8EA7E9',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: 'bold',
  },
});

export default Signup;
