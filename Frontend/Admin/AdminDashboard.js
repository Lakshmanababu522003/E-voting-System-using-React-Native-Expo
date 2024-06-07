import React,{useEffect,useState} from 'react';
import { View, Text, Button,Image, StyleSheet,ScrollView ,TouchableOpacity,ImageBackground} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Logout from '../Pages/Logout';
import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawer from '../Pages/CustomDrawer';


const Stack = createStackNavigator();



  

  const Overview = ({navigation}) =>{
  const [candidates, setCandidates] = useState([]);
  const [voterDetails, setVoterDetails] = useState([]);



    useEffect(() => {
      fetchCandidates();
    }, [candidates]);
  
    const fetchCandidates = async () => {
      try {
        const response = await fetch('http://192.168.43.248:4000/candidate/read');
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      fetchVoters();
    }, [voterDetails]);
  
    const fetchVoters = async () => {
      try {
        const response = await fetch('http://192.168.43.248:4000/users/read');
        const data = await response.json();
        setVoterDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    return(
        
        <View style={styles.screen}>
            <ImageBackground
        source={require('../assets/signupbg.png')}
        style={styles.background}
      >
            
        {/* Candidate Card */}
        <TouchableOpacity onPress={() => navigation.navigate('clist')}>
            <View style={styles.Overviewcard}>
                <Text style={styles.cardTitle}>Candidate</Text>
                <Text>{candidates.length} Members</Text>
            </View>
        </TouchableOpacity>

        {/* Event Card */}
        <TouchableOpacity onPress={() => navigation.navigate('elist')}>
            <View style={styles.Overviewcard}>
                <Text style={styles.cardTitle}>Event</Text>
                <Text>20 events</Text>
            </View>
        </TouchableOpacity>

        {/* Student Card */}
        <TouchableOpacity onPress={() => navigation.navigate('vlist')}>
            <View style={styles.Overviewcard}>
                <Text style={styles.cardTitle}>Voters</Text>
                <Text>{voterDetails.length} Members</Text>
            </View>
        </TouchableOpacity>
        </ImageBackground>
    </View>
    )
  }
  

const AdminDashboard = () => {
  const Drawer = createDrawerNavigator();

  return (
    
      <Drawer.Navigator drawerContent={props=><CustomDrawer {...props} />}>
        <Drawer.Screen name="Dashboard" component={Overview} />

      </Drawer.Navigator>
    
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // alignItems: 'center',
        // padding: 20,
        marginTop:0,


      },
      
      Overviewcard: {
        width:'70%',
marginLeft:50,
        marginTop:70,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        elevation: 3, // for Android
        shadowColor: '#000', // for iOS
        shadowOpacity: 0.2, // for iOS
        shadowOffset: { width: 0, height: 2 }, // for iOS
        shadowRadius: 2,
        alignItems:'center'
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center",
        
      },
    
});

export default AdminDashboard;
