import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

function ProfileScreen() {
  const navigation = useNavigation(); // Get navigation object

  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleChoosePhoto = () => {
    Alert.alert(
      'Choose Photo',
      'Please select the source of the photo:',
      [
        {
          text: 'Gallery',
          onPress: () => launchImagePicker(),
        },
        {
          text: 'Camera',
          onPress: () => launchCamera(),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
    );
  };

  const launchImagePicker = () => {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setPhoto(response.uri);
      }
    });
  };

  const launchCamera = () => {
    const options = {
      title: 'Take Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled taking photo');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setPhoto(response.uri);
      }
    });
  };

  const handleSave = () => {
    // Perform save action here
    console.log('Saving profile...');
    // For now, let's log the profile details to the console
    console.log({
      name,
      email,
      phoneNumber,
    });
  };

  return (
    <View style={styles.container}>
      {/* Back navigation arrow */}
      {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome5 name="arrow-left" style={styles.backIcon} />
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.imageContainer} onPress={handleChoosePhoto}>
        <Image
          source={photo ? { uri: photo } : require('../../assets/default_img.png') }
          style={styles.photo}
        />
        <Text style={styles.changePhotoText}>Change Photo</Text>
      </TouchableOpacity>
      
      <View style={styles.inputContainer}>
        <FontAwesome5 name="user" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome5 name="envelope" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome5 name="phone-alt" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>

      {/* Save button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backIcon: {
    fontSize: 20,
    color: '#333333',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 20,
  },
  changePhotoText: {
    marginTop: 5,
    color: '#007AFF',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
    fontSize: 20,
    color: '#333333',
  },
  saveButton: {
    backgroundColor: '#000000',
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 15,
  },
});

export default ProfileScreen;