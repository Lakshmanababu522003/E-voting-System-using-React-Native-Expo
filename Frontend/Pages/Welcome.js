import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View,Image, Alert } from 'react-native';

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );

export default function Welcome({navigation}) {
    const handleSignUp = () => {
        // Handle sign up logic
        // Alert.alert('you are moved to signup page');
        // console.log('Sign up button pressed');
        navigation.navigate('Login')
      };
    
      const handleSignIn = () => {
        // Handle sign in logic
        console.log('Sign in button pressed');
        navigation.navigate('Adminlogin')

      };
  return (
      <View style={{width:"100%",backgroundColor:"aqua", height: "65%", borderBottomRightRadius: 50,borderBottomLeftRadius:50 }}>
         <View style={{marginLeft:80,marginTop:80,width:"100%"}}>
         <Image
        style={{width:200,height:200,}}
        source={require('../assets/welcome.png')}
        transition={1000}
      />
      </View>
      <View>
      <Text style={{marginTop:20,fontSize:20,width:"100%",textAlign:"center",lineHeight:30,fontWeight:"bold"}}>Voting is the expression of our commitment{"\n"} to ourselves</Text>
      </View>
        <View >
        
        <CustomButton
        title="Voter"
        onPress={handleSignUp}
        buttonStyle={styles.signUpButton}
        textStyle={styles.buttonText}
      />
      <CustomButton
        title="Admin"
        onPress={handleSignIn}
        buttonStyle={styles.signInButton}
        textStyle={styles.buttonText}
      />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
        marginTop:150,
        marginLeft:15,
      alignItems: 'center',
      padding: 10,
      borderRadius: 90,
      width:"90%"
    },
    buttonText: {
      fontSize: 16,
      color: '#000',
    },
    signUpButton: {
      backgroundColor: '#088F8F',
    },
    signInButton: {
        marginTop:40,
      backgroundColor: 'violet',
    },
  });
