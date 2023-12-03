import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native';
import List from './List';
import { useNavigation } from '@react-navigation/native';
const green1 = '#11401b'

const SubFragment1 = ({ department, imageSource, onPress, children }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('List', { department });
  };
  return (
    <>
    <TouchableOpacity onPress={handlePress} style={styles.fragment}>
      <Image source={imageSource} style={styles.image} />
      <Text style={{ marginBottom: 3 }}>{department}</Text>
      {children}
    </TouchableOpacity>
    </>
  );
};

const FragmentList = () => {
  const handleDepartmentClick = (department) => {
    // Perform navigation or display specific content based on the clicked department
    <List />
  };

  return (
    <>
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
    <Text style={styles.text}>Department of DSNT</Text>
    <View style={styles.container}>
      <SubFragment1
        department="Inform Technology"
        imageSource={require('./images/it.jpg')} // Replace with the actual image path
        onPress={handleDepartmentClick}
      >
        {/* Content for Department 1 */}
      </SubFragment1>
      <SubFragment1
        department="Computer Science"
        imageSource={require('./images/cs.jpg')} // Replace with the actual image path
        onPress={handleDepartmentClick}
      >
        {/* Content for Department 2 */}
      </SubFragment1>
      <SubFragment1
        department="Physics"
        imageSource={require('./images/ph.jpg')} // Replace with the actual image path
        onPress={handleDepartmentClick}
      >
        {/* Content for Department 1 */}
      </SubFragment1>
      <SubFragment1
        department="Chemistry"
        imageSource={require('./images/ch.png')} // Replace with the actual image path
        onPress={handleDepartmentClick}
      >
        {/* Content for Department 2 */}
      </SubFragment1>
      <SubFragment1
        department="Zoology"
        imageSource={require('./images/zoo.jpg')} // Replace with the actual image path
        onPress={handleDepartmentClick}
      >
        {/* Content for Department 1 */}
      </SubFragment1>
      <SubFragment1
        department="Botany"
        imageSource={require('./images/bot.jpg')} // Replace with the actual image path
        onPress={handleDepartmentClick}
      >
        {/* Content for Department 2 */}
      </SubFragment1>
      <SubFragment1
        department="Sports"
        imageSource={require('./images/sports.png')} // Replace with the actual image path
        onPress={handleDepartmentClick}
      >
        {/* Content for Department 1 */}
      </SubFragment1>
      <SubFragment1
        department="Societies"
        imageSource={require('./images/soc.jpg')} // Replace with the actual image path
        onPress={handleDepartmentClick}
      >
        {/* Content for Department 2 */}
      </SubFragment1>
      {/* Repeat the pattern for other departments */}
    </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:30
  },
  text:{
    textAlign:'center',
    fontSize:40,
    fontWeight:'bold',
    color:'#11401b'
  },
  fragment: {
    width: 150,
    height: 120, // Adjust height to accommodate both image and text
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10
  },
  image: {
    width: 148,
    height: 90,
    // marginBottom: 10,
    borderRadius:10

  },
});

export default FragmentList;
