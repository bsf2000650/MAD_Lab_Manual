import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const List = () => {
  const studentData = [
    {
      id: '1',
      firstName: 'Triple',
      lastName: 'H',
      rollNumber: '123',
      registrationNumber: '456',
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com',
      imageUrl: './images/student_img.jpg', // Replace with the URL of the student's image
    },
    {
      id: '2',
      firstName: 'Brock',
      lastName: 'Lesnar',
      rollNumber: '123',
      registrationNumber: '456',
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com',
      imageUrl: './images/student_img.jpg', // Replace with the URL of the student's image
    },
    {
      id: '3',
      firstName: 'John',
      lastName: 'Cena',
      rollNumber: '123',
      registrationNumber: '456',
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com',
      imageUrl: './images/student_img.jpg', // Replace with the URL of the student's image
    },
    {
      id: '4',
      firstName: 'Roman',
      lastName: 'Reigns',
      rollNumber: '123',
      registrationNumber: '456',
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com',
      imageUrl: './images/student_img.jpg', // Replace with the URL of the student's image
    },
    {
      id: '5',
      firstName: 'CM',
      lastName: 'Punk',
      rollNumber: '123',
      registrationNumber: '456',
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com',
      imageUrl: './images/student_img.jpg', // Replace with the URL of the student's image
    },
    {
      id: '6',
      firstName: 'CM',
      lastName: 'Punk',
      rollNumber: '123',
      registrationNumber: '456',
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com',
      imageUrl: './images/student_img.jpg', // Replace with the URL of the student's image
    },
    {
      id: '7',
      firstName: 'CM',
      lastName: 'Punk',
      rollNumber: '123',
      registrationNumber: '456',
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com',
      imageUrl: './images/student_img.jpg', // Replace with the URL of the student's image
    },
    // Add more students as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={require('./images/student_img.jpg')} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{`${item.firstName} ${item.lastName}`}</Text>
        <Text>{`Roll Number: ${item.rollNumber}`}</Text>
        <Text>{`Registration Number: ${item.registrationNumber}`}</Text>
        <Text>{`Phone Number: ${item.phoneNumber}`}</Text>
        <Text>{`Email: ${item.email}`}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={studentData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
    borderWidth:1,
    borderColor:'black'
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default List;
