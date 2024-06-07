import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ImageBackground, TouchableOpacity, Text ,Image} from 'react-native';
import{Post_call} from '../Api/post.service'
import{Api} from '../Api/config'

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const Signup = ({navigation}) => {
  const[studentId,setStudentId]=useState('');
  const [UserName, setUserName] = useState('');
  const [dept, setDept] = useState('');
  const [sem, setSem] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const SignupService=(studentId,UserName,dept,sem,email,password)=>{
    const Pass_Data={
      apiUrl:Api+"users/signup",
      requestBody:{
        studentId:studentId,
        username: UserName,
        department: dept,
        semester:sem,
        email:email,
        password:password
      }
    }
    Post_call(Pass_Data).then((res)=>{
      console.log(res)
      navigation.navigate('Dashboard')
    }).catch((err)=>{
      console.log(err)
    })
  }

  const handleSignup = () => {
    // Validate form fields
    if (!studentId || !UserName || !dept || !sem || !email || !password) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    SignupService(studentId, UserName, dept, sem, email, password);


    // Process signup logic here (e.g., send data to server)

    // Reset form fields
    setStudentId('');
    setUserName('');
    setDept('');
    setSem('');
    setEmail('');
    setPassword('');


    Alert.alert('Success', 'Signup successful');
    
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/signupbg.png')}
        style={styles.background}
      >
        <View style={styles.content}>
          {/* <Image
            source={require('../assets/signup.png')}
            style={styles.image}
          /> */}
          <TextInput
            style={styles.input}
            placeholder="Enter the Rollno"
            value={studentId}
            onChangeText={(text) => setStudentId(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter the Userame"
            value={UserName}
            onChangeText={(text) => setUserName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your Department"
            value={dept}
            onChangeText={(text) => setDept(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your Semster"
            value={sem}
            onChangeText={(text) => setSem(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Set the Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <CustomButton
            title="Sign Up"
            onPress={handleSignup}
            buttonStyle={styles.signUpButton}
            textStyle={styles.buttonText}
          />
        </View>
        <View style={{marginTop:-15,marginLeft:20}}>
          <Text>Already have a account Plaese?
            <Text style={{color:"blue",fontSize:15}} onPress={()=>navigation.navigate('Login')} >Login</Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop:100
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
  },
  content: {
    paddingHorizontal: 0,
    // backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add background color with opacity
    borderRadius: 15,
    paddingVertical: 30,
    marginHorizontal: 20,
    width:'90%',
    marginTop:90
  },
  signUpButton: {
    backgroundColor: '#1E90FF',
  },
  input: {
    width: '100%',
    height: 50,
    marginVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 15,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    // borderRadius: 80,
    alignSelf: 'center',
    // backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  button: {
    marginTop: 15,
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    width: "70%",
    borderWidth: 2,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  }
});

export default Signup;
